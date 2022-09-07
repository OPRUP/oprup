package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Transportation;

import net.oprup.HumanResource.service.A02_InternalCompanyService;
import net.oprup.HumanResource.service.TransportationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transportation")
@CrossOrigin(origins = "*")
public class TransportationController {



    private final TransportationService transportationService;
    public TransportationController(TransportationService transportationService) {
        this.transportationService = transportationService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Transportation>> getAllTransportation(){
        List<Transportation> transportations = transportationService.findAllTransportation();
        return new ResponseEntity<>(transportations, HttpStatus.OK);
    }
    @GetMapping("/find/{transportationMeanId}")
    public ResponseEntity<Transportation> getTransportationById(@PathVariable("transportationMeanId") Long transportationMeanId){
        Transportation transportation = transportationService.findTransportationById(transportationMeanId);
        return new ResponseEntity<>(transportation, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Transportation> addTransportation(@RequestBody Transportation transportation){
        Transportation newTransportation = transportationService.addTransportation(transportation);
        return new ResponseEntity<>(newTransportation, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Transportation> updateTransportation(@RequestBody Transportation transportation){
        Transportation updateTransportation = transportationService.updateTransportation(transportation);
        return new ResponseEntity<>(updateTransportation, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Transportation> deleteTransportation(@RequestBody Transportation transportation){
        Transportation deleteTransportation = transportationService.deleteTransportation(transportation);
        return new ResponseEntity<>(deleteTransportation, HttpStatus.OK);
    }
}
