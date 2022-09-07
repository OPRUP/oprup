package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.ATMCardRequest;
import net.oprup.HumanResource.model.Vacation;
import net.oprup.HumanResource.repo.ATMCardRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ATMCardRequestService {

    private final ATMCardRequestRepo creditCardRequestRepo;
    @Autowired
    public ATMCardRequestService(ATMCardRequestRepo creditCardRequestRepo) {

        this.creditCardRequestRepo = creditCardRequestRepo;
    }


    public ATMCardRequest addATMCardRequest(ATMCardRequest creditCardRequest) {
        creditCardRequest.setApprove(1);
        return creditCardRequestRepo.save(creditCardRequest);
    }
    public ATMCardRequest updateATMCardRequest(ATMCardRequest creditCardRequest){
        return creditCardRequestRepo.save(creditCardRequest);
    }

    public List<ATMCardRequest> findAllATMCardRequest()
    {
        return creditCardRequestRepo.findATMRequestByApprove();
    }

    public void deleteByATMCardRequestId(Long creditCardRequestId){

        creditCardRequestRepo.deleteByCreditCardRequestId(creditCardRequestId);
    }

    public ATMCardRequest findATMCardRequestById(Long creditCardRequestId) {
        return creditCardRequestRepo.findByCreditCardRequestId(creditCardRequestId)
                .orElseThrow(() -> new UserNotFoundException("InsuranceCompany by id: " + creditCardRequestId + " not found"));
    }
    public void deleteATMCardRequest(Long creditCardRequestId){

        this.creditCardRequestRepo.deleteById(creditCardRequestId);
    }


    public ATMCardRequest approveATMCardRequest(ATMCardRequest creditCardRequest){
        creditCardRequest.setApprove(2);
        return creditCardRequestRepo.save(creditCardRequest);
    }
    public ATMCardRequest rejectATMCardRequest(ATMCardRequest creditCardRequest){
        creditCardRequest.setApprove(3);
        return creditCardRequestRepo.save(creditCardRequest);
    }


}