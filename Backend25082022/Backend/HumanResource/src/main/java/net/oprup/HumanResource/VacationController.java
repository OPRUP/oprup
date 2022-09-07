package net.oprup.HumanResource;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.VacationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vacation")
@CrossOrigin(origins = "*")
public class VacationController {
    //now we need to use the service in this class
    private final VacationService vacationService;

    //we need to inject these service into the constructor, so we can auto wire the service inside the class
    public VacationController(VacationService vacationService) {
        this.vacationService = vacationService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Vacation>> getAllVacation(){
        List<Vacation> vacations = vacationService.findAllVacations();
        return new ResponseEntity<>(vacations, HttpStatus.OK);
    }
    @GetMapping("/ALLApprove")
    public ResponseEntity<List<Vacation>> findApprove() {
        List<Vacation> vacations = vacationService.findApprove();
        return new ResponseEntity<>(vacations, HttpStatus.OK);
    }

    @GetMapping("/ALLRejrct")
    public ResponseEntity<List<Vacation>> findRejrct() {
        List<Vacation> vacations = vacationService.findRejrct();
        return new ResponseEntity<>(vacations, HttpStatus.OK);
    }

    @GetMapping("/find/{vacationId}")
    public ResponseEntity<Vacation> getVacationById(@PathVariable("vacationId") Long vacationId){
        Vacation vacation = vacationService.findVacationByVacationId(vacationId);
        return new ResponseEntity<>(vacation, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Vacation> addVacation(@RequestBody Vacation vacation){
        Vacation newVacation = vacationService.addVacation(vacation);
        return new ResponseEntity<>(newVacation, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Vacation> updateVacation(@RequestBody Vacation vacation){
        Vacation updateVacation = vacationService.updateVacation(vacation);
        return new ResponseEntity<>(updateVacation, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{vacationId}")
    public ResponseEntity<?> deleteVacation(@PathVariable("vacationId") Long vacationId){
        vacationService.deleteVacationByVacationId(vacationId);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @PutMapping("/reject")
    public ResponseEntity<Vacation> rejectVacation(@RequestBody Vacation vacation){
        Vacation rejectVacation = vacationService.rejectVacation(vacation);
        return new ResponseEntity<>(rejectVacation, HttpStatus.OK);
    }


    @PutMapping("/approve")
    public ResponseEntity<Vacation> approveVacation(@RequestBody Vacation vacation){
        Vacation approveVacation = vacationService.approveVacation(vacation);
        return new ResponseEntity<>(approveVacation, HttpStatus.OK);
    }

    @GetMapping("/approve/{vacationId}")
    public ResponseEntity<Vacation> getById(@PathVariable("vacationId") Long vacationId){
        Vacation record = vacationService.findVacationByVacationId(vacationId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PutMapping("/approveVacation")
    public ResponseEntity<Vacation> approve(@RequestBody Vacation record){
        Vacation approveRecord = vacationService.approveVacation(record);
        return new ResponseEntity<>(approveRecord, HttpStatus.OK);
    }



//    @GetMapping("/daysOfVacation/{employeeId}")
//    public ResponseEntity<?> findDaysOfVacation(@PathVariable Long employeeId){
//        HR02_E01_Employee emp =  new HR02_E01_Employee();
//        emp.setEmployeeId(employeeId);
//        List<Vacation> DaysOfVacation = vacationService.findDaysOfVacation(emp);
//        return new ResponseEntity<>(DaysOfVacation, HttpStatus.OK);
//    }
@GetMapping("/daysOfVacation/{employeeId}")
public ResponseEntity<?> findDaysOfVacation(@PathVariable("employeeId") Long employeeId){
    HR02_E01_Employee emp =  new HR02_E01_Employee();
    emp.setEmployeeId(employeeId);
    List<Integer> vacation = vacationService.findDaysOfVacation(emp);
    return new ResponseEntity<>(vacation, HttpStatus.OK);
}
}