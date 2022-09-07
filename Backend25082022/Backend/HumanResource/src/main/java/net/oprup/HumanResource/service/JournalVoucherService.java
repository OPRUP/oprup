package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Customer;
import net.oprup.HumanResource.model.JournalVoucher;
import net.oprup.HumanResource.model.KitchenRoom;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.repo.JournalVoucherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class JournalVoucherService {
    private final JournalVoucherRepo journalVoucherRepo;
@Autowired
    public JournalVoucherService(JournalVoucherRepo journalVoucherRepo) {
        this.journalVoucherRepo = journalVoucherRepo;
    }
    public JournalVoucher addJournalVoucher(JournalVoucher journalVoucher){
        journalVoucher.setDeleteFlag(1);
        return journalVoucherRepo.save(journalVoucher);
    }

    public List<JournalVoucher> findAllJournalVoucher(){
        return  journalVoucherRepo.findAllJournalVoucherByDeleteFlag();
    }

    public JournalVoucher updateJournalVoucher(JournalVoucher journalVoucher){
        journalVoucher.setDeleteFlag(1);
        return journalVoucherRepo.save(journalVoucher);
    }

    public JournalVoucher findJournalVoucherById(Long journalVoucherId){
        return (JournalVoucher)journalVoucherRepo.findJournalVoucherById(journalVoucherId)
                .orElseThrow(() -> new UserNotFoundException("JournalVoucher by id: " + journalVoucherId + " not found"));
    }

    public JournalVoucher deleteJournalVoucher(JournalVoucher journalVoucher){
        journalVoucher.setDeleteFlag(0);
        return journalVoucherRepo.save(journalVoucher);
    }

    public long countId(){

        return journalVoucherRepo.countJournalVoucherByJournalVoucherId();
    }

//    public JournalVoucher addJournalVoucher(JournalVoucher journalVoucher){
//        journalVoucher.setDeleteFlag(1);
//        return journalVoucherRepo.save(journalVoucher);
//    }
//    public List<JournalVoucher> findAllJournalVoucher(){
//        return  journalVoucherRepo.findJournalVoucherByDeleteFlag();
//    }
//    public JournalVoucher updateJournalVoucher(JournalVoucher journalVoucher){
//        journalVoucher.setDeleteFlag(1);
//        return journalVoucherRepo.save(journalVoucher);
//    }
//    public JournalVoucher findJournalVoucherById(Long journalVoucherId){
//        return (JournalVoucher) journalVoucherRepo.findJournalVoucherByJournalVoucherId(journalVoucherId)
//                .orElseThrow(() -> new UserNotFoundException("JournalVoucher by id: " + journalVoucherId + " not found"));
//    }
//    public JournalVoucher deleteJournalVoucher(JournalVoucher journalVoucher){
//        journalVoucher.setDeleteFlag(0);
//        return journalVoucherRepo.save(journalVoucher);
//    }
}
