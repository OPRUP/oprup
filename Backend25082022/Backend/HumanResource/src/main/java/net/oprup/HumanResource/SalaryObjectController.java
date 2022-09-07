package net.oprup.HumanResource;


import net.oprup.HumanResource.model.SalaryObject;
import net.oprup.HumanResource.service.SalaryObjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salaryObject")
@CrossOrigin(origins = "*")
public class SalaryObjectController {

    private final SalaryObjectService salaryObjectService;

    public SalaryObjectController(SalaryObjectService salaryObjectService) {
        this.salaryObjectService = salaryObjectService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<SalaryObject>> getAllSalaryObjects(){
        List<SalaryObject> salaryObjects = salaryObjectService.findAllSalaryObjects();
        return new ResponseEntity<>(salaryObjects, HttpStatus.OK);
    }

    @GetMapping("/find/{salaryObjectId}")
    public ResponseEntity<SalaryObject> getSalaryObjectBySalaryObjectId(@PathVariable("salaryObjectId") Long salaryObjectId){
        SalaryObject salaryObject = salaryObjectService.findSalaryObjectById(salaryObjectId);
        return new ResponseEntity<>(salaryObject, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SalaryObject> addSalaryObject(@RequestBody SalaryObject salaryObject){
        SalaryObject newSalaryObject = salaryObjectService.addSalaryObject(salaryObject);
        return new ResponseEntity<>(newSalaryObject, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<SalaryObject> updateSalaryObject(@RequestBody SalaryObject salaryObject){
        SalaryObject updateSalaryObject = salaryObjectService.updateSalaryObject(salaryObject);
        return new ResponseEntity<>(updateSalaryObject, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<SalaryObject> deleteSalaryObject(@RequestBody SalaryObject salaryObject){
        SalaryObject deleteSalaryObject = salaryObjectService.deleteSalaryObject(salaryObject);
        return new ResponseEntity<>(deleteSalaryObject, HttpStatus.OK);
    }
}
