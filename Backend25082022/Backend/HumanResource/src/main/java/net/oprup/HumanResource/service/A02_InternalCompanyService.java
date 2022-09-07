package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.A02_InternalCompany;
import net.oprup.HumanResource.repo.A02_InternalCompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class A02_InternalCompanyService {
    private final A02_InternalCompanyRepo internalCompanyRepo;
    @Autowired
    public A02_InternalCompanyService(A02_InternalCompanyRepo internalCompanyRepo) {
        this.internalCompanyRepo = internalCompanyRepo;
    }
    public List<A02_InternalCompany> findAll(){
        return  internalCompanyRepo.findInternalCompaniesByDeleteFlag();
    }
    public A02_InternalCompany findById(Long companyId){
        return internalCompanyRepo.findInternalCompanyByCompanyId(companyId)
                .orElseThrow(() -> new UserNotFoundException("company by id: " + companyId + " not found"));
    }
    public A02_InternalCompany add(A02_InternalCompany company){
        company.setDeleteFlag(1);
        return internalCompanyRepo.save(company);
    }
    public A02_InternalCompany update(A02_InternalCompany company){
        company.setDeleteFlag(1);
        return internalCompanyRepo.save(company);
    }
    public A02_InternalCompany delete(A02_InternalCompany company){
        company.setDeleteFlag(0);
        return internalCompanyRepo.save(company);
    }
}
