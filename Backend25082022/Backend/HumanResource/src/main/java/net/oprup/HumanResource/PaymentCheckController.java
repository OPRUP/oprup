package net.oprup.HumanResource;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.Check;
import net.oprup.HumanResource.model.PaymentCheck;
import net.oprup.HumanResource.model.PaymentVoucher;
import net.oprup.HumanResource.service.PaymentCheckService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/PaymentCheck")
@CrossOrigin(origins = "*")
public class PaymentCheckController {
    private final PaymentCheckService paymentCheckService;

    public PaymentCheckController(PaymentCheckService paymentCheckService) {
        this.paymentCheckService = paymentCheckService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<PaymentCheck>> getAllChecks() {
        List<PaymentCheck> paymentChecks = paymentCheckService.findAllChecks();
        return new ResponseEntity<>(paymentChecks, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PaymentCheck> addCheck(@RequestBody PaymentCheck check) {
        PaymentCheck record  = paymentCheckService.addPaymentCheck(check);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }



    @PutMapping("/delete")
    public ResponseEntity<PaymentCheck> deleteCheck(@RequestBody PaymentCheck check){
        PaymentCheck deleteCheck = paymentCheckService.deletePaymentCheck(check);
        return new ResponseEntity<>(deleteCheck, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<PaymentCheck> updateCheck(@RequestBody PaymentCheck record){
        PaymentCheck updateRecord = paymentCheckService.updatePaymentCheck(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @GetMapping("/finds/{paymentVoucherId}")
    public ResponseEntity<?> getChecksByPaymentVouchers(@PathVariable("paymentVoucherId") Long paymentVoucherId){
        PaymentVoucher voucher =  new PaymentVoucher();
        voucher.setPaymentVoucherId(paymentVoucherId);
        List<PaymentCheck> checks = paymentCheckService.findCheckByPaymentVoucher(voucher);
        return new ResponseEntity<>(checks, HttpStatus.OK);
    }
    @GetMapping("/findCheck/{checksAccount}")
    public ResponseEntity<?> getCheck(@PathVariable Long checksAccount){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(checksAccount);


        List<PaymentCheck> paymentChecks = paymentCheckService.findCheckAccount(coa);
        return new ResponseEntity<>(paymentChecks, HttpStatus.OK);
    }
}

