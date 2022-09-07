package net.oprup.HumanResource;
import net.oprup.HumanResource.model.FinalExit;
import net.oprup.HumanResource.model.Vacation;
import net.oprup.HumanResource.service.FinalExitService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/finalExit")
@CrossOrigin(origins = "*")

public class FinalExitController {

    private final FinalExitService finalExitService;

    public FinalExitController(FinalExitService finalExitService) {

        this.finalExitService = finalExitService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<FinalExit>> getAllFinalExit(){
        List<FinalExit> finalExit = finalExitService.findAllFinalExit();
        return new ResponseEntity<>(finalExit, HttpStatus.OK);
    }


    @GetMapping("/find/{finalExitId}")
    public ResponseEntity<FinalExit> getFinalExitById(@PathVariable("finalExitId") Long finalExitId){
        FinalExit finalExit = finalExitService.findFinalExitById(finalExitId);
        return new ResponseEntity<>(finalExit, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<FinalExit> addFinalExit(@RequestBody FinalExit finalExit){
        FinalExit newFinalExit = finalExitService.addFinalExit(finalExit);
        return new ResponseEntity<>(newFinalExit, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<FinalExit> updateFinalExit(@RequestBody FinalExit finalExit){
        FinalExit updateFinalExit = finalExitService.updateFinalExit(finalExit);
        return new ResponseEntity<>(updateFinalExit, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{finalExitId}")
    public ResponseEntity<?> deleteFinalExit(@PathVariable("finalExitId") Long finalExitId){
        finalExitService.deleteByFinalExitId(finalExitId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/approve")
    public ResponseEntity<FinalExit> approveFinalExit(@RequestBody FinalExit finalExit){
        FinalExit approveFinalExit= finalExitService.approveFinalExit(finalExit);
        return new ResponseEntity<>(approveFinalExit, HttpStatus.OK);
    }


    @GetMapping("/approve/{finalExitId}")
    public ResponseEntity<FinalExit> getById(@PathVariable("finalExitId") Long finalExitId){
        FinalExit record = finalExitService.findFinalExitById(finalExitId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PutMapping("/approveFinalExit")
    public ResponseEntity<FinalExit> approve(@RequestBody FinalExit record){
        FinalExit approveRecord = finalExitService.approveFinalExit(record);
        return new ResponseEntity<>(approveRecord, HttpStatus.OK);
    }
    @PutMapping("/reject")
    public ResponseEntity<FinalExit> rejectFinalExit(@RequestBody FinalExit finalExit){
        FinalExit rejectFinalExit = finalExitService.rejectFinalExit(finalExit);
        return new ResponseEntity<>(rejectFinalExit, HttpStatus.OK);
    }

    @GetMapping("/Finalapprove")
    public ResponseEntity<List<FinalExit>> findFinalByApprove(){
        List<FinalExit> finalExit = finalExitService.findFinalByApprove();
        return new ResponseEntity<>(finalExit, HttpStatus.OK);
    }

    @GetMapping("/Finalreject")
    public ResponseEntity<List<FinalExit>> findFinalExitReject(){
        List<FinalExit> finalExit = finalExitService.findFinalExitReject();
        return new ResponseEntity<>(finalExit, HttpStatus.OK);
    }


//    @GetMapping("/findAllFinalExit")
//    public ResponseEntity<List<FinalExit>> getAllFinalExit(){
//        List<FinalExit> finalExit = finalExitService.findAllFinalExit();
//        return new ResponseEntity<>(finalExit, HttpStatus.OK);
//    }
//    @GetMapping("/findAllFinalExitByReject")
//    public ResponseEntity<List<FinalExit>> getAllFinalExitByReject(){
//        List<FinalExit> finalExit = finalExitService.findAllFinalExit();
//        return new ResponseEntity<>(finalExit, HttpStatus.OK);
//    }
}
