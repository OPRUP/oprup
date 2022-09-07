package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.CostCenter;
import net.oprup.HumanResource.repo.CostCenterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CostCenterService {
    private final CostCenterRepo costCenterRepo;
    @Autowired
    public CostCenterService(CostCenterRepo costCenterRepo) {
        this.costCenterRepo = costCenterRepo;
    }
    public List<CostCenter> findAll(){
        return  costCenterRepo.findCostCenterByDeleteFlag();
    }
    public CostCenter findById(Long costCenterId){
        return costCenterRepo.findCostCenterByCostCenterId(costCenterId)
                .orElseThrow(() -> new UserNotFoundException("Account by id: " + costCenterId + " not found"));
    }
    public CostCenter add(CostCenter costCenter){
        costCenter.setDeleteFlag(1);
        return costCenterRepo.save(costCenter);
    }
    public CostCenter update(CostCenter costCenter){
        costCenter.setDeleteFlag(1);
        return costCenterRepo.save(costCenter);
    }
    public CostCenter delete(CostCenter costCenter){
        costCenter.setDeleteFlag(0);
        return costCenterRepo.save(costCenter);
    }
    public long countId(){

        return costCenterRepo.countCostCenterId();
    }
}
