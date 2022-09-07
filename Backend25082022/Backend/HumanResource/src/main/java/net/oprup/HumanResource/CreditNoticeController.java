package net.oprup.HumanResource;


import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.service.CreditNoticeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/creditNotice")
@CrossOrigin(origins = "*")
public class CreditNoticeController {
    private final CreditNoticeService service;


    public CreditNoticeController(CreditNoticeService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<CreditNotice>> getAll(){
        List<CreditNotice> records = service.findAllCreditNotice();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{creditNoticeId}")
    public ResponseEntity<CreditNotice> getById(@PathVariable("creditNoticeId") Long creditNoticeId){
        CreditNotice record = service.findCreditNoticeById(creditNoticeId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<CreditNotice> addCreditNotice(@RequestBody CreditNotice record){
        CreditNotice newRecord = service.addCreditNotice(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<CreditNotice> update(@RequestBody CreditNotice record){
        CreditNotice updateRecord = service.updateCreditNotice(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<CreditNotice> delete(@RequestBody CreditNotice record){
        CreditNotice deleteRecord = service.deleteCreditNotice(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
    @GetMapping("/count")
    public  long count(){
        long records = service.countId();
        return (records);
    }

}

