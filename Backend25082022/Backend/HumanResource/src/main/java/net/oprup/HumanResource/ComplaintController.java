package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Complaint;
import net.oprup.HumanResource.service.ComplaintService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/complaint")
@CrossOrigin(origins = "*")
public class ComplaintController {
    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Complaint>> getAllComplaint(){
        List<Complaint> complaints = complaintService.findAllComplaint();
        return new ResponseEntity<>(complaints, HttpStatus.OK);
    }
    @GetMapping("/find/{complaintId}")
    public ResponseEntity<Complaint> getComplaintById(@PathVariable("complaintId") Long complaintId){
        Complaint complaint = complaintService.findComplaintById(complaintId);
        return new ResponseEntity<>(complaint, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Complaint> addComplaint(@RequestBody Complaint complaint){
        Complaint newComplaint = complaintService.addComplaint(complaint);
        return new ResponseEntity<>(newComplaint, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Complaint> updateComplaint(@RequestBody Complaint complaint){
        Complaint updateComplaint = complaintService.updateComplaint(complaint);
        return new ResponseEntity<>(updateComplaint, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Complaint> deleteComplaint(@RequestBody Complaint complaint){
        Complaint deleteComplaint = complaintService.deleteComplaint(complaint);
        return new ResponseEntity<>(deleteComplaint, HttpStatus.OK);
    }

}
