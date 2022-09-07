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

import net.oprup.HumanResource.model.HR08_University;
import net.oprup.HumanResource.service.HR08_UniversityService;

@RestController
@RequestMapping("/university")
@CrossOrigin(origins = "*")
public class HR08_UniversityController {
	
	private final HR08_UniversityService universityService;
	
	public HR08_UniversityController(HR08_UniversityService universityService) {
		this.universityService = universityService;
	}

    @GetMapping("/all")
    public ResponseEntity<List<HR08_University>> getAllUniversities(){
        List<HR08_University> universities = universityService.findAllUniversities();
        return new ResponseEntity<>(universities, HttpStatus.OK);
    }
    
    @GetMapping("/find/{universityId}")
    public ResponseEntity<HR08_University> getUniversityById(@PathVariable("universityId") Long universityId){
        HR08_University university = universityService.findUniversityById(universityId);
        return new ResponseEntity<>(university, HttpStatus.OK);
    }
    
    @PostMapping("/add")
    public ResponseEntity<HR08_University> addUniversity(@RequestBody HR08_University university){
    	HR08_University newUniversity = universityService.addUniversity(university);
        return new ResponseEntity<>(newUniversity, HttpStatus.CREATED);
    }
    
    @PutMapping("/update")
    public ResponseEntity<HR08_University> updateUniversity(@RequestBody HR08_University university){
        HR08_University updateUniversity = universityService.updateUniversity(university);
        return new ResponseEntity<>(updateUniversity, HttpStatus.OK);
    }
    
    @PutMapping("/delete")
    public ResponseEntity<HR08_University> deleteUniversity(@RequestBody HR08_University university){
        HR08_University deleteUniversity = universityService.deleteUniversity(university);
        return new ResponseEntity<>(deleteUniversity, HttpStatus.OK);
    }
    
    
}