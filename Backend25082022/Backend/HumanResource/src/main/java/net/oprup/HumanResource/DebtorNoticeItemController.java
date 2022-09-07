package net.oprup.HumanResource;


import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.CreditNoticeItem;
import net.oprup.HumanResource.model.DebtorNotice;
import net.oprup.HumanResource.model.DebtorNoticeItem;
import net.oprup.HumanResource.service.CreditNoticeItemService;
import net.oprup.HumanResource.service.DebtorNoticeItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/debtorNoticeItem")
@CrossOrigin(origins = "*")
public class DebtorNoticeItemController {
    private final DebtorNoticeItemService service;


    public DebtorNoticeItemController(DebtorNoticeItemService service) {
        this.service = service;
    }


    @GetMapping("/all")
    public ResponseEntity<List<DebtorNoticeItem>> getAll(){
        List<DebtorNoticeItem> records = service.findAllCDebtorNoticeItems();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/itemByDebtorNotice/{debtorNoticeId}")
    public ResponseEntity<?> getCreditNoticeItemByCreditNotice(@PathVariable("debtorNoticeId") Long debtorNoticeId){
        DebtorNotice emp =  new DebtorNotice();
        emp.setDebtorNoticeId(debtorNoticeId);

        List<DebtorNoticeItem> debtorNoticeItems = service.findDebtorNoticeItemsByDebtorNotice(emp);
        return new ResponseEntity<>(debtorNoticeItems, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<DebtorNoticeItem> addCreditNoticeItem(@RequestBody DebtorNoticeItem record){
        DebtorNoticeItem newRecord = service.addDebtorNoticeItem(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<DebtorNoticeItem> update(@RequestBody DebtorNoticeItem record){
        DebtorNoticeItem updateRecord = service.updateDebtorNoticeItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<DebtorNoticeItem> delete(@RequestBody DebtorNoticeItem record){
        DebtorNoticeItem deleteRecord = service.deleteDebtorNoticeItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}



