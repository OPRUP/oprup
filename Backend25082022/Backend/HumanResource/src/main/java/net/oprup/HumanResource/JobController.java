package net.oprup.HumanResource;


import net.oprup.HumanResource.model.Job;
import net.oprup.HumanResource.model.SiteVisits;
import net.oprup.HumanResource.service.JobService;
import net.oprup.HumanResource.service.SiteVisitsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job")
@CrossOrigin(origins = "*")
public class JobController {
    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Job>> getAllJobs(){
        List<Job> job = jobService.findAllJobs();
        return new ResponseEntity<>(job, HttpStatus.OK);
    }
    @GetMapping("/find/{jobId}")
    public ResponseEntity<Job> getJobById(@PathVariable("jobId") Long jobId){
        Job job = jobService.findJobTitleByJobId(jobId);
        return new ResponseEntity<>(job, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Job> addJob(@RequestBody Job job){
        Job newJob = jobService.addJob(job);
        return new ResponseEntity<>(newJob, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Job> updateSiteVisits(@RequestBody Job job){
        Job updateJob = jobService.updateJob(job);
        return new ResponseEntity<>(updateJob, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Job> deleteProject(@RequestBody Job job){
        Job deleteJob = jobService.deleteJob(job);
        return new ResponseEntity<>(deleteJob, HttpStatus.OK);
    }

}
