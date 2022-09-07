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

import net.oprup.HumanResource.model.HR11_InsuranceCompany;
import net.oprup.HumanResource.service.HR11_InsuranceCompanyService;



@RestController
@RequestMapping("/insuranceCompany")
@CrossOrigin(origins = "*")
public class HR11_InsuranceCompanyController {
	
	private final HR11_InsuranceCompanyService insuranceCompanyService;
	
	public HR11_InsuranceCompanyController(HR11_InsuranceCompanyService insuranceCompanyService) {
		this.insuranceCompanyService = insuranceCompanyService;
	}

    @GetMapping("/all")
    public ResponseEntity<List<HR11_InsuranceCompany>> getAllInsuranceCompanies(){
        List<HR11_InsuranceCompany> insuranceCompanies = insuranceCompanyService.findAllInsuranceCompanies();
        return new ResponseEntity<>(insuranceCompanies, HttpStatus.OK);
    }
    
    @GetMapping("/find/{insuranceCompanyId}")
    public ResponseEntity<HR11_InsuranceCompany> getInsuranceCompanyById(@PathVariable("insuranceCompanyId") Long insuranceCompanyId){
        HR11_InsuranceCompany insuranceCompany = insuranceCompanyService.findInsuranceCompanyById(insuranceCompanyId);
        return new ResponseEntity<>(insuranceCompany, HttpStatus.OK);
    }
    
    @PostMapping("/add")
    public ResponseEntity<HR11_InsuranceCompany> addInsuranceCompany(@RequestBody HR11_InsuranceCompany insuranceCompany){
    	HR11_InsuranceCompany newInsuranceCompany = insuranceCompanyService.addInsuranceCompany(insuranceCompany);
        return new ResponseEntity<>(newInsuranceCompany, HttpStatus.CREATED);
    }
    
    @PutMapping("/update")
    public ResponseEntity<HR11_InsuranceCompany> updateInsuranceCompany(@RequestBody HR11_InsuranceCompany insuranceCompany){
        HR11_InsuranceCompany updateInsuranceCompany = insuranceCompanyService.updateInsuranceCompany(insuranceCompany);
        return new ResponseEntity<>(updateInsuranceCompany, HttpStatus.OK);
    }
    
    @PutMapping("/delete")
    public ResponseEntity<HR11_InsuranceCompany> deleteInsuranceCompany(@RequestBody HR11_InsuranceCompany insuranceCompany){
        HR11_InsuranceCompany deleteInsuranceCompany = insuranceCompanyService.deleteInsuranceCompany(insuranceCompany);
        return new ResponseEntity<>(deleteInsuranceCompany, HttpStatus.OK);
    }
    
    
}