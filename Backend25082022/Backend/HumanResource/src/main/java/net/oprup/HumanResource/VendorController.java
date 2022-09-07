package net.oprup.HumanResource;


import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.service.VendorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendor")
@CrossOrigin(origins = "*")

public class VendorController {
    private final VendorService service;
    public VendorController(VendorService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Vendor>> getAll(){
        List<Vendor> records = service.findAllVendor();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{vendorId}")
    public ResponseEntity<Vendor> getById(@PathVariable("vendorId") Long vendorId){
        Vendor record = service.findVendorById(vendorId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Vendor> addVendor(@RequestBody Vendor record){
        Vendor newRecord = service.addVendor(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Vendor> update(@RequestBody Vendor record){
        Vendor updateRecord = service.updateVendor(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Vendor> delete(@RequestBody Vendor record){
        Vendor deleteRecord = service.deleteVendor(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}
