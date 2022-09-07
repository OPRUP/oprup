package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Contract;

import net.oprup.HumanResource.model.ContractItem;
import net.oprup.HumanResource.service.ContractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contract")
@CrossOrigin(origins = "*")
public class ContractController {
    private final ContractService service;

    public ContractController(ContractService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Contract>> getAll(){
        List<Contract> records = service.findAllContract();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{contractId}")
    public ResponseEntity<Contract> getById(@PathVariable("contractId") Long contractId){
        Contract record = service.findContractById(contractId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Contract> add(@RequestBody Contract record){
        Contract newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Contract> update(@RequestBody Contract record){
        Contract updateRecord = service.updateContract(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Contract> delete(@RequestBody Contract record){
        Contract deleteRecord = service.deleteContract(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
    @GetMapping("/count")

    public long getAllContractCount(){
        long records = service.countOfContract();
        return records;
    }

    //extension
    @GetMapping("/allByExtension")
    public ResponseEntity<List<Contract>> getAllByExtension(){
        List<Contract> records = service.findAllContractByContractExtension();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/findByCustomer/{customerId}")
    public ResponseEntity<Contract> getByCustomerId(@PathVariable("customerId") Long customerId){
        Contract record = service.findContractByCustomerId(customerId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @GetMapping("/findExtension/{contractId}")
    public ResponseEntity<Contract> getExtensionById(@PathVariable("contractId") Long contractId){
        Contract record = service.findContractExtensionById(contractId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }


}
