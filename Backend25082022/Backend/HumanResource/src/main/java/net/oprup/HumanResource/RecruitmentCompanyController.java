package net.oprup.HumanResource;
import net.oprup.HumanResource.model.RecruitmentCompany;
import net.oprup.HumanResource.service.RecruitmentCompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recruitmentCompany")
@CrossOrigin(origins = "*")
public class RecruitmentCompanyController {

    private final RecruitmentCompanyService service;

    public RecruitmentCompanyController(RecruitmentCompanyService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<RecruitmentCompany>> getAll(){
        List<RecruitmentCompany> records = service.findAllRecruitmentCompany();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{recruitmentCompanyId}")
    public ResponseEntity<RecruitmentCompany> getById(@PathVariable("recruitmentCompanyId") Long recruitmentCompanyId){
        RecruitmentCompany record = service.findRenewingResidenceById(recruitmentCompanyId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<RecruitmentCompany> addSkipRequest(@RequestBody RecruitmentCompany record){
        RecruitmentCompany newRecord = service.addRecruitmentCompany(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<RecruitmentCompany> update(@RequestBody RecruitmentCompany record){
        RecruitmentCompany updateRecord = service.updateRenewingResidence(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<RecruitmentCompany> delete(@RequestBody RecruitmentCompany record){
        RecruitmentCompany deleteRecord = service.deleteRenewingResidence(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}




