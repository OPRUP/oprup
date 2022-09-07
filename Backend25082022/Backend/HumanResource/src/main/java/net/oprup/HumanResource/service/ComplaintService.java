package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Complaint;
import net.oprup.HumanResource.model.Taskeen;
import net.oprup.HumanResource.repo.ComplaintRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ComplaintService {
    private final ComplaintRepo complaintRepo;
    @Autowired

    public ComplaintService(ComplaintRepo complaintRepo) {
        this.complaintRepo = complaintRepo;
    }
    public Complaint addComplaint(Complaint complaint){
        complaint.setDeleteFlag(1);
        return complaintRepo.save(complaint);
    }
    public List<Complaint> findAllComplaint(){
        return  complaintRepo.findComplaintByDeleteFlag();
    }
    public Complaint updateComplaint(Complaint complaint){
        complaint.setDeleteFlag(1);
        return complaintRepo.save(complaint);
    }
    public Complaint findComplaintById(Long complaintId){
        return (Complaint) complaintRepo.findComplaintByComplaintId(complaintId)
                .orElseThrow(() -> new UserNotFoundException("Complaint by id: " + complaintId + " not found"));
    }
    public Complaint deleteComplaint(Complaint complaint){
        complaint.setDeleteFlag(0);
        return complaintRepo.save(complaint);
    }
}
