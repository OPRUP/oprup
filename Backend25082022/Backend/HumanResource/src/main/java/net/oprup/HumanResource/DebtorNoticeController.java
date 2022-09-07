package net.oprup.HumanResource;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.DebtorNotice;
import net.oprup.HumanResource.service.CreditNoticeService;
import net.oprup.HumanResource.service.DebtorNoticeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/debtorNotice")
@CrossOrigin(origins = "*")
public class DebtorNoticeController {
    private final DebtorNoticeService service;


    public DebtorNoticeController(DebtorNoticeService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<DebtorNotice>> getAll(){
        List<DebtorNotice> records = service.findAllDebtorNotice();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{debtorNoticeId}")
    public ResponseEntity<DebtorNotice> getById(@PathVariable("debtorNoticeId") Long debtorNoticeId){
        DebtorNotice record = service.findDebtorNoticeById(debtorNoticeId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<DebtorNotice> addDebtorNotice(@RequestBody DebtorNotice record){
        DebtorNotice newRecord = service.addDebtorNotice(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<DebtorNotice> update(@RequestBody DebtorNotice record){
        DebtorNotice updateRecord = service.updateDebtorNotice(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<DebtorNotice> delete(@RequestBody DebtorNotice record){
        DebtorNotice deleteRecord = service.deleteDebtorNotice(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
    @GetMapping("/count")
    public  long count(){
        long records = service.countId();
        return (records);
    }
}
