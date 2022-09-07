package net.oprup.HumanResource;


import net.oprup.HumanResource.model.HR01_A01_TopManagement;
import net.oprup.HumanResource.model.HR05_CentralJob;
import net.oprup.HumanResource.service.HR01_A01_TopManagementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/topManagement")
@CrossOrigin(origins = "*")
public class HR01_A01_TopManagementController {
    private final HR01_A01_TopManagementService HR01TopManagementService;

    public HR01_A01_TopManagementController(HR01_A01_TopManagementService HR01TopManagementService) {
        this.HR01TopManagementService = HR01TopManagementService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<HR01_A01_TopManagement>> getAllTopManagements(){
        List<HR01_A01_TopManagement> topManagement = HR01TopManagementService.findAllTopManagements();
        return new ResponseEntity<>(topManagement, HttpStatus.OK);
    }

    @GetMapping("/find/{topManagementId}")
    public ResponseEntity<HR01_A01_TopManagement> getTopManagementById(@PathVariable("topManagementId") Long topManagementId){
        HR01_A01_TopManagement topManagement = HR01TopManagementService.findTopManagementById(topManagementId);
        return new ResponseEntity<>(topManagement, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR01_A01_TopManagement> addTopManagement(@RequestBody HR01_A01_TopManagement topManagement){
        HR01_A01_TopManagement newTopManagement = HR01TopManagementService.addTopManagement(topManagement);
        return new ResponseEntity<>(newTopManagement, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR01_A01_TopManagement> updateTopManagement(@RequestBody HR01_A01_TopManagement topManagement){
        HR01_A01_TopManagement updateTopManagement = HR01TopManagementService.updateTopManagement(topManagement);
        return new ResponseEntity<>(updateTopManagement, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<HR01_A01_TopManagement> deleteTopManagement(@RequestBody HR01_A01_TopManagement topManagement){
        HR01_A01_TopManagement deleteHR01TopManagement = HR01TopManagementService.deleteTopManagement(topManagement);
        return new ResponseEntity<>(deleteHR01TopManagement, HttpStatus.OK);
    }


}
