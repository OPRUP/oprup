package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.AdvanceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AdvanceService {

    @Autowired
    private final AdvanceRepo advanceRepo;

    public AdvanceService(AdvanceRepo advanceRepo) {
        this.advanceRepo = advanceRepo;
    }

    public Advance findAdvanceByAdvanceId(Long advanceId){
        return advanceRepo.findById(advanceId)
                .orElseThrow(() -> new UserNotFoundException("Advance by id: " + advanceId + " not found"));
    }

    public List<Advance> findAllAdvances(){
        return  advanceRepo.findAdvancesByApprove();
    }
    public List<Advance> findApprove(){
        return  advanceRepo.findApprove();
    }
    public List<Advance> findRejrct(){
        return  advanceRepo.findRejrct();
    }

    public Advance addAdvance(Advance advance){
        advance.setApprove(1);
        return advanceRepo.save(advance);
    }

    public Advance approveAdvance(Advance advance){
        advance.setApprove(2);
        return advanceRepo.save(advance);
    }

    public Advance rejectAdvance(Advance advance){
        advance.setApprove(3);
        return advanceRepo.save(advance);
    }

    public Advance findById(Long advanceId){
        return advanceRepo.findById(advanceId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + advanceId + " not found"));
    }
    public List<Advance> getAdvanceOfEmployee(HR02_E01_Employee employee) {
        return advanceRepo.findAdvanceByEmployee(employee);

    }


    public List<Advance> getAdvanceEmployeeApprove(HR02_E01_Employee employee) {
        return advanceRepo.findAdvancesByEmployeeApprove(employee);

    }
}
