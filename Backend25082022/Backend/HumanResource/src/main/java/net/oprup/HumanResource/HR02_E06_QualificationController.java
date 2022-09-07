package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.model.HR02_E06_Qualification;
import net.oprup.HumanResource.service.HR02_E06_QualificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetailsQualification")
@CrossOrigin(origins = "*")
public class HR02_E06_QualificationController {
    private final HR02_E06_QualificationService service;
    public HR02_E06_QualificationController(HR02_E06_QualificationService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR02_E06_Qualification>> getAll(){
        List<HR02_E06_Qualification> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{qualificationId}")
    public ResponseEntity<HR02_E06_Qualification> getById(@PathVariable("qualificationId") Long qualificationId){
        HR02_E06_Qualification record = service.findById(qualificationId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<HR02_E06_Qualification> add(@RequestBody HR02_E06_Qualification record){
        HR02_E06_Qualification newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E06_Qualification> update(@RequestBody HR02_E06_Qualification record){
        HR02_E06_Qualification updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E06_Qualification> delete(@RequestBody HR02_E06_Qualification record){
        HR02_E06_Qualification deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/employee-qualification/{employeeId}")
    public ResponseEntity<?> getQualificationOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E06_Qualification> employeeQualification = service.getQualificationOfEmployee(emp);
        return new ResponseEntity<>(employeeQualification, HttpStatus.OK);
    }

    @DeleteMapping("/{employeeQualificationId}")
    public void deleteQualification(@PathVariable("employeeQualificationId") Long qualificationId){
        this.service.deleteQualification(qualificationId);

    }
}


