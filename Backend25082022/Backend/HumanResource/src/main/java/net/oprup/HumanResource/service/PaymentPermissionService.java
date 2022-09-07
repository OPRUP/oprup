package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.PaymentPermission;
import net.oprup.HumanResource.model.PaymentVoucher;
import net.oprup.HumanResource.repo.PaymentPermissionRepo;
import net.oprup.HumanResource.repo.PaymentVoucherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentPermissionService {
    private final PaymentPermissionRepo paymentPermissionRepo;

    @Autowired
    public PaymentPermissionService(PaymentPermissionRepo paymentPermissionRepo) {
        this.paymentPermissionRepo = paymentPermissionRepo;
    }
    public PaymentPermission addPaymentPermission(PaymentPermission paymentPermission){
        paymentPermission.setDeleteFlag(1);
        return paymentPermissionRepo.save(paymentPermission);
    }

    public List<PaymentPermission> findAllPaymentPermission(){
        return  paymentPermissionRepo.findPaymentPermissionByDeleteFlag();
    }
    public PaymentPermission updatePaymentPermission(PaymentPermission paymentPermission){
        paymentPermission.setDeleteFlag(1);
        return paymentPermissionRepo.save(paymentPermission);
    }
    public PaymentPermission findPaymentPermissionByPaymentPermissionId(Long paymentPermissionId){
        return (PaymentPermission) paymentPermissionRepo.findPaymentPermissionByPaymentPermissionId(paymentPermissionId)
                .orElseThrow(() -> new UserNotFoundException("Project by id: " + paymentPermissionId + " not found"));
    }
    public PaymentPermission deletePaymentPermission(PaymentPermission paymentPermission){
        paymentPermission.setDeleteFlag(0);
        return paymentPermissionRepo.save(paymentPermission);
    }
}
