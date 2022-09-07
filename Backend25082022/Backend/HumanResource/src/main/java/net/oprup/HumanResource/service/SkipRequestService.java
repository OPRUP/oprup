package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.SkipRequest;
import net.oprup.HumanResource.model.TravelingEmployee;
import net.oprup.HumanResource.repo.SkipRequestRepo;
import net.oprup.HumanResource.repo.TravelingEmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional

public class SkipRequestService {

    private final SkipRequestRepo repo;

    @Autowired
    public SkipRequestService(SkipRequestRepo repo) {
        this.repo = repo;
    }


    public SkipRequest addSkipRequest(SkipRequest skipRequest){
        skipRequest.setDeleteFlag(1);
        return repo.save(skipRequest);
    }

    public List< SkipRequest> findAllSkipRequest(){
        return  repo.findSkipRequestByDeleteFlag();
    }

    public  SkipRequest updateSkipRequest( SkipRequest skipRequest){
        skipRequest.setDeleteFlag(1);
        return repo.save(skipRequest);
    }

    public  SkipRequest findSkipRequestById(Long skipRequestId){
        return repo.findSkipRequestById(skipRequestId)
                .orElseThrow(() -> new UserNotFoundException("SkipRequest by id: " + skipRequestId + " not found"));
    }

    public  SkipRequest deleteSkipRequest( SkipRequest skipRequest){
        skipRequest.setDeleteFlag(0);
        return repo.save(skipRequest);
    }

}




