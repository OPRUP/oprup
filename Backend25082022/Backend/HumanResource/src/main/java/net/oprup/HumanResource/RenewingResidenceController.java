package net.oprup.HumanResource;


import net.oprup.HumanResource.model.RenewingResidence;
import net.oprup.HumanResource.model.SkipRequest;
import net.oprup.HumanResource.service.RenewingResidenceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/renewingResidence")
@CrossOrigin(origins = "*")
public class RenewingResidenceController {
    private final RenewingResidenceService service;


    public RenewingResidenceController(RenewingResidenceService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<RenewingResidence>> getAll(){
        List<RenewingResidence> records = service.findAllRenewingResidence();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{renewingResidenceId}")
    public ResponseEntity<RenewingResidence> getById(@PathVariable("renewingResidenceId") Long renewingResidenceId){
        RenewingResidence record = service.findRenewingResidenceById(renewingResidenceId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<RenewingResidence> add(@RequestBody RenewingResidence record){
        RenewingResidence newRecord = service.addRenewingResidence(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<RenewingResidence> update(@RequestBody RenewingResidence record){
        RenewingResidence updateRecord = service.updateRenewingResidence(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<RenewingResidence> delete(@RequestBody RenewingResidence record){
        RenewingResidence deleteRecord = service.deleteRenewingResidence(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}




