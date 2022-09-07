package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR06_JobTitle;
import net.oprup.HumanResource.repo.HR06_JobTitleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR06_JobTitleService {
    @Autowired
    private final HR06_JobTitleRepo jobTitleRepo;

    public HR06_JobTitleService(HR06_JobTitleRepo jobTitleRepo) {
        this.jobTitleRepo = jobTitleRepo;
    }

    public HR06_JobTitle addJobTitle(HR06_JobTitle jobTitle){
        jobTitle.setDeleteFlag(1);
       // jobTitle.setCentralJob(jobTitle.getCentralJob());
        jobTitle.setCentralJobs(jobTitle.getCentralJobs());
        return jobTitleRepo.save(jobTitle);
    }

    public List<HR06_JobTitle> findAllJobTitles(){
        return  jobTitleRepo.findJobTitlesByDeleteFlag();
    }

    public HR06_JobTitle updateJobTitle(HR06_JobTitle jobTitle){
        jobTitle.setDeleteFlag(1);
        return jobTitleRepo.save(jobTitle);
    }

    public HR06_JobTitle findJobTitleByJobId(Long jobId){
        return jobTitleRepo.findJobTitleByJobId(jobId)
                .orElseThrow(() -> new UserNotFoundException("CentralJob by id: " + jobId + " not found"));
    }
     
    public HR06_JobTitle deleteJobTitle(HR06_JobTitle jobTitle){
        jobTitle.setDeleteFlag(0);
        return jobTitleRepo.save(jobTitle);
    }

}
