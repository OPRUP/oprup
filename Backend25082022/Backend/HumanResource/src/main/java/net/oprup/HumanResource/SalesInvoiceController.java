package net.oprup.HumanResource;


import net.oprup.HumanResource.model.SalesInvoice;

import net.oprup.HumanResource.service.SalesInvoiceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salesInvoice")
@CrossOrigin(origins = "*")
public class SalesInvoiceController {

    private final SalesInvoiceService service;


    public SalesInvoiceController(SalesInvoiceService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<SalesInvoice>> getAll(){
        List<SalesInvoice> records = service.findAllSalesInvoice();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/count")
    public  long count(){
        long records = service.countId();
        return (records);
    }

    @GetMapping("/find/{salesInvoiceId}")
    public ResponseEntity<SalesInvoice> getById(@PathVariable("salesInvoiceId") Long salesInvoiceId){
        SalesInvoice record = service.findSalesInvoiceById(salesInvoiceId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<SalesInvoice> addSalesInvoice(@RequestBody SalesInvoice record){
        SalesInvoice newRecord = service.addSalesInvoice(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<SalesInvoice> update(@RequestBody SalesInvoice record){
        SalesInvoice updateRecord = service.updateSalesInvoice(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<SalesInvoice> delete(@RequestBody SalesInvoice record){
        SalesInvoice deleteRecord = service.deleteSalesInvoice(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

}

