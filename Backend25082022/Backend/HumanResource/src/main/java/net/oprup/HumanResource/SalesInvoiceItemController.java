package net.oprup.HumanResource;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.SalesInvoiceItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/salesInvoiceItem")
@CrossOrigin(origins = "*")

public class SalesInvoiceItemController {

    private final SalesInvoiceItemService service;


    public SalesInvoiceItemController(SalesInvoiceItemService service) {
        this.service = service;
    }


    @GetMapping("/all")
    public ResponseEntity<List<SalesInvoiceItem>> getAll(){
        List<SalesInvoiceItem> records = service.findAllSalesInvoiceItem();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/itemBySalesInvoice/{salesInvoiceId}")
    public ResponseEntity<?> getInvoiceItemBySalesInvoice(@PathVariable("salesInvoiceId") Long salesInvoiceId){
        SalesInvoice emp =  new SalesInvoice();
        emp.setSalesInvoiceId(salesInvoiceId);

        List<SalesInvoiceItem> salesInvoiceItems = service.findSalesInvoiceItemBySalesInvoice(emp);
        return new ResponseEntity<>(salesInvoiceItems, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SalesInvoiceItem> addSalesInvoiceItem(@RequestBody SalesInvoiceItem record){
        SalesInvoiceItem newRecord = service.addSalesInvoiceItem(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<SalesInvoiceItem> update(@RequestBody SalesInvoiceItem record){
        SalesInvoiceItem updateRecord = service.updateSalesInvoiceItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<SalesInvoiceItem> delete(@RequestBody SalesInvoiceItem record){
        SalesInvoiceItem deleteRecord = service.deleteSalesInvoiceItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}


