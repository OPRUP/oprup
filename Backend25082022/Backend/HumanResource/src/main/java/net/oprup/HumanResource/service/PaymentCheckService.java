package net.oprup.HumanResource.service;


import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.PaymentCheck;
import net.oprup.HumanResource.model.PaymentVoucher;

import net.oprup.HumanResource.repo.PaymentCheckRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class PaymentCheckService {
    private final PaymentCheckRepo paymentCheckRepo;
    @Autowired
    public PaymentCheckService(PaymentCheckRepo paymentCheckRepo) {
        this.paymentCheckRepo = paymentCheckRepo;
    }


    public PaymentCheck addPaymentCheck(PaymentCheck paymentCheck){
        paymentCheck.setDeleteFlag(1);
        return paymentCheckRepo.save(paymentCheck);
    }
    public List<PaymentCheck> findAllChecks(){
        return  paymentCheckRepo.findPaymentCheckByDeleteFlag();
    }

    public PaymentCheck updatePaymentCheck(PaymentCheck paymentCheck){
        paymentCheck.setDeleteFlag(1);
        return paymentCheckRepo.save(paymentCheck);
    }
//    public ReceiptVoucher findReceiptVoucherByReceiptVoucherId(Long receiptVoucherId){
//        return (ReceiptVoucher) checkRepo.fibd(receiptVoucherId)
//                .orElseThrow(() -> new UserNotFoundException("Project by id: " + receiptVoucherId + " not found"));
//    }


    public PaymentCheck deletePaymentCheck(PaymentCheck paymentCheck){
        paymentCheck.setDeleteFlag(0);
        return paymentCheckRepo.save(paymentCheck);
    }

//    public List<Check> findCheckByReceiptVoucher(ReceiptVoucher receiptVoucher) {
//        return paymentCheckRepo.findCheckByReceiptVoucher(receiptVoucher);
//
//    }
    public List<PaymentCheck> findCheckByPaymentVoucher(PaymentVoucher voucher) {
        return paymentCheckRepo.findPaymentCheckByPaymentVoucher(voucher);

    }

    public List<PaymentCheck> findCheckAccount(ChartAccount coa) {
        return paymentCheckRepo.findByCheck(coa);
    }
}
