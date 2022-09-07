package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR05_CentralJob;
import net.oprup.HumanResource.model.HR06_JobTitle;
import net.oprup.HumanResource.service.HR05_CentralJobService;
import net.oprup.HumanResource.service.HR06_JobTitleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobTitle")
@CrossOrigin(origins = "*")
public class HR06_JobTitleController {
    private final HR06_JobTitleService jobTitleService;

    private HR05_CentralJobService centralJobService;

    public HR06_JobTitleController(HR06_JobTitleService jobTitleService) {

        this.jobTitleService = jobTitleService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<HR06_JobTitle>> getAllJobTitles(){
        List<HR06_JobTitle> JobTitles = jobTitleService.findAllJobTitles();
        return new ResponseEntity<>(JobTitles, HttpStatus.OK);
    }

    @GetMapping("/find/{jobId}")
    public ResponseEntity<HR06_JobTitle> getJobTitleById(@PathVariable("jobId") Long jobId){
        HR06_JobTitle jobTitle = jobTitleService.findJobTitleByJobId(jobId);
        return new ResponseEntity<>(jobTitle, HttpStatus.OK);
    }

    @GetMapping("/centralJob")
    public ResponseEntity<List<HR05_CentralJob>> listCentralJobs(){
        List<HR05_CentralJob> centralJobs = centralJobService.findAllCentralJobs();
        return new ResponseEntity<>(centralJobs, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR06_JobTitle> addJobTitle(@RequestBody HR06_JobTitle jobTitle){

        HR06_JobTitle newJobTitle = jobTitleService.addJobTitle(jobTitle);
        return new ResponseEntity<>(newJobTitle, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR06_JobTitle> updateJobTitle(@RequestBody HR06_JobTitle jobTitle){
        HR06_JobTitle updateJobTitle = jobTitleService.updateJobTitle(jobTitle);
        return new ResponseEntity<>(updateJobTitle, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<HR06_JobTitle> deleteJobTitle(@RequestBody HR06_JobTitle jobTitle){
        HR06_JobTitle deleteJobTitle = jobTitleService.deleteJobTitle(jobTitle);
        return new ResponseEntity<>(deleteJobTitle, HttpStatus.OK);
    }

}
