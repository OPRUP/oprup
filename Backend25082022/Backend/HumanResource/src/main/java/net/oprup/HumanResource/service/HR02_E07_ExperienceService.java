package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E07_Experience;
import net.oprup.HumanResource.repo.HR02_E07_ExperienceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E07_ExperienceService {
    private final HR02_E07_ExperienceRepo repo;
    @Autowired
    public HR02_E07_ExperienceService(HR02_E07_ExperienceRepo repo) {
        this.repo = repo;
    }
    public List<HR02_E07_Experience> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E07_Experience findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }

    public List<HR02_E07_Experience> getExperiencesOfEmployee(HR02_E01_Employee employee) {
        return repo.findExperiencesByEmployee(employee);

    }
    public HR02_E07_Experience add(HR02_E07_Experience record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E07_Experience update(HR02_E07_Experience record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E07_Experience delete(HR02_E07_Experience record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }

    public void deleteExperience(Long experienceId){
        this.repo.deleteById(experienceId);
    }
}


