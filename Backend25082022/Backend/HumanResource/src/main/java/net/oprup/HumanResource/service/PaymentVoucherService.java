
package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.PaymentVoucher;
import net.oprup.HumanResource.repo.PaymentVoucherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentVoucherService {

    private final PaymentVoucherRepo paymentVoucherRepo;

    @Autowired
    public PaymentVoucherService(PaymentVoucherRepo paymentVoucherRepo) {
        this.paymentVoucherRepo = paymentVoucherRepo;
    }
    public PaymentVoucher addpaymentVoucher(PaymentVoucher paymentVoucher){
        paymentVoucher.setDeleteFlag(1);
        return paymentVoucherRepo.save(paymentVoucher);
    }

    public List<PaymentVoucher> findAllPaymentVoucher(){
        return  paymentVoucherRepo.findPaymentVoucherByDeleteFlag();
    }
    public PaymentVoucher updatePaymentVoucher(PaymentVoucher paymentVoucher){
        paymentVoucher.setDeleteFlag(1);
        return paymentVoucherRepo.save(paymentVoucher);
    }
    public PaymentVoucher findPaymentVoucherByPaymentVoucherId(Long paymentVoucherId){
        return (PaymentVoucher) paymentVoucherRepo.findPaymentVoucherByPaymentVoucherId(paymentVoucherId)
                .orElseThrow(() -> new UserNotFoundException("Project by id: " + paymentVoucherId + " not found"));
    }
    public PaymentVoucher deletePaymentVoucher(PaymentVoucher paymentVoucher){
        paymentVoucher.setDeleteFlag(0);
        return paymentVoucherRepo.save(paymentVoucher);
    }
    public List<PaymentVoucher> findCashAccount(ChartAccount coa) {
        return paymentVoucherRepo.findCashAccount(coa);
    }


    public List<PaymentVoucher> findVendorAccount(ChartAccount coa) {
        return paymentVoucherRepo.findVendorAccount(coa);
    }
    public long countId(){

        return paymentVoucherRepo.countPaymentVoucherByPaymentVoucherId();
    }
}