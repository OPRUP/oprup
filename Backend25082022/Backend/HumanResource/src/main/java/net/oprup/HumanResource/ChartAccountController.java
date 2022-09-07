package net.oprup.HumanResource;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.service.ChartAccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chartAccount")
@CrossOrigin(origins = "*")
public class ChartAccountController {

    private final ChartAccountService chartAccountService;

    public ChartAccountController(ChartAccountService chartAccountService) {
        this.chartAccountService = chartAccountService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ChartAccount>> getAll(){
        List<ChartAccount> records = chartAccountService.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/findType/{type}")
    public ResponseEntity<List<ChartAccount>> getSub(@PathVariable("type") String accountType){
        List<ChartAccount> records = chartAccountService.findByType(accountType);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{accountId}")
    public ResponseEntity<ChartAccount> getAccountById(@PathVariable("accountId") Long accountId){
        ChartAccount record = chartAccountService.findById(accountId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @GetMapping("/findName/{accountName}")
    public ResponseEntity<ChartAccount> getAccountByName(@PathVariable("accountName") String accountName){
        ChartAccount record = chartAccountService.findByName(accountName);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }


    @GetMapping("/findSubParent/{parent_account}")
    public ResponseEntity<List<ChartAccount>> getSubByParent(@PathVariable("parent_account") String parent_account){
        List<ChartAccount> records = chartAccountService.findSubByParent(parent_account);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ChartAccount> add(@RequestBody ChartAccount record){
        ChartAccount newRecord = chartAccountService.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<ChartAccount> update(@RequestBody ChartAccount record){
        ChartAccount updateRecord = chartAccountService.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<ChartAccount> delete(@RequestBody ChartAccount record){
        ChartAccount deleteRecord = chartAccountService.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
    @GetMapping("/findCode/{account_code}")
    public ResponseEntity<List<ChartAccount>> getByCode(@PathVariable("account_code") Long account_code){
        List<ChartAccount> records = chartAccountService.findByCode(account_code);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
@GetMapping("/findParent/{account_code}")
    public ResponseEntity<List<ChartAccount>> getByParent(@PathVariable("account_code") Long account_code){
        List<ChartAccount> records = chartAccountService.findByParent(account_code);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

}
