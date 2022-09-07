package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR06_JobTitle;
import net.oprup.HumanResource.model.Job;
import net.oprup.HumanResource.repo.HR06_JobTitleRepo;
import net.oprup.HumanResource.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class JobService {

    @Autowired
    private final JobRepo jobRepo;

    public JobService(JobRepo jobRepo) {
        this.jobRepo = jobRepo;
    }

    public Job addJob(Job job){
        job.setDeleteFlag(1);
        return jobRepo.save(job);
    }

    public List<Job> findAllJobs(){
        return  jobRepo.findJobByDeleteFlag();
    }

    public Job updateJob(Job job){
        job.setDeleteFlag(1);
        return jobRepo.save(job);
    }

    public Job findJobTitleByJobId(Long jobId){
        return jobRepo.findJobByJobId(jobId)
                .orElseThrow(() -> new UserNotFoundException("Job by id: " + jobId + " not found"));
    }

    public Job deleteJob(Job job){
        job.setDeleteFlag(0);
        return jobRepo.save(job);
    }
}
