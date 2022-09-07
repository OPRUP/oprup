package net.oprup.HumanResource.service;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.PaymentCheckRepo;
import net.oprup.HumanResource.repo.PaymentChecksPermissionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentChecksPermissionService {
    private final PaymentChecksPermissionRepo paymentChecksPermissionRepo;
    @Autowired
    public PaymentChecksPermissionService(PaymentChecksPermissionRepo paymentChecksPermissionRepo) {
        this.paymentChecksPermissionRepo = paymentChecksPermissionRepo;
    }



    public PaymentChecksPermission addPaymentCheckPermission(PaymentChecksPermission paymentChecksPermission){
        paymentChecksPermission.setDeleteFlag(1);
        return paymentChecksPermissionRepo.save(paymentChecksPermission);
    }
    public List<PaymentChecksPermission> findAllPermissionChecks(){
        return  paymentChecksPermissionRepo.findPaymentChecksPermissionByDeleteFlag();
    }

    public PaymentChecksPermission updatePaymentCheckPermission(PaymentChecksPermission paymentChecksPermission){
        paymentChecksPermission.setDeleteFlag(1);
        return paymentChecksPermissionRepo.save(paymentChecksPermission);
    }
//    public ReceiptVoucher findReceiptVoucherByReceiptVoucherId(Long receiptVoucherId){
//        return (ReceiptVoucher) checkRepo.fibd(receiptVoucherId)
//                .orElseThrow(() -> new UserNotFoundException("Project by id: " + receiptVoucherId + " not found"));
//    }


    public PaymentChecksPermission deletePaymentCheck(PaymentChecksPermission paymentChecksPermission){
        paymentChecksPermission.setDeleteFlag(0);
        return paymentChecksPermissionRepo.save(paymentChecksPermission);
    }

    //    public List<Check> findCheckByReceiptVoucher(ReceiptVoucher receiptVoucher) {
//        return paymentCheckRepo.findCheckByReceiptVoucher(receiptVoucher);
//
//    }
    public List<PaymentChecksPermission> findPaymentCheckPermissionByPaymentPermission(PaymentPermission paymentChecksPermission) {
        return paymentChecksPermissionRepo.findPaymentChecksPermissionByPaymentPermission(paymentChecksPermission);

    }


}
