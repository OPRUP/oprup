package net.oprup.HumanResource;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.CheckService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Check")
@CrossOrigin(origins = "*")
public class CheckController {

    private final CheckService checkService;


    public CheckController(CheckService checkService) {
        this.checkService = checkService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Check>> getAllChecks() {
        List<Check> check = checkService.findAllChecks();
        return new ResponseEntity<>(check, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Check> addCheck(@RequestBody Check check) {
        Check record  = checkService.addCheck(check);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


    @GetMapping("/find/{receiptVoucherId}")
    public ResponseEntity<?> getChecksByReceiptVouchers(@PathVariable("receiptVoucherId") Long receiptVoucherId){
        ReceiptVoucher emp =  new ReceiptVoucher();
        emp.setReceiptVoucherId(receiptVoucherId);
        List<Check> checks = checkService.findCheckByReceiptVoucher(emp);
        return new ResponseEntity<>(checks, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Check> deleteCheck(@RequestBody Check check){
        Check deleteCheck = checkService.deleteCheck(check);
        return new ResponseEntity<>(deleteCheck, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Check> updateCheck(@RequestBody Check record){
        Check updateRecord = checkService.updateCheck(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @GetMapping("/findCheck/{checksAccount}")
    public ResponseEntity<?> getCheck(@PathVariable Long checksAccount){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(checksAccount);


        List<Check> checks = checkService.findCheckAccount(coa);
        return new ResponseEntity<>(checks, HttpStatus.OK);
    }

}
