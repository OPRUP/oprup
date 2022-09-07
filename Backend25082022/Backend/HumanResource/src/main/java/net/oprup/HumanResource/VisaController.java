package net.oprup.HumanResource;


import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.model.Visa;
import net.oprup.HumanResource.service.VendorService;
import net.oprup.HumanResource.service.VisaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/visa")
@CrossOrigin(origins = "*")

public class VisaController {
    private final VisaService service;
    public VisaController(VisaService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Visa>> getAll(){
        List<Visa> records = service.findAllVisa();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{visaInformationId}")
    public ResponseEntity<Visa> getById(@PathVariable("visaInformationId") Long visaInformationId){
        Visa record = service.findVisaByVisaInformationId(visaInformationId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Visa> addVisa(@RequestBody Visa record){
        Visa newRecord = service.addVisa(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Visa> update(@RequestBody Visa record){
        Visa updateRecord = service.updateVisa(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Visa> delete(@RequestBody Visa record){
        Visa deleteRecord = service.deleteVisa(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
}
