package net.oprup.HumanResource;


import net.oprup.HumanResource.model.SkipRequest;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.service.SkipRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/skipRequest")
@CrossOrigin(origins = "*")
public class SkipRequestController {

    private final SkipRequestService service;


    public SkipRequestController(SkipRequestService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<SkipRequest>> getAll(){
        List<SkipRequest> records = service.findAllSkipRequest();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{skipRequestId}")
    public ResponseEntity<SkipRequest> getById(@PathVariable("skipRequestId") Long skipRequestId){
        SkipRequest record = service.findSkipRequestById(skipRequestId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SkipRequest> addSkipRequest(@RequestBody SkipRequest record){
        SkipRequest newRecord = service.addSkipRequest(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<SkipRequest> update(@RequestBody SkipRequest record){
        SkipRequest updateRecord = service.updateSkipRequest(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<SkipRequest> delete(@RequestBody SkipRequest record){
        SkipRequest deleteRecord = service.deleteSkipRequest(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}

