import React,{useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "/node_modules/leaflet/dist/leaflet.css";
import "/node_modules/react-leaflet-markercluster/dist/styles.min.css";
import L from "leaflet";
import axios from 'axios';
import baseURL from "../config";
const { BaseLayer } = LayersControl;

const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapWithClusters = () => {
  const navigate = useNavigate();
  const [mapData, setMapData] = useState([]); 
    const isFetched = useRef(false);
    // Function to fetch map data
    const fetchMapData = async () => {
      if (isFetched.current) return;
      isFetched.current = true;
      try {
        const response = await axios.get(`${baseURL}/data/fetchmetersLocations`);
        const filteredData = response.data
          .filter(item => item.latitude && item.longitude && !isNaN(item.latitude) && !isNaN(item.longitude))
          .map((item, index) => ({
            id: index,
            position: [parseFloat(item.latitude), parseFloat(item.longitude)],
            meterNo: item.meterNo || "Unknown",
           
          }));
  
        setMapData(filteredData);
      } catch (error) {
        console.error("API Error (Map Data):", error);
      } 
    };

  // Fetch meter counts periodically
  useEffect(() => {
    fetchMapData();
    //const interval = setInterval(fetchMapData, 5000); // Auto-update every 5 seconds
   //return () => clearInterval(interval);
  }, []);


  return (
    <MapContainer 
      center={[17.3850, 78.4867]} 
      zoom={10} 
      style={{ height: "400px", width: "100%" }} 
      attributionControl={false}
    >
      <LayersControl position="topright">
        <BaseLayer checked name="Normal View">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </BaseLayer>
        <BaseLayer name="Satellite View">
          <TileLayer url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]} />
        </BaseLayer>
        <BaseLayer name="Hybrid View">
          <TileLayer url="https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" subdomains={["mt0", "mt1", "mt2", "mt3"]} />
        </BaseLayer>
      </LayersControl>

      {/* Marker Clustering */}
      <MarkerClusterGroup>
        {Array.isArray(mapData) &&
          mapData.map((marker) => (
            <Marker key={marker.meterNo} position={marker.position} icon={customIcon}>
              <Popup>
                <div>
                  {/* <p><strong>Title:</strong> {marker.title}</p> */}
                  <p><strong>Meter No:</strong> 
                    <span
                      onClick={() => navigate("/singleMeter", { state: { meterNo: marker.meterNo } })}
                      style={{ textDecoration: "none", color: "blue", fontWeight: "bold", cursor: "pointer", marginLeft: "5px" }}
                    >
                      {String(marker.meterNo)}
                    </span>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapWithClusters;
