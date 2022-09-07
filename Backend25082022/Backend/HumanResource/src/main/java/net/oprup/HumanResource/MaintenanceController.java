package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Maintenance;
import net.oprup.HumanResource.service.MaintenanceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/maintenance")
@CrossOrigin(origins = "*")
public class MaintenanceController {
    private final MaintenanceService maintenanceService;

    public MaintenanceController(MaintenanceService maintenanceService) {
        this.maintenanceService = maintenanceService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Maintenance>> getAllMaintenance(){
        List<Maintenance> maintenances = maintenanceService.findAllMaintenance();
        return new ResponseEntity<>(maintenances, HttpStatus.OK);
    }
    @GetMapping("/find/{maintenanceId}")
    public ResponseEntity<Maintenance> getMaintenanceById(@PathVariable("maintenanceId") Long maintenanceId){
        Maintenance maintenance = maintenanceService.findMaintenanceById(maintenanceId);
        return new ResponseEntity<>(maintenance, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Maintenance> addMaintenance(@RequestBody Maintenance maintenance){
        Maintenance newMaintenance = maintenanceService.addMaintenance(maintenance);
        return new ResponseEntity<>(newMaintenance, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Maintenance> updateMaintenance(@RequestBody Maintenance maintenance){
        Maintenance updateMaintenance = maintenanceService.updateMaintenance(maintenance);
        return new ResponseEntity<>(updateMaintenance, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Maintenance> deleteMaintenance(@RequestBody Maintenance maintenance){
        Maintenance deleteMaintenance = maintenanceService.deleteMaintenance(maintenance);
        return new ResponseEntity<>(deleteMaintenance, HttpStatus.OK);
    }
}
