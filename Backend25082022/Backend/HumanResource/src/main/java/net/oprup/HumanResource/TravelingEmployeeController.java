package net.oprup.HumanResource;

import net.oprup.HumanResource.model.TravelingEmployee;
import net.oprup.HumanResource.service.TravelingEmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/travelingEmployee")
@CrossOrigin(origins = "*")
public class TravelingEmployeeController {
    private final TravelingEmployeeService service;

    public TravelingEmployeeController(TravelingEmployeeService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<TravelingEmployee>> getAll(){
        List<TravelingEmployee> records = service.findAllTravelingEmployee();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{travelingEmployeeId}")
    public ResponseEntity<TravelingEmployee> getById(@PathVariable("travelingEmployeeId") Long travelingEmployeeId){
        TravelingEmployee record = service.findTravelingEmployeeById(travelingEmployeeId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<TravelingEmployee> addTravelingEmployee(@RequestBody TravelingEmployee record){
        TravelingEmployee newRecord = service.addTravelingEmployee(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<TravelingEmployee> update(@RequestBody TravelingEmployee record){
        TravelingEmployee updateRecord = service.updateTravelingEmployee(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<TravelingEmployee> delete(@RequestBody TravelingEmployee record){
        TravelingEmployee deleteRecord = service.deleteTravelingEmployee(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }


//new

    @GetMapping("/count")

    public int getAllTravelingEmployeeCount(){
        int records = (int) service.countOfTravelingEmployee();
        return records;
    }

    @GetMapping("/getTravelingEmployee")

    public ResponseEntity<List<TravelingEmployee>> getAllTravelingEmployee(){
        List<TravelingEmployee> records = service.findTravelingEmployeeByDeleteFlag();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

}