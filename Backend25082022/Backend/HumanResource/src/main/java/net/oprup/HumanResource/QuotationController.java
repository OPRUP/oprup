package net.oprup.HumanResource;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.ProjectService;
import net.oprup.HumanResource.service.QuotationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quotation")
@CrossOrigin(origins = "*")
public class QuotationController {
    private final QuotationService quotationService;

    public QuotationController(QuotationService quotationService) {
        this.quotationService = quotationService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Quotation>> getAllQuotation() {
        List<Quotation> vouchers = quotationService.findAllQuotation();
        return new ResponseEntity<>(vouchers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Quotation> addQuotation(@RequestBody Quotation quotation) {
        Quotation record  = quotationService.addQuotation(quotation);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


    @PutMapping("/update")
    public ResponseEntity<Quotation> updateQuotation(@RequestBody Quotation quotation){
        Quotation updateQuotation = quotationService.updateQuotation(quotation);
        return new ResponseEntity<>(updateQuotation, HttpStatus.OK);
    }


    @GetMapping("/getCount")
    public ResponseEntity<List<Quotation>>getQuotationCount(){
       Long records = quotationService.getAllCountOfQuotation();
        return new ResponseEntity(records, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{quotationId}")
    public ResponseEntity<?> deleteQuotation(@PathVariable("quotationId") Long quotationId){
        quotationService.deleteByQuotationId(quotationId);
        return new ResponseEntity<>(HttpStatus.OK);
    }




//    @PutMapping("/approve")
//    public ResponseEntity<Quotation> approveQuotation(@RequestBody Quotation quotation){
//        Quotation approveQuotation= quotationService.approveQuotation(quotation);
//        return new ResponseEntity<>(approveQuotation, HttpStatus.OK);
//    }

    @GetMapping("/approve/{quotationId}")
    public ResponseEntity<Quotation> getQuotationById(@PathVariable("quotationId") Long quotationId){
        Quotation record = quotationService.findQuotationById(quotationId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

//    @PutMapping("/reject")
//    public ResponseEntity<Quotation> rejectQuotation(@RequestBody Quotation quotation){
//        Quotation rejectQuotation = quotationService.rejectQuotation(quotation);
//        return new ResponseEntity<>(rejectQuotation, HttpStatus.OK);
//    }

    @GetMapping("/find/{quotationId}")
    public ResponseEntity<Quotation> getById(@PathVariable("quotationId") Long quotationId){
        Quotation record = quotationService.findQuotationById(quotationId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Quotation> delete(@RequestBody Quotation record){
        Quotation deleteRecord = quotationService.deleteQuotation(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }


}
