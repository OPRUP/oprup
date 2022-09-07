package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.repo.CreditNoticeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CreditNoticeService {

    private final CreditNoticeRepo creditNoticeRepo;

    @Autowired
    public CreditNoticeService(CreditNoticeRepo creditNotice) {
        this.creditNoticeRepo = creditNotice;
    }


    public CreditNotice addCreditNotice(CreditNotice creditNotice){
        creditNotice.setDeleteFlag(1);
        return creditNoticeRepo.save(creditNotice);
    }

    public List<CreditNotice> findAllCreditNotice(){
        return  creditNoticeRepo.findCreditNoticeByDeleteFlag();
    }

    public CreditNotice updateCreditNotice(CreditNotice creditNotice){
        creditNotice.setDeleteFlag(1);
        return creditNoticeRepo.save(creditNotice);
    }

    public CreditNotice findCreditNoticeById(Long creditNoticeId){
        return creditNoticeRepo.findCreditNoticeByCreditNoticeId(creditNoticeId)
                .orElseThrow(() -> new UserNotFoundException("creditNotice by id: " + creditNoticeId + " not found"));
    }

    public CreditNotice deleteCreditNotice(CreditNotice creditNotice){
        creditNotice.setDeleteFlag(0);
        return creditNoticeRepo.save(creditNotice);
    }
    public long countId(){

        return creditNoticeRepo.countCreditNoticeByCreditNoticeId();
    }

}
