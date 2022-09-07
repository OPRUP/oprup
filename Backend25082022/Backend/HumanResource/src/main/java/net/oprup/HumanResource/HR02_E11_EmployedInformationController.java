package net.oprup.HumanResource;

import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.HR02_E11_EmployedInformationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employeeDetailsEmployedInformation")
@CrossOrigin(origins = "*")
public class HR02_E11_EmployedInformationController {
    private final HR02_E11_EmployedInformationService service;
    public HR02_E11_EmployedInformationController(HR02_E11_EmployedInformationService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR02_E11_EmployedInformation>> getAll(){
        List<HR02_E11_EmployedInformation> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{empId}")
    public ResponseEntity<HR02_E11_EmployedInformation> getById(@PathVariable("empId") Long empId){
        HR02_E11_EmployedInformation record = service.findById(empId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @GetMapping("/employee-code/{companyId}")
    public ResponseEntity<?> getEmployeeCodeByCompanyId(@PathVariable("companyId") Long companyId){
        A02_InternalCompany company =  new A02_InternalCompany();
        company.setCompanyId(companyId);
        List<HR02_E11_EmployedInformation> employeeCodeList = service.getEmployeeCodeByCompanyId(company);
        return new ResponseEntity<>(employeeCodeList, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<HR02_E11_EmployedInformation> add(@RequestBody HR02_E11_EmployedInformation record){
        HR02_E11_EmployedInformation newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E11_EmployedInformation> update(@RequestBody HR02_E11_EmployedInformation record){
        HR02_E11_EmployedInformation updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E11_EmployedInformation> delete(@RequestBody HR02_E11_EmployedInformation record){
        HR02_E11_EmployedInformation deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/employee-employed/{employeeId}")
    public ResponseEntity<?> getEmployedOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E11_EmployedInformation> employeeEmployed = service.getEmployedOfEmployee(emp);
        return new ResponseEntity<>(employeeEmployed, HttpStatus.OK);
    }

    @DeleteMapping("/{employedId}")
    public void deleteEmployed(@PathVariable("employedId") Long employedId){
        this.service.deleteEmployed(employedId);
    }
}


