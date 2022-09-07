package net.oprup.HumanResource;

import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.JournalVoucherDetailsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journalVoucherDetails")
@CrossOrigin(origins = "*")
public class JournalVoucherDetailsController {
    private final JournalVoucherDetailsService journalVoucherDetailsService;

    public JournalVoucherDetailsController(JournalVoucherDetailsService journalVoucherDetailsService) {
        this.journalVoucherDetailsService = journalVoucherDetailsService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<JournalVoucherDetails>> getAllJournalVoucherDetails(){
        List<JournalVoucherDetails> records = journalVoucherDetailsService.findAllJournalVoucherDetails();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{journalVoucherId}")
    public ResponseEntity<?> getJournalVoucherDetailsByJournalVoucher(@PathVariable("journalVoucherId") Long journalVoucherId){
        JournalVoucher emp =  new JournalVoucher();
        emp.setJournalVoucherId(journalVoucherId);
        List<JournalVoucherDetails> journalVoucherDetails = journalVoucherDetailsService.findJournalVoucherDetailsByJournalVoucher(emp);
        return new ResponseEntity<>(journalVoucherDetails, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<JournalVoucherDetails> addJournalVoucherDetails(@RequestBody JournalVoucherDetails journalVoucherDetails){
        JournalVoucherDetails newRecord = journalVoucherDetailsService.addJournalVoucherDetails(journalVoucherDetails);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<JournalVoucherDetails> updateJournalVoucherDetails(@RequestBody JournalVoucherDetails record){
        JournalVoucherDetails updateRecord = journalVoucherDetailsService.updateJournalVoucherDetails(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<JournalVoucherDetails> delete(@RequestBody JournalVoucherDetails record){
        JournalVoucherDetails deleteRecord = journalVoucherDetailsService.deleteJournalVoucherDetails(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
    @GetMapping("/findJour/{accountId}")
    public ResponseEntity<?> getJourAccount(@PathVariable Long accountId){
        ChartAccount coa =  new ChartAccount();
        coa.setAccountId(accountId);


        List<JournalVoucherDetails> journalVoucherDetails = journalVoucherDetailsService.findJourAccount(coa);
        return new ResponseEntity<>(journalVoucherDetails, HttpStatus.OK);
    }
//    @GetMapping("/all")
//    public ResponseEntity<List<JournalVoucherDetails>> getAllJournalVoucherDetails() {
//        List<JournalVoucherDetails> journalVoucherDetails = journalVoucherDetailsService.findAllJournalVoucherDetails();
//        return new ResponseEntity<>(journalVoucherDetails, HttpStatus.OK);
//    }
//    @PostMapping("/add")
//    public ResponseEntity<JournalVoucherDetails> addJournalVoucherDetails(@RequestBody JournalVoucherDetails journalVoucherDetails) {
//        JournalVoucherDetails record  = journalVoucherDetailsService.addJournalVoucherDetails(journalVoucherDetails);
//        return new ResponseEntity<>(record, HttpStatus.CREATED);
//    }
//
//
//    @GetMapping("/find/{journalVoucherDetailsId}")
//    public ResponseEntity<JournalVoucherDetails> getById(@PathVariable("journalVoucherDetailsId") Long journalVoucherDetailsId){
//        JournalVoucherDetails record = journalVoucherDetailsService.findJournalVoucherDetailsById(journalVoucherDetailsId);
//        return new ResponseEntity<>(record, HttpStatus.OK);
//    }
//    @PutMapping("/update")
//    public ResponseEntity<JournalVoucherDetails> update(@RequestBody JournalVoucherDetails record){
//        JournalVoucherDetails updateRecord = journalVoucherDetailsService.updateJournalVoucherDetails(record);
//        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
//    }
//    @PutMapping("/delete")
//    public ResponseEntity<JournalVoucherDetails> delete(@RequestBody JournalVoucherDetails record){
//        JournalVoucherDetails deleteRecord = journalVoucherDetailsService.deleteJournalVoucherDetails(record);
//        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
//    }
//    @GetMapping("/chartAccountByJournalVoucher/{journalVoucherId}")
//    public ResponseEntity<?> getJournalVoucherDetailsByJournalVoucher(@PathVariable("journalVoucherId") Long journalVoucherId){
//        JournalVoucher emp =  new JournalVoucher();
//        emp.setJournalVoucherId(journalVoucherId);
//        List<JournalVoucherDetails> journalVoucherDetails = journalVoucherDetailsService.findJournalVoucherDetailsByJournalVoucher(emp);
//        return new ResponseEntity<>(journalVoucherDetails, HttpStatus.OK);
//    }
}
