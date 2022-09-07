package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.JournalVoucherDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class JournalVoucherDetailsService {
    private final JournalVoucherDetailsRepo journalVoucherDetailsRepo;

    @Autowired
    public JournalVoucherDetailsService(JournalVoucherDetailsRepo journalVoucherDetailsRepo) {
        this.journalVoucherDetailsRepo = journalVoucherDetailsRepo;
    }
    public JournalVoucherDetails addJournalVoucherDetails(JournalVoucherDetails journalVoucherDetails){
        journalVoucherDetails.setDeleteFlag(1);
        return journalVoucherDetailsRepo.save(journalVoucherDetails);
    }

    public List<JournalVoucherDetails> findAllJournalVoucherDetails(){

        return  journalVoucherDetailsRepo.deleteJournalVoucherDetailsByDeleteFlag();
    }

    public JournalVoucherDetails updateJournalVoucherDetails(JournalVoucherDetails journalVoucherDetails){
        journalVoucherDetails.setDeleteFlag(1);
        return journalVoucherDetailsRepo.save(journalVoucherDetails);
    }

    public List<JournalVoucherDetails> findJournalVoucherDetailsByJournalVoucher(JournalVoucher journalVoucher) {
        return journalVoucherDetailsRepo.findJournalVoucherDetailsByJournalVoucher(journalVoucher);

    }

    public JournalVoucherDetails deleteJournalVoucherDetails(JournalVoucherDetails journalVoucherDetails){
        journalVoucherDetails.setDeleteFlag(0);
        return journalVoucherDetailsRepo.save(journalVoucherDetails);
    }
    public List<JournalVoucherDetails> findJourAccount(ChartAccount coa) {
        return journalVoucherDetailsRepo.findJourAccount(coa);
    }

//    public JournalVoucherDetails addJournalVoucherDetails(JournalVoucherDetails journalVoucherDetails){
//        journalVoucherDetails.setDeleteFlag(1);
//        return journalVoucherDetailsRepo.save(journalVoucherDetails);
//    }
//
//    public List<JournalVoucherDetails> findAllJournalVoucherDetails(){
//
//        return  journalVoucherDetailsRepo.deleteJournalVoucherDetailsByDeleteFlag();
//    }
//
//    public JournalVoucherDetails updateJournalVoucherDetails(JournalVoucherDetails journalVoucherDetails){
//        journalVoucherDetails.setDeleteFlag(1);
//        return journalVoucherDetailsRepo.save(journalVoucherDetails);
//    }
//
//    public List<JournalVoucherDetails> findJournalVoucherDetailsByJournalVoucher(JournalVoucher journalVoucher) {
//        return journalVoucherDetailsRepo.findJournalVoucherDetailsByJournalVoucher(journalVoucher);
//
//    }
//
//    public JournalVoucherDetails deleteJournalVoucherDetails(JournalVoucherDetails journalVoucherDetails){
//        journalVoucherDetails.setDeleteFlag(0);
//        return journalVoucherDetailsRepo.save(journalVoucherDetails);
//    }


}



