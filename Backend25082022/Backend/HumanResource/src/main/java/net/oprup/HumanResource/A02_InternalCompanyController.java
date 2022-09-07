package net.oprup.HumanResource;

import net.oprup.HumanResource.model.A02_InternalCompany;
import net.oprup.HumanResource.service.A02_InternalCompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/company")
@CrossOrigin(origins = "*")
public class A02_InternalCompanyController {
    private final A02_InternalCompanyService internalCompanyService;
    public A02_InternalCompanyController(A02_InternalCompanyService internalCompanyService) {
        this.internalCompanyService = internalCompanyService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<A02_InternalCompany>> getAll(){
        List<A02_InternalCompany> centralJobs = internalCompanyService.findAll();
        return new ResponseEntity<>(centralJobs, HttpStatus.OK);
    }
    @GetMapping("/find/{companyId}")
    public ResponseEntity<A02_InternalCompany> getById(@PathVariable("companyId") Long companyId){
        A02_InternalCompany internalCompany = internalCompanyService.findById(companyId);
        return new ResponseEntity<>(internalCompany, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<A02_InternalCompany> add(@RequestBody A02_InternalCompany internalCompany){
        A02_InternalCompany newInternalCompany = internalCompanyService.add(internalCompany);
        return new ResponseEntity<>(newInternalCompany, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<A02_InternalCompany> update(@RequestBody A02_InternalCompany internalCompany){
        A02_InternalCompany updateInternalCompany = internalCompanyService.update(internalCompany);
        return new ResponseEntity<>(updateInternalCompany, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<A02_InternalCompany> delete(@RequestBody A02_InternalCompany internalCompany){
        A02_InternalCompany deleteInternalCompany = internalCompanyService.delete(internalCompany);
        return new ResponseEntity<>(deleteInternalCompany, HttpStatus.OK);
    }

}

