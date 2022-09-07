package net.oprup.HumanResource;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.AdvanceService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/advance")
@CrossOrigin(origins = "*")
public class AdvanceController {

    private final AdvanceService advanceService;

    public AdvanceController(AdvanceService advanceService) {
        this.advanceService = advanceService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Advance>> getAllAdvances() {
        List<Advance> advances = advanceService.findAllAdvances();
        return new ResponseEntity<>(advances, HttpStatus.OK);
    }

    @GetMapping("/ALLApprove")
    public ResponseEntity<List<Advance>> findApprove() {
        List<Advance> advances = advanceService.findApprove();
        return new ResponseEntity<>(advances, HttpStatus.OK);
    }

    @GetMapping("/ALLRejrct")
    public ResponseEntity<List<Advance>> findRejrct() {
        List<Advance> advances = advanceService.findRejrct();
        return new ResponseEntity<>(advances, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Advance> addAdvance(@RequestBody Advance advance) {
        Advance addAdvance = advanceService.addAdvance(advance);
        return new ResponseEntity<>(addAdvance, HttpStatus.CREATED);
    }

    @PutMapping("/approve")
    public ResponseEntity<Advance> approveAdvance(@RequestBody Advance advance) {
        Advance approveAdvance = advanceService.approveAdvance(advance);
        return new ResponseEntity<>(approveAdvance, HttpStatus.OK);
    }

    @PutMapping("/reject")
    public ResponseEntity<Advance> rejectAdvance(@RequestBody Advance advance) {
        Advance rejectAdvance = advanceService.rejectAdvance(advance);
        return new ResponseEntity<>(rejectAdvance, HttpStatus.OK);
    }

    @GetMapping("/approve/{advanceId}")
    public ResponseEntity<Advance> getById(@PathVariable("advanceId") Long advanceId) {
        Advance record = advanceService.findById(advanceId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PutMapping("/approveAdvance")
    public ResponseEntity<Advance> approve(@RequestBody Advance record) {
        Advance approveRecord = advanceService.approveAdvance(record);
        return new ResponseEntity<>(approveRecord, HttpStatus.OK);
    }

    @GetMapping("/adv/{employeeId}")
    public ResponseEntity<?> getAdvanceOfEmployee(@PathVariable("employeeId") Long employeeId) {
        HR02_E01_Employee emp = new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<Advance> advance = advanceService.getAdvanceOfEmployee(emp);
        return new ResponseEntity<>(advance, HttpStatus.OK);

    }

    @GetMapping("/advapp/{employeeId}")
    public ResponseEntity<?> getAdvanceEmployeeApprove(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<Advance> Advance = advanceService.getAdvanceEmployeeApprove(emp);
        return new ResponseEntity<>(Advance, HttpStatus.OK);
    }
}