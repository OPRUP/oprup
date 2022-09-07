package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR05_CentralJob;
import net.oprup.HumanResource.service.HR05_CentralJobService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/centralJob")
@CrossOrigin(origins = "*")
public class HR05_CentralJobController {
    private final HR05_CentralJobService centralJobService;
    public HR05_CentralJobController(HR05_CentralJobService centralJobService) {
        this.centralJobService = centralJobService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR05_CentralJob>> getAllCentralJobs(){
        List<HR05_CentralJob> centralJobs = centralJobService.findAllCentralJobs();
        return new ResponseEntity<>(centralJobs, HttpStatus.OK);
    }
    @GetMapping("/find/{centralId}")
    public ResponseEntity<HR05_CentralJob> getCentralJobByCentralId(@PathVariable("centralId") Long centralId){
        HR05_CentralJob centralJob = centralJobService.findCentralJobById(centralId);
        return new ResponseEntity<>(centralJob, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR05_CentralJob> addCentralJob(@RequestBody HR05_CentralJob centralJob){
        HR05_CentralJob newCentralJob = centralJobService.addCentralJob(centralJob);
        return new ResponseEntity<>(newCentralJob, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR05_CentralJob> updateCentralJob(@RequestBody HR05_CentralJob centralJob){
        HR05_CentralJob updateCentralJob = centralJobService.updateCentralJob(centralJob);
        return new ResponseEntity<>(updateCentralJob, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<HR05_CentralJob> deleteCentralJob(@RequestBody HR05_CentralJob centralJob){
        HR05_CentralJob deleteCentralJob = centralJobService.deleteCentralJob(centralJob);
        return new ResponseEntity<>(deleteCentralJob, HttpStatus.OK);
    }

}
