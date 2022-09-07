package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.ATMCardRequest;
import net.oprup.HumanResource.model.Advance;
import net.oprup.HumanResource.model.ResidenceCardRequest;
import net.oprup.HumanResource.repo.ATMCardRequestRepo;
import net.oprup.HumanResource.repo.ResidenceCardRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ResidenceCardRequestService {

    private final ResidenceCardRequestRepo residenceCardRequestRepo;

    @Autowired
    public ResidenceCardRequestService(ResidenceCardRequestRepo residenceCardRequestRepo) {

        this.residenceCardRequestRepo = residenceCardRequestRepo;
    }
    public ResidenceCardRequest addResidenceCardRequest(ResidenceCardRequest residenceCardRequest) {
        residenceCardRequest.setApprove(1);
        return residenceCardRequestRepo.save(residenceCardRequest);
    }
    public ResidenceCardRequest updateResidenceCardRequest(ResidenceCardRequest residenceCardRequest){
        return residenceCardRequestRepo.save(residenceCardRequest);
    }

    public List<ResidenceCardRequest> findAllResidenceCardRequest()
    {
        return residenceCardRequestRepo.findResidenceCardRequestByApprove();
    }
    public void deleteByResidenceCardRequestId(Long residenceCardRequestId){

        residenceCardRequestRepo.deleteByResidenceCardRequestId(residenceCardRequestId);
    }

    public ResidenceCardRequest findResidenceCardRequestById(Long residenceCardRequestId) {
        return residenceCardRequestRepo.findByResidenceCardRequestId(residenceCardRequestId)
                .orElseThrow(() -> new UserNotFoundException("InsuranceCompany by id: " + residenceCardRequestId + " not found"));
    }
    public void deleteResidenceCardRequest(Long residenceCardRequestId){

        this.residenceCardRequestRepo.deleteById(residenceCardRequestId);
    }


    public ResidenceCardRequest approveResidenceCardRequest(ResidenceCardRequest residenceCardRequest){
        residenceCardRequest.setApprove(2);
        return residenceCardRequestRepo.save(residenceCardRequest);
    }

    public ResidenceCardRequest rejectATMCardRequest(ResidenceCardRequest residenceCardRequest){
        residenceCardRequest.setApprove(3);
        return residenceCardRequestRepo.save(residenceCardRequest);
    }

    public List<ResidenceCardRequest> findApprove(){

        return  residenceCardRequestRepo.findApprove();
    }
    public List<ResidenceCardRequest> findRejrct(){
        return  residenceCardRequestRepo.findRejrct();
    }
}
