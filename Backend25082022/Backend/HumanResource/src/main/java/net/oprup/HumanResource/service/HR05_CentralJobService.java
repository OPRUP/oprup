package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR05_CentralJob;
import net.oprup.HumanResource.repo.HR05_CentralJobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR05_CentralJobService {

    private final HR05_CentralJobRepo centralJobRepo;
    @Autowired
    public HR05_CentralJobService(HR05_CentralJobRepo centralJobRepo) {
        this.centralJobRepo = centralJobRepo;
    }
    public List<HR05_CentralJob> findAllCentralJobs(){
        return  centralJobRepo.findCentralJobsByDeleteFlag();
    }
    public HR05_CentralJob findCentralJobById(Long centralId){
        return centralJobRepo.findCentralJobByCentralId(centralId)
                .orElseThrow(() -> new UserNotFoundException("CentralJob by id: " + centralId + " not found"));
    }


    public HR05_CentralJob addCentralJob(HR05_CentralJob centralJob){
        centralJob.setDeleteFlag(1);
        return centralJobRepo.save(centralJob);
    }
    public HR05_CentralJob updateCentralJob(HR05_CentralJob centralJob){
        centralJob.setDeleteFlag(1);
        return centralJobRepo.save(centralJob);
    }
    public HR05_CentralJob deleteCentralJob(HR05_CentralJob centralJob){
        centralJob.setDeleteFlag(0);
        return centralJobRepo.save(centralJob);
    }
}
