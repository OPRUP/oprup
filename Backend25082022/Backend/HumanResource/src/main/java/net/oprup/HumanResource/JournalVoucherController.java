package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Customer;
import net.oprup.HumanResource.model.JournalVoucher;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.service.JournalVoucherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journalVoucher")
@CrossOrigin(origins = "*")
public class JournalVoucherController {
    private final JournalVoucherService journalVoucherService;

    public JournalVoucherController(JournalVoucherService journalVoucherService) {
        this.journalVoucherService = journalVoucherService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<JournalVoucher>> getAllJournalVoucher(){
        List<JournalVoucher> journalVoucher = journalVoucherService.findAllJournalVoucher();
        return new ResponseEntity<>(journalVoucher, HttpStatus.OK);
    }

    @GetMapping("/find/{journalVoucherId}")
    public ResponseEntity<JournalVoucher> getJournalVoucherById(@PathVariable("journalVoucherId") Long journalVoucherId){
        JournalVoucher record = journalVoucherService.findJournalVoucherById(journalVoucherId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<JournalVoucher> addJournalVoucher(@RequestBody JournalVoucher record){
        JournalVoucher newRecord = journalVoucherService.addJournalVoucher(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<JournalVoucher> update(@RequestBody JournalVoucher record){
        JournalVoucher updateRecord = journalVoucherService.updateJournalVoucher(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<JournalVoucher> delete(@RequestBody JournalVoucher record){
        JournalVoucher deleteRecord = journalVoucherService.deleteJournalVoucher(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/count")
    public  long count(){
        long records = journalVoucherService.countId();
        return (records);
    }
}
