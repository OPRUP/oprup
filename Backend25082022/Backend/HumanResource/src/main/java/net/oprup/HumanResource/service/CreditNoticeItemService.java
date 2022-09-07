package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.CreditNoticeItem;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SalesInvoiceItem;
import net.oprup.HumanResource.repo.CreditNoticeItemRepo;
import net.oprup.HumanResource.repo.SalesInvoiceItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CreditNoticeItemService {
    private final CreditNoticeItemRepo creditNoticeItemRepo;

    @Autowired

    public CreditNoticeItemService(CreditNoticeItemRepo creditNoticeItemRepo) {
        this.creditNoticeItemRepo = creditNoticeItemRepo;
    }

    public CreditNoticeItem addCreditNoticeItem(CreditNoticeItem creditNoticeItem){
        creditNoticeItem.setDeleteFlag(1);
        return creditNoticeItemRepo.save(creditNoticeItem);
    }

    public List<CreditNoticeItem> findAllCreditNoticeItems(){

        return  creditNoticeItemRepo.findCreditNoticeItemByDeleteFlag();
    }

    public CreditNoticeItem updateCreditNoticeItem(CreditNoticeItem creditNoticeItem){
        creditNoticeItem.setDeleteFlag(1);
        return creditNoticeItemRepo.save(creditNoticeItem);
    }

    public List<CreditNoticeItem> findCreditNoticeItemsByCreditNotice(CreditNotice creditNotice) {
        return creditNoticeItemRepo.findCreditNoticeItemByCreditNotice(creditNotice);

    }

    public CreditNoticeItem deleteCreditNoticeItem(CreditNoticeItem creditNoticeItem){
        creditNoticeItem.setDeleteFlag(0);
        return creditNoticeItemRepo.save(creditNoticeItem);
    }

}
