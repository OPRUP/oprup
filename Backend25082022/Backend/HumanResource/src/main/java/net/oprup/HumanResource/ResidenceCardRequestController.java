package net.oprup.HumanResource;
import net.oprup.HumanResource.model.ATMCardRequest;
import net.oprup.HumanResource.model.Advance;
import net.oprup.HumanResource.model.ResidenceCardRequest;
import net.oprup.HumanResource.service.ATMCardRequestService;
import net.oprup.HumanResource.service.ResidenceCardRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/ResidenceCardRequest")
@CrossOrigin(origins = "*")
public class ResidenceCardRequestController {

    private final ResidenceCardRequestService residenceCardRequestService;
    public ResidenceCardRequestController(ResidenceCardRequestService residenceCardRequestService)
    {
        this.residenceCardRequestService=residenceCardRequestService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ResidenceCardRequest>> getAllResidenceCardRequest(){
        List<ResidenceCardRequest> residenceCardRequest = residenceCardRequestService.findAllResidenceCardRequest();
        return new ResponseEntity<>(residenceCardRequest, HttpStatus.OK);
    }
    @GetMapping("/ALLApprove")
    public ResponseEntity<List<ResidenceCardRequest>> findApprove() {
        List<ResidenceCardRequest> residenceCardRequest = residenceCardRequestService.findApprove();
        return new ResponseEntity<>(residenceCardRequest, HttpStatus.OK);
    }

    @GetMapping("/ALLRejrct")
    public ResponseEntity<List<ResidenceCardRequest>> findRejrct() {
        List<ResidenceCardRequest> residenceCardRequest = residenceCardRequestService.findRejrct();
        return new ResponseEntity<>(residenceCardRequest, HttpStatus.OK);
    }

    @GetMapping("/find/{residenceCardRequestId}")
    public ResponseEntity<ResidenceCardRequest> getResidenceCardRequestById(@PathVariable("residenceCardRequestId") Long residenceCardRequestId){
        ResidenceCardRequest residenceCardRequest = residenceCardRequestService.findResidenceCardRequestById(residenceCardRequestId);
        return new ResponseEntity<>(residenceCardRequest, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<ResidenceCardRequest> addResidenceCardRequest(@RequestBody ResidenceCardRequest residenceCardRequest){
        ResidenceCardRequest newResidenceCardRequest = residenceCardRequestService.addResidenceCardRequest(residenceCardRequest);
        return new ResponseEntity<>(newResidenceCardRequest, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ResidenceCardRequest> updateResidenceCardRequest(@RequestBody ResidenceCardRequest residenceCardRequest){
        ResidenceCardRequest updateResidenceCardRequest= residenceCardRequestService.updateResidenceCardRequest(residenceCardRequest);
        return new ResponseEntity<>(updateResidenceCardRequest, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{residenceCardRequestId}")
    public ResponseEntity<?> deleteResidenceCardRequest(@PathVariable("residenceCardRequestId") Long residenceCardRequestId){
        residenceCardRequestService.deleteByResidenceCardRequestId(residenceCardRequestId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


//    @PutMapping("/approve")
//    public ResponseEntity<ResidenceCardRequest> approveResidenceCardRequest(@RequestBody ResidenceCardRequest residenceCardRequest){
//        ResidenceCardRequest approve= residenceCardRequestService.approveResidenceCardRequest(residenceCardRequest);
//        return new ResponseEntity<>(approve, HttpStatus.OK);
//    }

    @GetMapping("/approve/{residenceCardRequestId}")
    public ResponseEntity<ResidenceCardRequest> getById(@PathVariable("residenceCardRequestId") Long residenceCardRequestId){
        ResidenceCardRequest record = residenceCardRequestService.findResidenceCardRequestById(residenceCardRequestId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PutMapping("/approveResidenceCardRequest")
    public ResponseEntity<ResidenceCardRequest> approve(@RequestBody ResidenceCardRequest record){
        ResidenceCardRequest approveRecord = residenceCardRequestService.approveResidenceCardRequest(record);
        return new ResponseEntity<>(approveRecord, HttpStatus.OK);
    }
    @PutMapping("/reject")
    public ResponseEntity<ResidenceCardRequest> rejectResidenceCardRequest(@RequestBody ResidenceCardRequest residenceCardRequest){
        ResidenceCardRequest reject = residenceCardRequestService.rejectATMCardRequest(residenceCardRequest);
        return new ResponseEntity<>(reject, HttpStatus.OK);
    }
}
