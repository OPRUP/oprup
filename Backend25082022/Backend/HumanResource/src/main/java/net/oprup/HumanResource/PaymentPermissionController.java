package net.oprup.HumanResource;
import net.oprup.HumanResource.model.PaymentPermission;
import net.oprup.HumanResource.model.PaymentVoucher;
import net.oprup.HumanResource.service.PaymentPermissionService;
import net.oprup.HumanResource.service.PaymentVoucherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paymentPermission")
@CrossOrigin(origins = "*")
public class PaymentPermissionController {
    private final PaymentPermissionService paymentPermissionService;

    public PaymentPermissionController(PaymentPermissionService paymentPermissionService) {
        this.paymentPermissionService = paymentPermissionService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<PaymentPermission>> getAllPaymentPermission() {
        List<PaymentPermission> paymentPermissions = paymentPermissionService.findAllPaymentPermission();
        return new ResponseEntity<>(paymentPermissions, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PaymentPermission> addPaymentPermission(@RequestBody PaymentPermission paymentPermission) {
        PaymentPermission record  = paymentPermissionService.addPaymentPermission(paymentPermission);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


    @GetMapping("/find/{paymentPermissionId}")
    public ResponseEntity<PaymentPermission> getPaymentPermissionById(@PathVariable("paymentPermissionId") Long paymentPermissionId){
        PaymentPermission paymentPermission = paymentPermissionService.findPaymentPermissionByPaymentPermissionId(paymentPermissionId);
        return new ResponseEntity<>(paymentPermission, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<PaymentPermission> deletePaymentVoucher(@RequestBody PaymentPermission paymentPermission){
        PaymentPermission deletePaymentPermission = paymentPermissionService.deletePaymentPermission(paymentPermission);
        return new ResponseEntity<>(deletePaymentPermission, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<PaymentPermission> update(@RequestBody PaymentPermission record){
        PaymentPermission updateRecord = paymentPermissionService.updatePaymentPermission(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

}
