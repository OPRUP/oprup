package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.HR02_E11_EmployedInformationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E11_EmployedInformationService {
    private final HR02_E11_EmployedInformationRepo repo;
    @Autowired
    public HR02_E11_EmployedInformationService(HR02_E11_EmployedInformationRepo repo) {
        this.repo = repo;
    }
    public List<HR02_E11_EmployedInformation> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E11_EmployedInformation findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }
//    public HR02_E11_EmployedInformation findEmployeeCode(Long companyId){
//        return repo.findEmployeeCode(companyId)
//                .orElseThrow(() -> new UserNotFoundException("company by id: " + companyId + " not found"));
//    }
    public HR02_E11_EmployedInformation add(HR02_E11_EmployedInformation record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E11_EmployedInformation update(HR02_E11_EmployedInformation record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E11_EmployedInformation delete(HR02_E11_EmployedInformation record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }

    public List<HR02_E11_EmployedInformation> getEmployedOfEmployee(HR02_E01_Employee employee) {
        return repo.findEmployedByEmployee(employee);

    }
    public void deleteEmployed(Long employedId){

        this.repo.deleteById(employedId);
    }


    public List<HR02_E11_EmployedInformation> getEmployeeCodeByCompanyId(A02_InternalCompany company) {
        return repo.findEmployeeCodeByCompany(company);
    }

}


