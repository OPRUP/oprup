package net.oprup.HumanResource;


import net.oprup.HumanResource.model.HR02_E13_EmployeeSalaryObject;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.service.HR02_E13_EmployeeSalaryObjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeSalaryObject")
@CrossOrigin(origins = "*")
public class HR02_E13_EmployeeSalaryObjectController {

    private final HR02_E13_EmployeeSalaryObjectService employeeSalaryObjectService;

    public HR02_E13_EmployeeSalaryObjectController(HR02_E13_EmployeeSalaryObjectService employeeSalaryObjectService) {
        this.employeeSalaryObjectService = employeeSalaryObjectService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<HR02_E13_EmployeeSalaryObject>> getAllEmployeeSalaryObjects(){
        List<HR02_E13_EmployeeSalaryObject> HR02E13EmployeeSalaryObjects = employeeSalaryObjectService.findAllEmployeeSalaryObjects();
        return new ResponseEntity<>(HR02E13EmployeeSalaryObjects, HttpStatus.OK);
    }

    @GetMapping("/find/{employeeSalaryObjectId}")
    public ResponseEntity<HR02_E13_EmployeeSalaryObject> getEmployeeSalaryObjectById(@PathVariable("employeeSalaryObjectId") Long employeeSalaryObjectId){
        HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject = employeeSalaryObjectService.findEmployeeSalaryObjectById(employeeSalaryObjectId);
        return new ResponseEntity<>(HR02E13EmployeeSalaryObject, HttpStatus.OK);
    }

    @GetMapping("/employee-salary-object/{employeeId}")
    public ResponseEntity<?> getEmployeeSalaryObjectOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E13_EmployeeSalaryObject> HR02E13EmployeeSalaryObjects = employeeSalaryObjectService.getEmployeeSalaryObjectsOfEmployee(emp);
        return new ResponseEntity<>(HR02E13EmployeeSalaryObjects, HttpStatus.OK);
    }

    @GetMapping("/employee-salary-object-type/{employeeId}/{type}")
    public ResponseEntity<?> getEmployeeSalaryObjectOfEmployeeAndType(@PathVariable Long employeeId, @PathVariable String type){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);


        List<HR02_E13_EmployeeSalaryObject> HR02E13EmployeeSalaryObjects = employeeSalaryObjectService.getEmployeeSalaryObjectsOfEmployeeAndType(emp, type);
        return new ResponseEntity<>(HR02E13EmployeeSalaryObjects, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<HR02_E13_EmployeeSalaryObject> addEmployeeSalaryObject(@RequestBody HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject){
        HR02_E13_EmployeeSalaryObject newHR02E13EmployeeSalaryObject = employeeSalaryObjectService.addEmployeeSalaryObject(HR02E13EmployeeSalaryObject);
        return new ResponseEntity<>(newHR02E13EmployeeSalaryObject, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR02_E13_EmployeeSalaryObject> updateEmployeeSalaryObject(@RequestBody HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject){
        HR02_E13_EmployeeSalaryObject updateHR02E13EmployeeSalaryObject = employeeSalaryObjectService.updateEmployeeSalaryObject(HR02E13EmployeeSalaryObject);
        return new ResponseEntity<>(updateHR02E13EmployeeSalaryObject, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<HR02_E13_EmployeeSalaryObject> deleteEmployeeSalaryObject(@RequestBody HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject){
        HR02_E13_EmployeeSalaryObject deleteHR02E13EmployeeSalaryObject = employeeSalaryObjectService.deleteEmployeeSalaryObject(HR02E13EmployeeSalaryObject);
        return new ResponseEntity<>(deleteHR02E13EmployeeSalaryObject, HttpStatus.OK);
    }


}
