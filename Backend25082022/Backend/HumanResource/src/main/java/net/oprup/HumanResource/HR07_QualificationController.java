package net.oprup.HumanResource;

import java.util.List;

import net.oprup.HumanResource.service.HR07_QualificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.oprup.HumanResource.model.HR07_Qualification;

@RestController
@RequestMapping("/qualification")
@CrossOrigin(origins = "*")
public class HR07_QualificationController {
	
	private final HR07_QualificationService qualificationService;
	
	public HR07_QualificationController(HR07_QualificationService qualificationService) {
		this.qualificationService = qualificationService;
	}

    @GetMapping("/all")
    public ResponseEntity<List<HR07_Qualification>> getAllQualifications(){
        List<HR07_Qualification> qualifications = qualificationService.findAllQualifications();
        return new ResponseEntity<>(qualifications, HttpStatus.OK);
    }
    
    @GetMapping("/find/{qualificationId}")
    public ResponseEntity<HR07_Qualification> getQualificationById(@PathVariable("qualificationId") Long qualificationId){
        HR07_Qualification qualification = qualificationService.findQualificationById(qualificationId);
        return new ResponseEntity<>(qualification, HttpStatus.OK);
    }
    
    @PostMapping("/add")
    public ResponseEntity<HR07_Qualification> addQualification(@RequestBody HR07_Qualification qualification){
    	HR07_Qualification newQualification = qualificationService.addQualification(qualification);
        return new ResponseEntity<>(newQualification, HttpStatus.CREATED);
    }
    
    @PutMapping("/update")
    public ResponseEntity<HR07_Qualification> updateQualification(@RequestBody HR07_Qualification qualification){
        HR07_Qualification updateQualification = qualificationService.updateQualification(qualification);
        return new ResponseEntity<>(updateQualification, HttpStatus.OK);
    }
    
    @PutMapping("/delete")
    public ResponseEntity<HR07_Qualification> deleteQualification(@RequestBody HR07_Qualification qualification){
        HR07_Qualification deleteQualification = qualificationService.deleteQualification(qualification);
        return new ResponseEntity<>(deleteQualification, HttpStatus.OK);
    }
    
    
}