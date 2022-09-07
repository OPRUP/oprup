package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.Item;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.ReceiptVoucher;
import net.oprup.HumanResource.repo.ReceiptVoucherRepo;
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
public class ReceiptVoucherService {

    private final ReceiptVoucherRepo receiptVoucherRepo;

    @Autowired
    public ReceiptVoucherService(ReceiptVoucherRepo receiptVoucherRepo) {
        this.receiptVoucherRepo = receiptVoucherRepo;
    }


    public ReceiptVoucher addReceiptVoucher(ReceiptVoucher receiptVoucher){
        receiptVoucher.setDeleteFlag(1);
        return receiptVoucherRepo.save(receiptVoucher);
    }
    public List<ReceiptVoucher> findAllReceiptVoucher(){
        return  receiptVoucherRepo.findReceiptVoucherByDeleteFlag();
    }

    public ReceiptVoucher updateReceiptVoucher(ReceiptVoucher receiptVoucher){
        receiptVoucher.setDeleteFlag(1);
        return receiptVoucherRepo.save(receiptVoucher);
    }
    public ReceiptVoucher findReceiptVoucherByReceiptVoucherId(Long receiptVoucherId){
        return (ReceiptVoucher) receiptVoucherRepo.findReceiptVoucherByReceiptVoucherId(receiptVoucherId)
                .orElseThrow(() -> new UserNotFoundException("Project by id: " + receiptVoucherId + " not found"));
    }
    public ReceiptVoucher deleteReceiptVoucher(ReceiptVoucher receiptVoucher){
        receiptVoucher.setDeleteFlag(0);
        return receiptVoucherRepo.save(receiptVoucher);
    }

    public List<ReceiptVoucher> findCashAccount(ChartAccount coa) {
        return receiptVoucherRepo.findCashAccount(coa);
    }
    public List<ReceiptVoucher> findVendorAccount(ChartAccount coa) {
        return receiptVoucherRepo.findVendorAccount(coa);
    }
    public long countId(){

        return receiptVoucherRepo.countReceiptVoucherByReceiptVoucherId();
    }
}
