package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.ATMCardRequest;
import net.oprup.HumanResource.model.Customer;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.Quotation;
import net.oprup.HumanResource.repo.QuotationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class QuotationService {
    private final QuotationRepo quotationRepo;
    @Autowired
    public QuotationService(QuotationRepo quotationRepo) {
        this.quotationRepo = quotationRepo;
    }

    public Quotation addQuotation(Quotation quotation){
//        quotation.setApprove(1);
        quotation.setDeleteFlag(1);
        return quotationRepo.save(quotation);
    }

//    public List<Quotation> findAllQuotation()
//    {
//        return quotationRepo.findQuotationByApprove();
//    }

    public List<Quotation> findAllQuotation(){
        return  quotationRepo.deleteQuotationByDeleteFlag();
    }

    public Quotation updateQuotation(Quotation quotation){
        quotation.setDeleteFlag(1);
        return quotationRepo.save(quotation);
    }

    public void deleteByQuotationId(Long quotationId){

        quotationRepo.deleteByquotationId(quotationId);
    }

    public Quotation deleteQuotation(Quotation quotation){
        quotation.setDeleteFlag(0);
        return quotationRepo.save(quotation);
    }


    public Quotation findQuotationById(Long quotationId) {
        return quotationRepo.findByQuotationId(quotationId)
                .orElseThrow(() -> new UserNotFoundException("InsuranceCompany by id: " + quotationId + " not found"));
    }

//    public Quotation approveQuotation(Quotation quotation){
//        quotation.setApprove(2);
//        return quotationRepo.save(quotation);
//    }
//    public Quotation rejectQuotation(Quotation quotation){
//        quotation.setApprove(3);
//        return quotationRepo.save(quotation);
//    }


    public Long getAllCountOfQuotation(){
        return  quotationRepo.getCountOfQuotation();
    }
}




