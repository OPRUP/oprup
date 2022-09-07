package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Contract;
import net.oprup.HumanResource.model.ContractItem;
import net.oprup.HumanResource.service.ContractItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contractItem")
@CrossOrigin(origins = "*")
public class ContractItemController {
    private final ContractItemService service;

    public ContractItemController(ContractItemService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ContractItem>> getAll(){
        List<ContractItem> records = service.findAllContractItem();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/itemByContract/{contractId}")
    public ResponseEntity<?> getContractBycontractId(@PathVariable("contractId") Long contractId){
        Contract emp =  new Contract();
        emp.setContractId(contractId);

        List<ContractItem> ContractItems = service.findContractItemByContract(emp);
        return new ResponseEntity<>(ContractItems, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ContractItem> addContractItem(@RequestBody ContractItem record){
        ContractItem newRecord = service.addContractItem(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ContractItem> update(@RequestBody ContractItem record){
        ContractItem updateRecord = service.updateContractItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<ContractItem> delete(@RequestBody ContractItem record){
        ContractItem deleteRecord = service.deleteContractItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }


    //contract Extension
    @GetMapping("/allExtension")
    public ResponseEntity<List<ContractItem>> getAllExtension(){
        List<ContractItem> records = service.findAllContractExtension();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/findContractItemExtension/{contractId}")
    public ResponseEntity<?> getExtensionById(@PathVariable("contractId") Long contractId){
        List<ContractItem> record = service.findContractExtensionById(contractId);

        return new ResponseEntity<>(record, HttpStatus.OK);
    }

}
