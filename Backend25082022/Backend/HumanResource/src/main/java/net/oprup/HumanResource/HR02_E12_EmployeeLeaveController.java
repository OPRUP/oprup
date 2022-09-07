package net.oprup.HumanResource;


import net.oprup.HumanResource.model.HR02_E12_EmployeeLeave;
import net.oprup.HumanResource.service.HR02_E12_EmployeeLeaveService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leave")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@CrossOrigin(origins = "*")
public class HR02_E12_EmployeeLeaveController {
    //now we need to use the service in this class
    private final HR02_E12_EmployeeLeaveService HR02E12EmployeeLeaveService;

    //we need to inject these service into the constructor, so we can auto wire the service inside the class
    public HR02_E12_EmployeeLeaveController(HR02_E12_EmployeeLeaveService HR02E12EmployeeLeaveService) {
        this.HR02E12EmployeeLeaveService = HR02E12EmployeeLeaveService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<HR02_E12_EmployeeLeave>> getAllLeave(){
        List<HR02_E12_EmployeeLeave> leaves = HR02E12EmployeeLeaveService.findAllLeaves();
        return new ResponseEntity<>(leaves, HttpStatus.OK);
    }

    @GetMapping("/find/{leaveId}")
    public ResponseEntity<HR02_E12_EmployeeLeave> getLeaveById(@PathVariable("leaveId") Long leaveId){
        HR02_E12_EmployeeLeave leave = HR02E12EmployeeLeaveService.findLeaveByLeaveId(leaveId);
        return new ResponseEntity<>(leave, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR02_E12_EmployeeLeave> addLeave(@RequestBody HR02_E12_EmployeeLeave leave){
        HR02_E12_EmployeeLeave newLeave = HR02E12EmployeeLeaveService.addLeave(leave);
        return new ResponseEntity<>(newLeave, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR02_E12_EmployeeLeave> updateLeave(@RequestBody HR02_E12_EmployeeLeave leave){
        HR02_E12_EmployeeLeave updateLeave = HR02E12EmployeeLeaveService.updateLeave(leave);
        return new ResponseEntity<>(updateLeave, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{leaveId}")
    public ResponseEntity<?> deleteLeave(@PathVariable("leaveId") Long leaveId){
        HR02E12EmployeeLeaveService.deleteLeaveByLeaveId(leaveId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
