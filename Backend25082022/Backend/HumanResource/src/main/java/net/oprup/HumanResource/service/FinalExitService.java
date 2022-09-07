package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.FinalExitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class FinalExitService {

    private final FinalExitRepo finalExitRepo;

    @Autowired
    public FinalExitService(FinalExitRepo finalExitRepo) {

        this.finalExitRepo = finalExitRepo;
    }

    public FinalExit addFinalExit(FinalExit finalExit) {
        finalExit.setApprove(1);
        return finalExitRepo.save(finalExit);
    }

    public FinalExit updateFinalExit(FinalExit finalExit) {
        finalExit.setDeleteFlag(1);
        return finalExitRepo.save(finalExit);
    }
//    public List<FinalExit> findAllTheFinalExit()
//    {
//        return finalExitRepo.findFinalExitByApprove();
//    }
    public List<FinalExit> findAllFinalExit()
    {
        return finalExitRepo.findFinalExitByApprove();
    }
    public List<FinalExit> findFinalByApprove()
    {
        return finalExitRepo.findFinalByApprove();
    }
    public List<FinalExit> findFinalExitReject()
    {
        return finalExitRepo.findFinalExitReject();
    }
//    public List<FinalExit> findAllFinalExitByReject()
//    {
//        return finalExitRepo.findFinalExitByReject();
//    }
    public void deleteByFinalExitId(Long finalExitId){

        finalExitRepo.deleteByFinalExitId(finalExitId);
    }
//
//    public FinalExit delete(FinalExit finalExit){
//        finalExit.setDeleteFlag(0);
//        return finalExitRepo.save(finalExit);
//    }

    public FinalExit findFinalExitById(Long finalExitId) {
        return finalExitRepo.findByFinalExitId(finalExitId)
                .orElseThrow(() -> new UserNotFoundException("InsuranceCompany by id: " + finalExitId + " not found"));
    }
    public void deleteFinalExit(Long finalExitId){

        this.finalExitRepo.deleteById(finalExitId);
    }


    public FinalExit approveFinalExit(FinalExit finalExit){
        finalExit.setApprove(2);
        return finalExitRepo.save(finalExit);
    }
    public FinalExit rejectFinalExit(FinalExit finalExit){
        finalExit.setApprove(3);
        return finalExitRepo.save(finalExit);
    }
//    public FinalExit rejectFinalExit(FinalExit finalExit){
//        finalExit.setApprove(3);
//        return finalExitRepo.save(finalExit);
//    }



}
