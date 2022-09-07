package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.DebtorNotice;
import net.oprup.HumanResource.repo.CreditNoticeRepo;
import net.oprup.HumanResource.repo.DebtorNoticeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DebtorNoticeService {
    private final DebtorNoticeRepo debtorNoticeRepo;

    @Autowired
    public DebtorNoticeService(DebtorNoticeRepo debtorNoticeRepo) {
        this.debtorNoticeRepo = debtorNoticeRepo;
    }


    public DebtorNotice addDebtorNotice(DebtorNotice debtorNotice){
        debtorNotice.setDeleteFlag(1);
        return debtorNoticeRepo.save(debtorNotice);
    }

    public List<DebtorNotice> findAllDebtorNotice(){
        return  debtorNoticeRepo.findDebtorNoticeByDeleteFlag();
    }

    public DebtorNotice updateDebtorNotice(DebtorNotice debtorNotice){
        debtorNotice.setDeleteFlag(1);
        return debtorNoticeRepo.save(debtorNotice);
    }

    public DebtorNotice findDebtorNoticeById(Long debtorNoticeId){
        return debtorNoticeRepo.findDebtorNoticeByDebtorNoticeId(debtorNoticeId)
                .orElseThrow(() -> new UserNotFoundException("debtorNotice by id: " + debtorNoticeId + " not found"));
    }

    public DebtorNotice deleteDebtorNotice(DebtorNotice debtorNotice){
        debtorNotice.setDeleteFlag(0);
        return debtorNoticeRepo.save(debtorNotice);
    }
    public long countId(){

        return debtorNoticeRepo.countDebtorNoticeByDebtorNoticeId();
    }
}
