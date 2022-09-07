package net.oprup.HumanResource;

import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.ReceiptVoucherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/ReceiptVoucher")
@CrossOrigin(origins = "*")
public class ReceiptVoucherController {

    private final ReceiptVoucherService receiptVoucherService;

    public ReceiptVoucherController(ReceiptVoucherService receiptVoucherService) {
        this.receiptVoucherService = receiptVoucherService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ReceiptVoucher>> getAllVoucherItems() {
        List<ReceiptVoucher> receiptVoucher = receiptVoucherService.findAllReceiptVoucher();
        return new ResponseEntity<>(receiptVoucher, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ReceiptVoucher> addReceiptVoucher(@RequestBody ReceiptVoucher receiptVoucher) {
        ReceiptVoucher record  = receiptVoucherService.addReceiptVoucher(receiptVoucher);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


    @GetMapping("/find/{receiptVoucherId}")
    public ResponseEntity<ReceiptVoucher> getSiteVisitsById(@PathVariable("receiptVoucherId") Long receiptVoucherId){
        ReceiptVoucher receiptVoucher = receiptVoucherService.findReceiptVoucherByReceiptVoucherId(receiptVoucherId);
        return new ResponseEntity<>(receiptVoucher, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<ReceiptVoucher> deleteProject(@RequestBody ReceiptVoucher receiptVoucher){
        ReceiptVoucher deleteReceiptVoucher = receiptVoucherService.deleteReceiptVoucher(receiptVoucher);
        return new ResponseEntity<>(deleteReceiptVoucher, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ReceiptVoucher> update(@RequestBody ReceiptVoucher record){
        ReceiptVoucher updateRecord = receiptVoucherService.updateReceiptVoucher(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @GetMapping("/findCash/{cashAccount}")
    public ResponseEntity<?> getCashAccount(@PathVariable Long cashAccount){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(cashAccount);


        List<ReceiptVoucher> receiptVouchers = receiptVoucherService.findCashAccount(coa);
        return new ResponseEntity<>(receiptVouchers, HttpStatus.OK);
    }

    @GetMapping("/findVendor/{vendorAccount}")
    public ResponseEntity<?> getVendorAccount(@PathVariable Long vendorAccount){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(vendorAccount);


        List<ReceiptVoucher> receiptVouchers = receiptVoucherService.findVendorAccount(coa);
        return new ResponseEntity<>(receiptVouchers, HttpStatus.OK);
    }

//    @GetMapping("/findCode/{account_code}")
//    public ResponseEntity<?> getAccountCode(@PathVariable Long account_code) {
//        ReceiptVoucher record = receiptVoucherService.findaccountCode(account_code);
//        return new ResponseEntity<>(record, HttpStatus.OK);
//    }
@GetMapping("/count")
public  long count(){
    long records = receiptVoucherService.countId();
    return (records);
}

}
