package net.oprup.HumanResource;

import net.oprup.HumanResource.model.EmployeeResidenceTransportation;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.service.EmployeeResidenceTransportationService;
import net.oprup.HumanResource.service.HR02_E08_BankService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeResTrans")
@CrossOrigin(origins = "*")
public class EmployeeResidenceTransportationController {
    private final EmployeeResidenceTransportationService service;
    public EmployeeResidenceTransportationController(EmployeeResidenceTransportationService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<EmployeeResidenceTransportation>> getAll(){
        List<EmployeeResidenceTransportation> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{resTransId}")
    public ResponseEntity<EmployeeResidenceTransportation> getById(@PathVariable("resTransId") Long resTransId){
        EmployeeResidenceTransportation record = service.findById(resTransId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<EmployeeResidenceTransportation> add(@RequestBody EmployeeResidenceTransportation record){
        EmployeeResidenceTransportation newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<EmployeeResidenceTransportation> update(@RequestBody EmployeeResidenceTransportation record){
        EmployeeResidenceTransportation updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<EmployeeResidenceTransportation> delete(@RequestBody EmployeeResidenceTransportation resTrans){
        EmployeeResidenceTransportation deleteResTrans = service.delete(resTrans);
        return new ResponseEntity<>(deleteResTrans, HttpStatus.OK);
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<?> getResTransOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<EmployeeResidenceTransportation> employeeResTrans = service.getResTransOfEmployee(emp);
        return new ResponseEntity<>(employeeResTrans, HttpStatus.OK);
    }
    @DeleteMapping("/{resTransId}")
    public void deleteResidenceAndTransformation(@PathVariable("resTransId") Long resTransId){
        this.service.deleteResTrans(resTransId);

    }
}
