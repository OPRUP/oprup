package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.CheckRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class CheckService {

    private final CheckRepo checkRepo;
    @Autowired
    public CheckService(CheckRepo checkRepo) {
        this.checkRepo = checkRepo;
    }

    public Check addCheck(Check check){
        check.setDeleteFlag(1);
        return checkRepo.save(check);
    }
    public List<Check> findAllChecks(){
        return  checkRepo.findCheckByDeleteFlag();
    }

    public Check updateCheck(Check check){
        check.setDeleteFlag(1);
        return checkRepo.save(check);
    }
//    public ReceiptVoucher findReceiptVoucherByReceiptVoucherId(Long receiptVoucherId){
//        return (ReceiptVoucher) checkRepo.fibd(receiptVoucherId)
//                .orElseThrow(() -> new UserNotFoundException("Project by id: " + receiptVoucherId + " not found"));
//    }


    public Check deleteCheck(Check check){
        check.setDeleteFlag(0);
        return checkRepo.save(check);
    }

    public List<Check> findCheckByReceiptVoucher(ReceiptVoucher receiptVoucher) {
        return checkRepo.findCheckByReceiptVoucher(receiptVoucher);

    }

    public List<Check> findCheckAccount(ChartAccount coa) {
        return checkRepo.findByReCheck(coa);
    }

}
