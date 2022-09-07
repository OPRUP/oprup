package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.RenewingResidence;
import net.oprup.HumanResource.model.SkipRequest;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.repo.RenewingResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RenewingResidenceService {
    private final RenewingResidenceRepo renewingResidenceRepo;
    @Autowired

    public RenewingResidenceService(RenewingResidenceRepo renewingResidenceRepo) {
        this.renewingResidenceRepo = renewingResidenceRepo;
    }

    public RenewingResidence addRenewingResidence(RenewingResidence renewingResidence){
        renewingResidence.setDeleteFlag(1);
        return renewingResidenceRepo.save(renewingResidence);
    }

    public List<RenewingResidence> findAllRenewingResidence(){
        return  renewingResidenceRepo.deleteRenewingResidenceByDeleteFlag();
    }

    public RenewingResidence updateRenewingResidence(RenewingResidence renewingResidence){
        renewingResidence.setDeleteFlag(1);
        return renewingResidenceRepo.save(renewingResidence);
    }

   public RenewingResidence findRenewingResidenceById(Long renewingResidenceId){
       return renewingResidenceRepo.findRenewingResidenceId(renewingResidenceId)
               .orElseThrow(() -> new UserNotFoundException("RenewingResidence by id: " + renewingResidenceId + " not found"));
    }



    public RenewingResidence deleteRenewingResidence(RenewingResidence renewingResidence){
        renewingResidence.setDeleteFlag(0);
        return renewingResidenceRepo.save(renewingResidence);
    }

}
