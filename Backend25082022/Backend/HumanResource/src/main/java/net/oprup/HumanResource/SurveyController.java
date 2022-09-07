package net.oprup.HumanResource;


import net.oprup.HumanResource.model.Survey;
import net.oprup.HumanResource.service.SurveyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/survey")
@CrossOrigin(origins = "*")
public class SurveyController {

    private final SurveyService service;

    public SurveyController(SurveyService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Survey>> getAll(){
        List<Survey> records = service.findAllSurvey();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Survey> addVendor(@RequestBody Survey record){
        Survey newRecord = service.addSurvey(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

}
