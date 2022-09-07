package net.oprup.HumanResource;
import net.oprup.HumanResource.model.*;

import net.oprup.HumanResource.service.TimeSheetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/TimeSheet")
@CrossOrigin(origins = "*")
public class TimeSheetController {
    private final TimeSheetService timeSheetService;

    public TimeSheetController(TimeSheetService timeSheetService) {
        this.timeSheetService = timeSheetService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<TimeSheet>> getAll(){
        List<TimeSheet> timeSheets = timeSheetService.findAllTimeSheets();
        return new ResponseEntity<>(timeSheets, HttpStatus.OK);
    }

    @GetMapping("/TimeSheet/{employeeId}")
    public ResponseEntity<?> getTimeSheetOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<TimeSheet> TimeSheet = timeSheetService.getSheetsOfEmployee(emp);
        return new ResponseEntity<>(TimeSheet, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TimeSheet> addTimeSheet(@RequestBody TimeSheet timeSheet){
        TimeSheet newTimeSheet = timeSheetService.addTimeSheet(timeSheet);
        return new ResponseEntity<>(newTimeSheet, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<TimeSheet> updateTimeSheet(@RequestBody TimeSheet timeSheet){
        TimeSheet updateTimeSheet = timeSheetService.updateTimeSheet(timeSheet);
        return new ResponseEntity<>(updateTimeSheet, HttpStatus.OK);
    }


//    @GetMapping("/sheet/{employeeId}/{attDate}")
//    public ResponseEntity<?> getGenerated(@PathVariable("employeeId") Long employeeId, @PathVariable String attDate){
//        HR02_E01_Employee emp =  new HR02_E01_Employee();
//        emp.setEmployeeId(employeeId);
//        List<TimeSheet> TimeSheet = timeSheetService.findTimeSheetOfEmployee(emp,attDate);
//        return new ResponseEntity<>(TimeSheet, HttpStatus.OK);
//    }
//    @GetMapping("/sheetbetween/{employeeId}/{attDate2}/{attDate3}")
//    public ResponseEntity<?> getGeneratedBetween(@PathVariable("employeeId") Long employeeId, @PathVariable("attDate2") String attDate2,@PathVariable("attDate3") String attDate3){
//        HR02_E01_Employee emp =  new HR02_E01_Employee();
//        emp.setEmployeeId(employeeId);
//        List<TimeSheet> TimeSheet = timeSheetService.findTimeSheetOfEmployeeBetween(emp,attDate2,attDate3);
//        return new ResponseEntity<>(TimeSheet, HttpStatus.OK);
//    }


    @GetMapping("/employeeSheet/{employeeId}/{attDay}/{attMonth}/{attYear}")
    public ResponseEntity<?> getEmployeeSheetAndDate(@PathVariable Long employeeId, @PathVariable Integer attDay,  @PathVariable Integer attMonth, @PathVariable Integer attYear){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);


        List<TimeSheet> timeSheets = timeSheetService.findOfEmployeeBetween(emp,attDay,attMonth,attYear);
        return new ResponseEntity<>(timeSheets, HttpStatus.OK);
    }

}
