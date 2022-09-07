package net.oprup.HumanResource;


import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.CreditNoticeItem;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SalesInvoiceItem;
import net.oprup.HumanResource.service.CreditNoticeItemService;
import net.oprup.HumanResource.service.SalesInvoiceItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/creditNoticeItem")
@CrossOrigin(origins = "*")
public class CreditNoticeItemController {
    private final CreditNoticeItemService service;


    public CreditNoticeItemController(CreditNoticeItemService service) {
        this.service = service;
    }


    @GetMapping("/all")
    public ResponseEntity<List<CreditNoticeItem>> getAll(){
        List<CreditNoticeItem> records = service.findAllCreditNoticeItems();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/itemByCreditNotice/{creditNoticeId}")
    public ResponseEntity<?> getCreditNoticeItemByCreditNotice(@PathVariable("creditNoticeId") Long creditNoticeId){
        CreditNotice emp =  new CreditNotice();
        emp.setCreditNoticeId(creditNoticeId);

        List<CreditNoticeItem> creditNoticeItems = service.findCreditNoticeItemsByCreditNotice(emp);
        return new ResponseEntity<>(creditNoticeItems, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<CreditNoticeItem> addCreditNoticeItem(@RequestBody CreditNoticeItem record){
        CreditNoticeItem newRecord = service.addCreditNoticeItem(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<CreditNoticeItem> update(@RequestBody CreditNoticeItem record){
        CreditNoticeItem updateRecord = service.updateCreditNoticeItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<CreditNoticeItem> delete(@RequestBody CreditNoticeItem record){
        CreditNoticeItem deleteRecord = service.deleteCreditNoticeItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}



