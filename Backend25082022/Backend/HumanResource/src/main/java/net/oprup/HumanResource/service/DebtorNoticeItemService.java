package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.CreditNoticeItem;
import net.oprup.HumanResource.model.DebtorNotice;
import net.oprup.HumanResource.model.DebtorNoticeItem;
import net.oprup.HumanResource.repo.CreditNoticeItemRepo;
import net.oprup.HumanResource.repo.DebtorNoticeItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DebtorNoticeItemService {
    private final DebtorNoticeItemRepo debtorNoticeItemRepo;

    @Autowired

    public DebtorNoticeItemService(DebtorNoticeItemRepo debtorNoticeItemRepo) {
        this.debtorNoticeItemRepo = debtorNoticeItemRepo;
    }

    public DebtorNoticeItem addDebtorNoticeItem(DebtorNoticeItem debtorNoticeItem){
        debtorNoticeItem.setDeleteFlag(1);
        return debtorNoticeItemRepo.save(debtorNoticeItem);
    }

    public List<DebtorNoticeItem> findAllCDebtorNoticeItems(){

        return  debtorNoticeItemRepo.findDebtorNoticeItemByDeleteFlag();
    }

    public DebtorNoticeItem updateDebtorNoticeItem(DebtorNoticeItem debtorNoticeItem){
        debtorNoticeItem.setDeleteFlag(1);
        return debtorNoticeItemRepo.save(debtorNoticeItem);
    }

    public List<DebtorNoticeItem> findDebtorNoticeItemsByDebtorNotice(DebtorNotice debtorNotice) {
        return debtorNoticeItemRepo.findDebtorNoticeItemByDebtorNotice(debtorNotice);

    }

    public DebtorNoticeItem deleteDebtorNoticeItem(DebtorNoticeItem debtorNoticeItem){
        debtorNoticeItem.setDeleteFlag(0);
        return debtorNoticeItemRepo.save(debtorNoticeItem);
    }

}
