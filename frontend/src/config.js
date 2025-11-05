//const baseURL="http://14.99.141.154:1886/api";
//const baseURL="http://172.16.0.17:1886/api";
//const baseURL="http://172.16.1.100:1886/api";
//const baseURL="http://172.16.0.248:4853/api";
//const baseURL="http://14.99.141.154:4853/api";

const LOCAL_BASE_URL = "http://172.16.0.248:4854/api";  // Local network URL
const PUBLIC_BASE_URL = "http://14.99.141.154:4854/api"; // Public URL

const baseURL = window.location.hostname.includes("localhost") || window.location.hostname.startsWith("172.")
    ? LOCAL_BASE_URL
    : PUBLIC_BASE_URL;

export default baseURL;