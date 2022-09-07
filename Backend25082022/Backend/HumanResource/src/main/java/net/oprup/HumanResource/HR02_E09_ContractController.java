package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E09_Contract;
import net.oprup.HumanResource.service.HR02_E09_ContractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeContract")
@CrossOrigin(origins = "*")
public class HR02_E09_ContractController {

    private final HR02_E09_ContractService service;

    public HR02_E09_ContractController(HR02_E09_ContractService service) {
        this.service = service;
    }


    @GetMapping("/all")
    public ResponseEntity<List<HR02_E09_Contract>> getAll(){
        List<HR02_E09_Contract> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{contractId}")
    public ResponseEntity<HR02_E09_Contract> getById(@PathVariable("contractId") Long contractId){
        HR02_E09_Contract record = service.findById(contractId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @GetMapping("/employee-contract/{employeeId}")
    public ResponseEntity<?> getContractsOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E09_Contract> employeeContract = service.getContractsOfEmployee(emp);
        return new ResponseEntity<>(employeeContract, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<HR02_E09_Contract> add(@RequestBody HR02_E09_Contract record){
        HR02_E09_Contract newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E09_Contract> update(@RequestBody HR02_E09_Contract record){
        HR02_E09_Contract updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E09_Contract> delete(@RequestBody HR02_E09_Contract record){
        HR02_E09_Contract deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
  @GetMapping("/notification")

      public ResponseEntity<List<HR02_E09_Contract>> getAllNotification(){
          List<HR02_E09_Contract> records = service.getNotification();
          return new ResponseEntity<>(records, HttpStatus.OK);
      }

      //new

    @GetMapping("/count")

    public int getAllContractsCount(){
        int records = (int) service.countOfContracts();
        return records;
    }

    @GetMapping("/countOfQiwa")
    public int getAllQiwa(){
        int records = (int) service.countOfQiwa();
        return records;
    }

    @GetMapping("/allQiwaEmployee")
    public ResponseEntity<List<HR02_E09_Contract>> getAllQiwaEmployee(){
        List<HR02_E09_Contract> records = service.getAllQiwaEmployee();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
}




