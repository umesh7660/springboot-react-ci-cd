package com.smartmeter.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smartmeter.DTO.MasterDataDTO;
import com.smartmeter.DTO.TamperEventsDTO;
import com.smartmeter.model.CommunicationDataPojo;
import com.smartmeter.model.MasMetermasterInventoryId;
import com.smartmeter.model.MasterData;
import com.smartmeter.model.MeterLocationDTO;
import com.smartmeter.model.Meterconfig;
import com.smartmeter.model.UserMaster;
import com.smartmeter.services.MasterDataService;
import com.smartmeter.services.MeterConfigService;

@RestController
@RequestMapping("/api/")
public class MasterDataController {

	@Autowired
	private MasterDataService masterDataService;

	@Autowired
	private MeterConfigService meterConfigService;

	@GetMapping("counts/threePhaseMeterCount")
	public List<Object[]> getThreePhaseMeterCount(@RequestParam("level1id") int level1id,
			@RequestParam("section") String section) {
		return masterDataService.getThreePhaseMeterCount(section, level1id); // ← no section used here
	}

	@GetMapping("counts/getAllMeterCounts")
	public Map<String, Long> getAllMeterCounts() {
		return masterDataService.getAllMeterCounts();
	}

	@GetMapping("counts/singlePhaseMeterCount")
	public List<Object[]> getSinglePhaseMeterCount(@RequestParam("level1id") int level1id,
			@RequestParam("section") String section) {
		return masterDataService.getSinglePhaseMeterCount(section, level1id);
	}

	@GetMapping("counts/dtMeterCount")
	public List<Object[]> getDtPhaseMeterCount(@RequestParam("level1id") int level1id,
			@RequestParam("section") String section) {
		System.err.println(level1id);
		return masterDataService.getDtPhaseMeterCount(section, level1id);
	}

	@GetMapping("counts/feederMeterCount")
	public List<Object[]> getFeederMeterCount(@RequestParam("level1id") int level1id,
			@RequestParam("section") String section) {
		return masterDataService.getFeederMeterCount(section, level1id);
	}

	@GetMapping("counts/communicationsDetails")
	public List<Object[]> communicationsDetails(@RequestParam("level1id") int level1id,
			@RequestParam("section") String section) {
		System.out.println("communicationsDetails " + level1id);
		return masterDataService.getCommunicationDetails(section, level1id);
	}

	@GetMapping("counts/last7DaysCountCommunicationDetails")
	public List<Object[]> last7DaysCountCommunicationDetails(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		return masterDataService.getLast7DaysCountCommunicationDetails(section, level1id);
	}

	@GetMapping("counts/tamperCounts")
	public List<Object[]> tamperCounts(@RequestParam("section") String section,@RequestParam("level1id") int level1id) {
		return masterDataService.getTamperCounts(section,level1id);
	}

	@GetMapping("data/tamperData")
	public List<TamperEventsDTO> tamperData(@RequestParam("eventCode") String eventCode,
			@RequestParam("section") String section,@RequestParam("level1id") int level1id) {
		return masterDataService.gettamperData(eventCode, section,level1id);
	}

	@GetMapping("data/tamperSummary")
	public List<TamperEventsDTO> tamperSummary(@RequestParam("startdate") String startdate,
			@RequestParam("enddate") String enddate, @RequestParam("meterNo") @Nullable String meterNo,
			@RequestParam("level1id") int level1id)
			throws ParseException {
		return masterDataService.gettamperSummary(startdate, enddate, meterNo,level1id);
	}

