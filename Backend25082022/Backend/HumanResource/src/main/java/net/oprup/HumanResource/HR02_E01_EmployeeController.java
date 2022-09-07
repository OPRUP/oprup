package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.service.HR02_E01_EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*")
public class HR02_E01_EmployeeController {

    private final HR02_E01_EmployeeService employeeService;

    public HR02_E01_EmployeeController(HR02_E01_EmployeeService employeeService) {
        this.employeeService = employeeService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<HR02_E01_Employee>> getAllEmployees(){
        List<HR02_E01_Employee> employees = employeeService.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @GetMapping("/resAndCode")
    public ResponseEntity<?> getResAndCode(){
        List<?> employees = employeeService.findResAndcode();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }



    @GetMapping("/find/{employeeId}")
    public ResponseEntity<HR02_E01_Employee> getEmployeeById(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee employee = employeeService.findEmployeeById(employeeId);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR02_E01_Employee> addEmployee(@RequestBody HR02_E01_Employee employee){
        HR02_E01_Employee newEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR02_E01_Employee> updateEmployee(@RequestBody HR02_E01_Employee employee){
        HR02_E01_Employee updateEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<HR02_E01_Employee> deleteEmployee(@RequestBody HR02_E01_Employee employee){
        HR02_E01_Employee deleteEmployee = employeeService.deleteEmployee(employee);
        return new ResponseEntity<>(deleteEmployee, HttpStatus.OK);
    }

//    @GetMapping("/notification")
//
//    public ResponseEntity<List<HR02_E01_Employee>> getAllNotification(){
//        List<HR02_E01_Employee> records = employeeService.getNotification();
//        return new ResponseEntity<>(records, HttpStatus.OK);
//    }

    //new

    @GetMapping("/ExitEmployee")
    public ResponseEntity<List<HR02_E01_Employee>> getAllExitEmployees(){
        List<HR02_E01_Employee> employees = employeeService.findExitEmployee();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }



    @GetMapping("/ResidenceNotificationInWeek")
    public ResponseEntity<List<HR02_E01_Employee>> getResidenceInWeek(){
        List<HR02_E01_Employee> records = employeeService.getNotificationResidenceInWeek();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/ResidenceNotificationInTwoWeek")
    public ResponseEntity<List<HR02_E01_Employee>> getResidenceInTwoWeek(){
        List<HR02_E01_Employee> records = employeeService.getNotificationResidenceInTwoWeek();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/ResidenceNotificationInThreeWeek")
    public ResponseEntity<List<HR02_E01_Employee>> getResidenceInThreeWeek(){
        List<HR02_E01_Employee> records = employeeService.getNotificationResidenceInThreeWeek();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/ResidenceNotificationInFourWeek")
    public ResponseEntity<List<HR02_E01_Employee>> getResidenceInFourWeek(){
        List<HR02_E01_Employee> records = employeeService.getNotificationResidenceInFourWeek();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    //for passport
    @GetMapping("/PassPortNotificationInMonth")
    public ResponseEntity<List<HR02_E01_Employee>> getPassPortNotificationInMonth(){
        List<HR02_E01_Employee> records = employeeService.getNotificationPassPortInFirstMonth();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/PassPortNotificationInTwoMonth")
    public ResponseEntity<List<HR02_E01_Employee>> getPassPortNotificationInTwoMonth(){
        List<HR02_E01_Employee> records = employeeService.getNotificationPassPortInTwoMonth();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/PassPortNotificationInThreeMonth")
    public ResponseEntity<List<HR02_E01_Employee>> getPassPortNotificationInThreeMonth(){
        List<HR02_E01_Employee> records = employeeService.getNotificationPassPortInThreeMonth();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/PassPortNotificationInFourMonth")
    public ResponseEntity<List<HR02_E01_Employee>> getPassPortNotificationInFourMonth(){
        List<HR02_E01_Employee> records = employeeService.getNotificationResidenceInFourWeek();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/count")

    public int getAllEmployeeCount(){
        int records = (int) employeeService.countOfEmployee();
        return records;}
    @GetMapping("/countOfExitEmployee")

    public int getAllExitEmployeeCount(){
        int records = (int) employeeService.countOfExitEmployee();
        return records;
    }

    @GetMapping("/getExistEmployee")
    public ResponseEntity<List<HR02_E01_Employee>> getAllExistEmployee(){
        List<HR02_E01_Employee> records = employeeService.findExistEmployee();
        return new ResponseEntity<>(records, HttpStatus.OK);}


}
