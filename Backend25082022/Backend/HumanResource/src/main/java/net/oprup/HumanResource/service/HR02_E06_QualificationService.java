package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.model.HR02_E06_Qualification;
import net.oprup.HumanResource.repo.HR02_E06_QualificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E06_QualificationService {
    private final HR02_E06_QualificationRepo repo;
    @Autowired
    public HR02_E06_QualificationService(HR02_E06_QualificationRepo repo) {
        this.repo = repo;
    }
    public List<HR02_E06_Qualification> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E06_Qualification findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }
    public List<HR02_E06_Qualification> getQualificationOfEmployee(HR02_E01_Employee employee) {
        return repo.findQualificationByEmployee(employee);

    }
    public HR02_E06_Qualification add(HR02_E06_Qualification record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E06_Qualification update(HR02_E06_Qualification record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E06_Qualification delete(HR02_E06_Qualification record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }
    public void deleteQualification(Long qualificationId){

        this.repo.deleteById(qualificationId);
    }
}


