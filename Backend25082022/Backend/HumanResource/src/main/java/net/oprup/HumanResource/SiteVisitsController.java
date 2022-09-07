package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.SiteVisits;
import net.oprup.HumanResource.service.ProjectService;
import net.oprup.HumanResource.service.SiteVisitsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/siteVisits")
@CrossOrigin(origins = "*")
public class SiteVisitsController {

    private final SiteVisitsService siteVisitsService;

    public SiteVisitsController(SiteVisitsService siteVisitsService) {
        this.siteVisitsService = siteVisitsService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<SiteVisits>> getAllVisits(){
        List<SiteVisits> siteVisits = siteVisitsService.findAllSiteVisits();
        return new ResponseEntity<>(siteVisits, HttpStatus.OK);
    }
    @GetMapping("/find/{visitId}")
    public ResponseEntity<SiteVisits> getSiteVisitsById(@PathVariable("visitId") Long visitId){
        SiteVisits siteVisits = siteVisitsService.findSiteVisitsById(visitId);
        return new ResponseEntity<>(siteVisits, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SiteVisits> addSiteVisits(@RequestBody SiteVisits siteVisits){
        SiteVisits newSiteVisit = siteVisitsService.addSiteVisits(siteVisits);
        return new ResponseEntity<>(newSiteVisit, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<SiteVisits> updateSiteVisits(@RequestBody SiteVisits siteVisits){
        SiteVisits updateSiteVisits = siteVisitsService.updateSiteVisits(siteVisits);
        return new ResponseEntity<>(updateSiteVisits, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<SiteVisits> deleteProject(@RequestBody SiteVisits siteVisits){
        SiteVisits deleteSiteVisits = siteVisitsService.deleteSiteVisits(siteVisits);
        return new ResponseEntity<>(deleteSiteVisits, HttpStatus.OK);
    }

    @GetMapping("/count")
    public  long count(){
        long records = siteVisitsService.countId();
        return (records);
    }


}
