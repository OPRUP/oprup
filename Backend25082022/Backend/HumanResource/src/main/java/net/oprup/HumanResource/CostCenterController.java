package net.oprup.HumanResource;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.CostCenter;
import net.oprup.HumanResource.service.ChartAccountService;
import net.oprup.HumanResource.service.CostCenterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/costCenter")
@CrossOrigin(origins = "*")
public class CostCenterController {
    private final CostCenterService costCenterService;

    public CostCenterController(CostCenterService costCenterService) {
        this.costCenterService = costCenterService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<CostCenter>> getAll(){
        List<CostCenter> records = costCenterService.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/count")
    public  long count(){
        long records = costCenterService.countId();
        return (records);
    }
    @GetMapping("/find/{costCenterId}")
    public ResponseEntity<CostCenter> getAccountById(@PathVariable("costCenterId") Long costCenterId){
        CostCenter record = costCenterService.findById(costCenterId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<CostCenter> add(@RequestBody CostCenter record){
        CostCenter newRecord = costCenterService.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<CostCenter> update(@RequestBody CostCenter record){
        CostCenter updateRecord = costCenterService.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<CostCenter> delete(@RequestBody CostCenter record){
        CostCenter deleteRecord = costCenterService.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
}
