package net.oprup.HumanResource;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.ProjectService;
import net.oprup.HumanResource.service.QuotationItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quotationItem")
@CrossOrigin(origins = "*")
public class QuotationItemController {
    private final QuotationItemService quotationItemService;

    public QuotationItemController(QuotationItemService quotationItemService) {
        this.quotationItemService = quotationItemService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<QuotationItem>> getAllVoucherItems() {
        List<QuotationItem> quotationItem = quotationItemService.findAllQuotationItem();
        return new ResponseEntity<>(quotationItem, HttpStatus.OK);
    }




    @PostMapping("/add")
    public ResponseEntity<QuotationItem> addQuotationItem(@RequestBody QuotationItem quotationItem) {
        QuotationItem record  = quotationItemService.addQuotationItem(quotationItem);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


    @GetMapping("/findCode/{quotationId}")
    public ResponseEntity<?> getQuotationItemByQuotationId(@PathVariable("quotationId") Long quotationId){
        Quotation quotation =  new Quotation();
        quotation.setQuotationId(quotationId);
        List<QuotationItem> QuotationItemList = quotationItemService.getQuotationItemByquotationId(quotation);
        return new ResponseEntity<>(QuotationItemList, HttpStatus.OK);
    }


    @PutMapping("/delete/{quotationItemId}")
    public ResponseEntity<?> deleteQuotationItem(@PathVariable("quotationItemId") Long quotationItemId){
        quotationItemService.deleteByQuotationItemId(quotationItemId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<QuotationItem> delete(@RequestBody QuotationItem record){
        QuotationItem deleteRecord = quotationItemService.deleteQuotationItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<QuotationItem> update(@RequestBody QuotationItem record){
        QuotationItem updateRecord = quotationItemService.updateQuotationItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }




}
