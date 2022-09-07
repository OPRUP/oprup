package net.oprup.HumanResource.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR08_University;
import net.oprup.HumanResource.repo.HR08_UniversityRepo;


@Service
@Transactional
public class HR08_UniversityService {

	private final HR08_UniversityRepo universityRepo;

	@Autowired
	public HR08_UniversityService(HR08_UniversityRepo universityRepo) {
		this.universityRepo = universityRepo;
	}
	
	public HR08_University addUniversity(HR08_University university){
		university.setDeleteFlag(1);
        return universityRepo.save(university);
	}
    
    public List<HR08_University> findAllUniversities(){
    	return universityRepo.findUniversitiesByDeleteFlag();
    }
    
    public HR08_University updateUniversity(HR08_University university){
		university.setDeleteFlag(1);
        return universityRepo.save(university);
    }
    
    public HR08_University findUniversityById(Long universityId){
        return universityRepo.findUniversityByUniversityId(universityId)
                .orElseThrow(() -> new UserNotFoundException("University by id: " + universityId + " not found"));
    }

    public HR08_University deleteUniversity(HR08_University university){
    	university.setDeleteFlag(0);
        return universityRepo.save(university);
    }

}