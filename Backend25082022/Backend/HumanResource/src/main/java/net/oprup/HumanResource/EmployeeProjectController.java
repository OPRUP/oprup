package net.oprup.HumanResource;

import net.oprup.HumanResource.model.EmployeeProject;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.TimeSheet;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.service.EmployeeProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeProject")
@CrossOrigin(origins = "*")

public class EmployeeProjectController {
    private final EmployeeProjectService service;
    public EmployeeProjectController(EmployeeProjectService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<EmployeeProject>> getAll(){
        List<EmployeeProject> records = service.findAllProjectEmployee();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{employeeProjectId}")
    public ResponseEntity<EmployeeProject> getById(@PathVariable("employeeProjectId") Long employeeProjectId){
        EmployeeProject record = service.findEmployeeProjectById(employeeProjectId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<EmployeeProject> addEmployeeProject(@RequestBody EmployeeProject record){
        EmployeeProject newRecord = service.addEmployeeProject(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<EmployeeProject> update(@RequestBody EmployeeProject record){
        EmployeeProject updateRecord = service.updateEmployeeProject(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<EmployeeProject> delete(@RequestBody EmployeeProject record){
        EmployeeProject deleteRecord = service.deleteEmployeeProject(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/findEmp/{employeeId}")
    public ResponseEntity<?> getEmployeeP(@PathVariable Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);


        List<EmployeeProject> employeeProjects = service.findEmp(emp);
        return new ResponseEntity<>(employeeProjects, HttpStatus.OK);
    }

}
