package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E12_EmployeeLeave;
import net.oprup.HumanResource.repo.HR02_E12_EmployeeLeaveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E12_EmployeeLeaveService {
    private final HR02_E12_EmployeeLeaveRepo HR02E12EmployeeLeaveRepo;

    @Autowired
    public HR02_E12_EmployeeLeaveService(HR02_E12_EmployeeLeaveRepo HR02E12EmployeeLeaveRepo) {
        this.HR02E12EmployeeLeaveRepo = HR02E12EmployeeLeaveRepo;
    }

    public HR02_E12_EmployeeLeave addLeave(HR02_E12_EmployeeLeave leave){
        return HR02E12EmployeeLeaveRepo.save(leave);
    }

    public List<HR02_E12_EmployeeLeave> findAllLeaves(){
        return HR02E12EmployeeLeaveRepo.findAll();
    }

    public HR02_E12_EmployeeLeave updateLeave(HR02_E12_EmployeeLeave leave){
        return HR02E12EmployeeLeaveRepo.save(leave);
    }

    public HR02_E12_EmployeeLeave findLeaveByLeaveId(Long leaveId){
        return HR02E12EmployeeLeaveRepo.findLeaveByLeaveId(leaveId)
                .orElseThrow(() -> new UserNotFoundException("Leave With this ID: " + leaveId + "Does Not Exist!"));
    }

    public void deleteLeaveByLeaveId(Long leaveId){
        HR02E12EmployeeLeaveRepo.deleteLeaveByLeaveId(leaveId);
    }
}


