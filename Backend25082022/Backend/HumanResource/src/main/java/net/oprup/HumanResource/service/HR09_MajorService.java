package net.oprup.HumanResource.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR09_Major;
import net.oprup.HumanResource.repo.HR09_MajorRepo;



@Service
@Transactional
public class HR09_MajorService {

	private final HR09_MajorRepo majorRepo;

	@Autowired
	public HR09_MajorService(HR09_MajorRepo majorRepo) {
		this.majorRepo = majorRepo;
	}

	public HR09_Major addMajor(HR09_Major major) {
		major.setDeleteFlag(1);
		return majorRepo.save(major);
	}

	public List<HR09_Major> findAllMajors() {
		return majorRepo.findMajorsByDeleteFlag();
	}

	public HR09_Major updateMajor(HR09_Major major) {
		major.setDeleteFlag(1);
		return majorRepo.save(major);
	}

	public HR09_Major findMajorById(Long majorId) {
		return majorRepo.findMajorByMajorId(majorId)
				.orElseThrow(() -> new UserNotFoundException("Major by id: " + majorId + " not found"));
	}

	public HR09_Major deleteMajor(HR09_Major major) {
		major.setDeleteFlag(0);
		return majorRepo.save(major);
	}
}
    

	

