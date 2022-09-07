package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.Hokome;
import net.oprup.HumanResource.service.HokomeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hokome")
@CrossOrigin(origins = "*")
public class HokomeController {
    private final HokomeService service;
    public HokomeController(HokomeService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Hokome>> getAll(){
        List<Hokome> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{healthId}")
    public ResponseEntity<Hokome> getById(@PathVariable("healthId") Long healthId){
        Hokome record = service.findById(healthId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Hokome> add(@RequestBody Hokome record){
        Hokome newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Hokome> update(@RequestBody Hokome record){
        Hokome updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Hokome> delete(@RequestBody Hokome record){
        Hokome deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/employee-health/{employeeId}")
    public ResponseEntity<?> getHokomeOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<Hokome> employeeHealth = service.getHokomeOfEmployee(emp);
        return new ResponseEntity<>(employeeHealth, HttpStatus.OK);
    }
    @DeleteMapping("/{healthId}")
    public void deleteHealth(@PathVariable("healthId") Long addressId){
        this.service.deleteHealth(addressId);

    }

    @GetMapping("/notification")

    public ResponseEntity<List<Hokome>> getAllNotification(){
        List<Hokome> records = service.getNotification();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    //new
    @GetMapping("/countbyInsurance")

    public int getAllInsuranceCount(){
        int records = (int) service.countOfInsurance();
        return records;
    }

    @GetMapping("/countbyMedicalResult")

    public int getMedicalResultCount(){
        int records = (int) service.countMedicalResult();
        return records;
    }
    @GetMapping("/countbyResidence")

    public int getAllResidenceCount(){
        int records = (int) service.countOfResidenceByInsuranceAndMedicalResult();
        return records;
    }

    @GetMapping("/ByMedicalExaminationCode")
    public ResponseEntity<List<Hokome>> getAllByMedicalExaminationCode(){
        List<Hokome> records = service.findAllByMedicalExaminationCode();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/ByInsurancesCode")
    public ResponseEntity<List<Hokome>> getAllByInsurancesCode(){
        List<Hokome> records = service.findAllByInsurancesCode();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/ByNotHaveResidenceYet")
    public ResponseEntity<List<Hokome>> getAllByByNotHaveResidenceYet(){
        List<Hokome> records = service.findAllByNotHaveResidenceYet();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
}


