package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E07_Experience;
import net.oprup.HumanResource.service.HR02_E07_ExperienceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetailsExperience")
@CrossOrigin(origins = "*")
public class HR02_E07_ExperienceController {
    private final HR02_E07_ExperienceService service;
    public HR02_E07_ExperienceController(HR02_E07_ExperienceService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR02_E07_Experience>> getAll(){
        List<HR02_E07_Experience> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{experienceId}")
    public ResponseEntity<HR02_E07_Experience> getById(@PathVariable("experienceId") Long experienceId){
        HR02_E07_Experience record = service.findById(experienceId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @GetMapping("/employee-experience/{employeeId}")
    public ResponseEntity<?> getExperiencesOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E07_Experience> employeeExperience = service.getExperiencesOfEmployee(emp);
        return new ResponseEntity<>(employeeExperience, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<HR02_E07_Experience> add(@RequestBody HR02_E07_Experience record){
        HR02_E07_Experience newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E07_Experience> update(@RequestBody HR02_E07_Experience record){
        HR02_E07_Experience updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E07_Experience> delete(@RequestBody HR02_E07_Experience record){
        HR02_E07_Experience deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @DeleteMapping("/{experienceId}")
    public void deleteExperience(@PathVariable("experienceId") Long experienceId){
        this.service.deleteExperience(experienceId);

    }
}


