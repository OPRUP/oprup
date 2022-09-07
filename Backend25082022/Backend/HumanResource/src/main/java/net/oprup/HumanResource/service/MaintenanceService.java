package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Maintenance;
import net.oprup.HumanResource.model.Taskeen;
import net.oprup.HumanResource.repo.MaintenanceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MaintenanceService {
    private final MaintenanceRepo maintenanceRepo;
    @Autowired
    public MaintenanceService(MaintenanceRepo maintenanceRepo) {
        this.maintenanceRepo = maintenanceRepo;
    }
    public Maintenance addMaintenance(Maintenance maintenance){
        maintenance.setDeleteFlag(1);
        return maintenanceRepo.save(maintenance);
    }
    public List<Maintenance> findAllMaintenance(){
        return  maintenanceRepo.findMaintenanceByDeleteFlag();
    }
    public Maintenance updateMaintenance(Maintenance maintenance){
        maintenance.setDeleteFlag(1);
        return maintenanceRepo.save(maintenance);
    }
    public Maintenance findMaintenanceById(Long maintenanceId){
        return (Maintenance) maintenanceRepo.findMaintenanceByMaintenanceId(maintenanceId)
                .orElseThrow(() -> new UserNotFoundException("Maintenance by id: " + maintenanceId + " not found"));
    }
    public Maintenance deleteMaintenance(Maintenance maintenance){
        maintenance.setDeleteFlag(0);
        return maintenanceRepo.save(maintenance);
    }



}