	@GetMapping("data/findThreePhaseMeters")
	public List<CommunicationDataPojo> getThreePhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		System.err.println(level1id);
		return masterDataService.getThreePhaseMeters(section, level1id);
	}

	@GetMapping("data/findSinglePhaseMeters")
	public List<CommunicationDataPojo> getSinglePhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		System.err.println(level1id);
		return masterDataService.getSinglePhaseMeters(section, level1id);
	}

	@GetMapping("data/findDTPhaseMeters")
	public List<CommunicationDataPojo> getDTPhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		System.err.println(level1id);
		return masterDataService.getDTPhaseMeters(section, level1id);
	}

	@GetMapping("data/findFeederPhaseMeters")
	public List<CommunicationDataPojo> getFeederPhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		System.err.println(level1id);
		return masterDataService.getFeederPhaseMeters(section, level1id);
	}

	@GetMapping("data/findCommunicationMeters")
	public List<CommunicationDataPojo> findCommunicationMeters(@RequestParam("level1id") int level1id) {
		return masterDataService.findCommunicationMeters(level1id);
	}

	@GetMapping("data/findRFCommunicationMeters")
	public List<CommunicationDataPojo> findRFCommunicationMeters(@RequestParam("level1id") int level1id) {
		return masterDataService.findRFCommunicationMeters(level1id);
	}

	@GetMapping("data/findNonCommunicationMeters")
	public List<MasterDataDTO> findNonCommunicationMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		return masterDataService.findNonCommunicationMeters(section, level1id);
	}

	@GetMapping("data/findAllInventoryMeters")
	public List<MasMetermasterInventoryId> findAllInventoryMeters() {
		return masterDataService.findAllInventoryMeters();
	}

	@GetMapping("data/findAllSinglePhaseMeters")
	public List<MasterDataDTO> findAllSinglePhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		List<MasterDataDTO> data = masterDataService.getAllSinglePhaseMeters(section, level1id);

		return data;
	}

	@GetMapping("data/findAllThreePhaseMeters")
	public List<MasterDataDTO> findAllThreePhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		return masterDataService.getAllThreePhaseMeters(section, level1id);
	}

	@GetMapping("data/findAllDtPhaseMeters")
	public List<MasterDataDTO> findAllDtMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		return masterDataService.findAllDTCPhaseMeters(section, level1id);
	}

	@GetMapping("data/findAllFeederPhaseMeters")
	public List<MasterDataDTO> findAllFeederPhaseMeters(@RequestParam("section") String section,
			@RequestParam("level1id") int level1id) {
		return masterDataService.getAllFeederPhaseMeters(section, level1id);
	}

	@GetMapping("data/findLast7DaysCommunicationDetails")
	public List<CommunicationDataPojo> findLast7DaysCommunicationDetails(@RequestParam("dayDate") String dayDate,
			@RequestParam("level1id") int level1id) {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;

		try {
			date = sdf.parse(dayDate); // Convert String to Date
			System.out.println("Converted Date: " + date);
		} catch (ParseException e) {
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Expected yyyy-MM-dd");
		}

		return masterDataService.getLast7DaysCommunicationDetails(date,level1id);
	}

	@GetMapping("data/findLast7DaysNonCommunicationDetails")
	public List<MasterData> findLast7DaysNonCommunicationDetails(@RequestParam("dayDate") String dayDate,
			@RequestParam("section") String section, @RequestParam("level1id") int level1id) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = sdf.parse(dayDate); // Convert String to Date
			System.out.println("Converted Date: " + date);
		} catch (ParseException e) {
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Expected yyyy-MM-dd");
		}
		return masterDataService.getLast7DaysNonCommunicationDetails(date, section,level1id);
	}

	@GetMapping("data/findLast7DaysInventory")
	public List<CommunicationDataPojo> getLast7DaysRFCommunicationDetails(@RequestParam("dayDate") String dayDate,
			@RequestParam("level1id") int level1id) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;

		try {
			date = sdf.parse(dayDate); // Convert String to Date
			System.out.println("Converted Date: " + date);
		} catch (ParseException e) {
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid date format. Expected yyyy-MM-dd");
		}
		return masterDataService.getLast7DaysRFCommunicationDetails(date,level1id);
	}

	@GetMapping("data/fetchmetersLocations")
	public List<MeterLocationDTO> fetchmetersLocations() {
		return masterDataService.fetchmetersLocations();
	}

	@GetMapping("data/meterDetails")
	public List<MasterData> fetchmeterDetails(@RequestParam("meterNo") @Nullable String meterNo,
			@RequestParam("level1id") int level1id) {
		return masterDataService.fetchmeterDetails(meterNo,level1id);
	}

	@PostMapping("/data/meterDataUpdate")
	public ResponseEntity<MasterData> meterDataUpdate(@RequestBody MasterData masterData) {
		LocalDateTime local = LocalDateTime.now();
		Timestamp timestamp = Timestamp.valueOf(local);
		masterData.setInsertedDate(timestamp);

		MasterData updatedData = masterDataService.meterDataUpdate(masterData);
		return ResponseEntity.ok(updatedData);
	}

	@PostMapping("/data/meterDataDelete")
	public ResponseEntity<String> meterDataDelete(@RequestParam String meterNo) {
		MasterData masterData = new MasterData();
		masterData.setMeterNo(meterNo);
		String updatedData = masterDataService.meterDataDelete(masterData);
		return ResponseEntity.ok(updatedData);
	}

	@PostMapping("/data/masterConfig")
	public ResponseEntity<String> masterConfig(@RequestParam("metermake") String metermake,
			@RequestParam("interface") String interfaceType, @RequestParam("password") String password,
			@RequestParam("systemtitle") String systemtitle, @RequestParam("blockcipherkey") String blockcipherkey,
			@RequestParam("authenticationkey") String authenticationkey) {
		// You can use the values here
		String configparam = "-h IpAddress -p 4059 -i " + interfaceType + " -c 48 -a High -P " + password
				+ " -C AuthenticationEncryption -T " + systemtitle + " -A " + authenticationkey + " -B "
				+ blockcipherkey + " -v 0.0.43.1.3.255 -d India -t Verbose";
		System.out.println("metermake: " + metermake);
		Meterconfig meterconfig = new Meterconfig();
		meterconfig.setMetermake(metermake);
		meterconfig.setConfigparam(configparam);
		Meterconfig save = meterConfigService.masterConfig(meterconfig);
		return ResponseEntity.ok("Data Saved Successfully");
	}

	@GetMapping("data/fetchMeterList")
	public List<String> fetchMeterList(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "1000") int limit,@RequestParam("level1id") int level1id) {
		return masterDataService.fetchMeterList(page, limit,level1id);
	}

	@PostMapping("/data/meterDataUpload")
	public ResponseEntity<String> meterDataUpload(@RequestParam("file") MultipartFile file) {
		if (file.isEmpty()) {
			return ResponseEntity.badRequest().body("No file uploaded.");
		}

		try (InputStream is = file.getInputStream(); Workbook workbook = new HSSFWorkbook(is)) {
			Sheet sheet = workbook.getSheetAt(0); // Read the first sheet

			// Read headers from the first row
			Row headerRow = sheet.getRow(0);
			if (headerRow == null) {
				return ResponseEntity.badRequest().body("No header found in Excel.");
			}

			int columnCount = headerRow.getPhysicalNumberOfCells();
			System.out.println("Headers:");
			for (int i = 0; i < columnCount; i++) {
				Cell cell = headerRow.getCell(i);
				System.out.print(cell.getStringCellValue() + "\t");
			}
			System.out.println();

			// Read remaining rows (data rows)
			for (int i = 1; i <= sheet.getLastRowNum(); i++) {
				Row row = sheet.getRow(i);
				if (row == null)
					continue;

				MasterData meterData = new MasterData();

				for (int j = 0; j < columnCount; j++) {
					Cell cell = row.getCell(j);
					String value = getCellValueAsString(cell);

					// Map Excel columns to your entity's fields
					switch (headerRow.getCell(j).getStringCellValue()) {
					case "METER_MFG_NO":
						// meterData.setModemMdn(value);
						break;
					case "METERNO":
						meterData.setMeterNo(value);
						break;
					case "ACCOUNT_NUMBER":
						meterData.setAcno(value);
						break;
					case "NAME":
						meterData.setConsumerName(value);
						break;
					case "DISCOM":
						meterData.setSubstationName(value);
						break;
					case "CATEGORY":
						meterData.setCategory(value);
						break;
					case "MF":
						meterData.setMf(Double.valueOf(value));
						break;
					case "MAKE":
						meterData.setMake(value);
						break;
					case "INSTALLATION_DATE":
						// Convert numeric Excel date to timestamp
						double numericDate = cell.getNumericCellValue();
						SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
						meterData.setConnectionDate(new Timestamp((long) numericDate * 24 * 60 * 60 * 1000));
						break;
					case "MOBILENO":
						// meterData.setMobileNo(Long.valueOf(value));
						break;
					case "LATITUDE":
						meterData.setLatitude(value);
						break;
					case "LONGITUDE":
						meterData.setLongitude(value);
						break;
					// Add all other necessary mappings here
					}
				}
				MasterData updatedData = masterDataService.meterDataUpdate(meterData);
			}

			// Call service to save all data

			return ResponseEntity.ok("File uploaded and data saved successfully!");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("Failed to process Excel file.");
		}
	}

	private String getCellValueAsString(Cell cell) {
		if (cell == null)
			return "";

		// Use classic switch statement in Java 1.8
		switch (cell.getCellType()) {
		case STRING:
			return cell.getStringCellValue();
		case NUMERIC:
			return String.valueOf(cell.getNumericCellValue());
		case BOOLEAN:
			return String.valueOf(cell.getBooleanCellValue());
		case FORMULA:
			return cell.getCellFormula();
		default:
			return "";
		}
	}

	@GetMapping("/sample/master-data.xml")
	public ResponseEntity<InputStreamResource> downloadSampleXml() throws IOException {
		File file = new File("D:/data/Master-Upload.xls");

		if (!file.exists()) {
			System.out.println("File not found: " + file.getAbsolutePath());
			return ResponseEntity.notFound().build();
		}

		InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

		return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=master-data.xls")
				.contentType(MediaType.parseMediaType("application/vnd.ms-excel")).contentLength(file.length())
				.body(resource);
	}

}
