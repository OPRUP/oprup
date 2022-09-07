package net.oprup.HumanResource.service;
import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Quotation;
import net.oprup.HumanResource.model.QuotationItem;
import net.oprup.HumanResource.repo.QuotationItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class QuotationItemService {
    private final QuotationItemRepo quotationItemRepo;
    @Autowired
    public QuotationItemService( QuotationItemRepo quotationItemRepo) {
        this.quotationItemRepo = quotationItemRepo;
    }

    public QuotationItem addQuotationItem(QuotationItem quotationItem){
        quotationItem.setDeleteFlag(1);
        return quotationItemRepo.save(quotationItem);
    }


    public List<QuotationItem> findAllQuotationItem(){

        return  quotationItemRepo.deleteQuotationItemByDeleteFlag();
    }

    public QuotationItem updateQuotationItem(QuotationItem quotationItem){
        quotationItem.setDeleteFlag(1);
        return quotationItemRepo.save(quotationItem);
    }

    public QuotationItem findQuotationItemById(Long quotationItemId){
        return quotationItemRepo.findByQuotationItemId(quotationItemId)
                .orElseThrow(() -> new UserNotFoundException("salesInvoiceItemId by id: " + quotationItemId + " not found"));
    }

    public QuotationItem deleteQuotationItem(QuotationItem quotationItem){
        quotationItem.setDeleteFlag(0);
        return quotationItemRepo.save(quotationItem);
    }
    public List<QuotationItem> getQuotationItemByquotationId(Quotation quotation) {
        return quotationItemRepo.findQuotationItemByQuotation(quotation);
    }


    public void deleteByQuotationItemId(Long quotationItemId){

        quotationItemRepo.deleteByQuotationItemId(quotationItemId);
    }

}


