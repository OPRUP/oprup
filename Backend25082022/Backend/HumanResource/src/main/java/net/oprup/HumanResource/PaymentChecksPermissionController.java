package net.oprup.HumanResource;

import net.oprup.HumanResource.model.PaymentCheck;
import net.oprup.HumanResource.model.PaymentChecksPermission;
import net.oprup.HumanResource.model.PaymentPermission;
import net.oprup.HumanResource.model.PaymentVoucher;
import net.oprup.HumanResource.service.PaymentCheckService;
import net.oprup.HumanResource.service.PaymentChecksPermissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/PaymentCheckPermission")
@CrossOrigin(origins = "*")
public class PaymentChecksPermissionController {

    private final PaymentChecksPermissionService paymentChecksPermissionService;

    public PaymentChecksPermissionController(PaymentChecksPermissionService paymentChecksPermissionService) {
        this.paymentChecksPermissionService = paymentChecksPermissionService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<PaymentChecksPermission>> getAllChecks() {
        List<PaymentChecksPermission> paymentChecksPermissions = paymentChecksPermissionService.findAllPermissionChecks();
        return new ResponseEntity<>(paymentChecksPermissions, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PaymentChecksPermission> addCheck(@RequestBody PaymentChecksPermission paymentChecksPermission) {
        PaymentChecksPermission record  = paymentChecksPermissionService.addPaymentCheckPermission(paymentChecksPermission);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }



    @PutMapping("/delete")
    public ResponseEntity<PaymentChecksPermission> deleteCheck(@RequestBody PaymentChecksPermission check){
        PaymentChecksPermission deleteCheck = paymentChecksPermissionService.deletePaymentCheck(check);
        return new ResponseEntity<>(deleteCheck, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<PaymentChecksPermission> updateCheck(@RequestBody PaymentChecksPermission record){
        PaymentChecksPermission updateRecord = paymentChecksPermissionService.updatePaymentCheckPermission(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @GetMapping("/finds/{paymentVoucherId}")
    public ResponseEntity<?> getChecksByPaymentVouchers(@PathVariable("paymentVoucherId") Long paymentVoucherId){
        PaymentPermission voucher =  new PaymentPermission();
        voucher.setPaymentPermissionId(paymentVoucherId);
        List<PaymentChecksPermission> checks = paymentChecksPermissionService.findPaymentCheckPermissionByPaymentPermission(voucher);
        return new ResponseEntity<>(checks, HttpStatus.OK);
    }
}
