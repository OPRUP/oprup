package net.oprup.HumanResource;
import net.oprup.HumanResource.model.ATMCardRequest;
import net.oprup.HumanResource.service.ATMCardRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/ATMCardRequest")
@CrossOrigin(origins = "*")

public class ATMCardRequestController {


    private final ATMCardRequestService creditCardRequestService;

    public ATMCardRequestController(ATMCardRequestService creditCardRequestService) {
        this.creditCardRequestService = creditCardRequestService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ATMCardRequest>> getAllATMCardRequest(){
        List<ATMCardRequest> creditCardRequest = creditCardRequestService.findAllATMCardRequest();
        return new ResponseEntity<>(creditCardRequest, HttpStatus.OK);
    }


    @GetMapping("/find/{creditCardRequestId}")
    public ResponseEntity<ATMCardRequest> getATMCardRequestById(@PathVariable("creditCardRequestId") Long creditCardRequestId){
        ATMCardRequest creditCardRequest = creditCardRequestService.findATMCardRequestById(creditCardRequestId);
        return new ResponseEntity<>(creditCardRequest, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<ATMCardRequest> addATMCardRequest(@RequestBody ATMCardRequest creditCardRequest){
        ATMCardRequest newCreditCardRequest = creditCardRequestService.addATMCardRequest(creditCardRequest);
        return new ResponseEntity<>(newCreditCardRequest, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ATMCardRequest> updateATMCardRequest(@RequestBody ATMCardRequest creditCardRequest){
        ATMCardRequest updateATMCardRequest = creditCardRequestService.updateATMCardRequest(creditCardRequest);
        return new ResponseEntity<>(updateATMCardRequest, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{creditCardRequestId}")
    public ResponseEntity<?> deleteATMCardRequest(@PathVariable("creditCardRequestId") Long creditCardRequestId){
        creditCardRequestService.deleteByATMCardRequestId(creditCardRequestId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/approve")
    public ResponseEntity<ATMCardRequest> approveATMCardRequest(@RequestBody ATMCardRequest creditCardRequest){
        ATMCardRequest approveATMCardRequest= creditCardRequestService.approveATMCardRequest(creditCardRequest);
        return new ResponseEntity<>(approveATMCardRequest, HttpStatus.OK);
    }

    @GetMapping("/approve/{creditCardRequestId}")
    public ResponseEntity<ATMCardRequest> getById(@PathVariable("creditCardRequestId") Long creditCardRequestId){
        ATMCardRequest record = creditCardRequestService.findATMCardRequestById(creditCardRequestId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PutMapping("/approveReissuingATMRequest")
    public ResponseEntity<ATMCardRequest> approve(@RequestBody ATMCardRequest record){
        ATMCardRequest approveRecord = creditCardRequestService.approveATMCardRequest(record);
        return new ResponseEntity<>(approveRecord, HttpStatus.OK);
    }
    @PutMapping("/reject")
    public ResponseEntity<ATMCardRequest> rejectATMCardRequest(@RequestBody ATMCardRequest creditCardRequest){
        ATMCardRequest rejectReissuingATMRequest = creditCardRequestService.rejectATMCardRequest(creditCardRequest);
        return new ResponseEntity<>(rejectReissuingATMRequest, HttpStatus.OK);
    }
}