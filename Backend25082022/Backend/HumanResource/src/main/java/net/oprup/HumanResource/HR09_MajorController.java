package net.oprup.HumanResource;

import java.util.List;

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

import net.oprup.HumanResource.model.HR09_Major;
import net.oprup.HumanResource.service.HR09_MajorService;



@RestController
@RequestMapping("/major")
@CrossOrigin(origins = "*")
public class HR09_MajorController {
	
	private final HR09_MajorService majorService;
	
	public HR09_MajorController(HR09_MajorService majorService) {
		this.majorService = majorService;
	}

    @GetMapping("/all")
    public ResponseEntity<List<HR09_Major>> getAllMajors(){
        List<HR09_Major> majors = majorService.findAllMajors();
        return new ResponseEntity<>(majors, HttpStatus.OK);
    }
    
    @GetMapping("/find/{majorId}")
    public ResponseEntity<HR09_Major> getMajorById(@PathVariable("majorId") Long majorId){
        HR09_Major major = majorService.findMajorById(majorId);
        return new ResponseEntity<>(major, HttpStatus.OK);
    }
    
    @PostMapping("/add")
    public ResponseEntity<HR09_Major> addMajor(@RequestBody HR09_Major major){
    	HR09_Major newMajor = majorService.addMajor(major);
        return new ResponseEntity<>(newMajor, HttpStatus.CREATED);
    }
    
    @PutMapping("/update")
    public ResponseEntity<HR09_Major> updateMajor(@RequestBody HR09_Major major){
        HR09_Major updateMajor = majorService.updateMajor(major);
        return new ResponseEntity<>(updateMajor, HttpStatus.OK);
    }
    
    @PutMapping("/delete")
    public ResponseEntity<HR09_Major> deleteMajor(@RequestBody HR09_Major major){
        HR09_Major deleteMajor = majorService.deleteMajor(major);
        return new ResponseEntity<>(deleteMajor, HttpStatus.OK);
    }
    
    
}