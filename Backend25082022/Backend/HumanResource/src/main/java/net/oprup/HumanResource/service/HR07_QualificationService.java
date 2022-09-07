package net.oprup.HumanResource.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR07_Qualification;
import net.oprup.HumanResource.repo.HR07_QualificationRepo;


@Service
@Transactional
public class HR07_QualificationService {

	private final HR07_QualificationRepo qualificationRepo;

	@Autowired
	public HR07_QualificationService(HR07_QualificationRepo qualificationRepo) {
		this.qualificationRepo = qualificationRepo;
	}
	
	public HR07_Qualification addQualification(HR07_Qualification qualification){
		qualification.setDeleteFlag(1);
        return qualificationRepo.save(qualification);
	}
    
    public List<HR07_Qualification> findAllQualifications(){
    	return qualificationRepo.findQualificationsByDeleteFlag();
    }
    
    public HR07_Qualification updateQualification(HR07_Qualification qualification){
		qualification.setDeleteFlag(1);
        return qualificationRepo.save(qualification);
    }
    
    public HR07_Qualification findQualificationById(Long qualificationId){
        return qualificationRepo.findQualificationByQualificationId(qualificationId)
                .orElseThrow(() -> new UserNotFoundException("Qualification by id: " + qualificationId + " not found"));
    }
    

    
    public HR07_Qualification deleteQualification(HR07_Qualification qualification){
    	qualification.setDeleteFlag(0);
        return qualificationRepo.save(qualification);
    }

}