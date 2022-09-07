


package net.oprup.HumanResource;


import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.PaymentVoucher;

import net.oprup.HumanResource.service.PaymentVoucherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/paymentVoucher")
@CrossOrigin(origins = "*")
public class PaymentVoucherController {
    private final PaymentVoucherService paymentVoucherService;

    public PaymentVoucherController(PaymentVoucherService paymentVoucherService) {
        this.paymentVoucherService = paymentVoucherService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<PaymentVoucher>> getAllPaymentVoucher() {
        List<PaymentVoucher> receiptVoucher = paymentVoucherService.findAllPaymentVoucher();
        return new ResponseEntity<>(receiptVoucher, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PaymentVoucher> addPaymentVoucher(@RequestBody PaymentVoucher paymentVoucher) {
        PaymentVoucher record  = paymentVoucherService.addpaymentVoucher(paymentVoucher);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


    @GetMapping("/find/{paymentVoucherId}")
    public ResponseEntity<PaymentVoucher> getPaymentVoucherById(@PathVariable("paymentVoucherId") Long paymentVoucherId){
        PaymentVoucher paymentVoucher = paymentVoucherService.findPaymentVoucherByPaymentVoucherId(paymentVoucherId);
        return new ResponseEntity<>(paymentVoucher, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<PaymentVoucher> deletePaymentVoucher(@RequestBody PaymentVoucher paymentVoucher){
        PaymentVoucher deletePaymentVoucher = paymentVoucherService.deletePaymentVoucher(paymentVoucher);
        return new ResponseEntity<>(deletePaymentVoucher, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<PaymentVoucher> update(@RequestBody PaymentVoucher record){
        PaymentVoucher updateRecord = paymentVoucherService.updatePaymentVoucher(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }



    @GetMapping("/findCash/{cashAccount}")
    public ResponseEntity<?> getCashAccount(@PathVariable Long cashAccount){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(cashAccount);


        List<PaymentVoucher> paymentVouchers = paymentVoucherService.findCashAccount(coa);
        return new ResponseEntity<>(paymentVouchers, HttpStatus.OK);
    }

    @GetMapping("/findVendor/{vendorAccount}")
    public ResponseEntity<?> getVendorAccount(@PathVariable Long vendorAccount){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(vendorAccount);


        List<PaymentVoucher> paymentVouchers = paymentVoucherService.findVendorAccount(coa);
        return new ResponseEntity<>(paymentVouchers, HttpStatus.OK);
    }

    @GetMapping("/count")
    public  long count(){
        long records = paymentVoucherService.countId();
        return (records);
    }


}