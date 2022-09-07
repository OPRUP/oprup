package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Purchasing;
import net.oprup.HumanResource.model.Taskeen;
import net.oprup.HumanResource.service.PurchasingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/purchasing")
@CrossOrigin(origins = "*")
public class PurchasingController {
    private final PurchasingService purchasingService;

    public PurchasingController(PurchasingService purchasingService) {
        this.purchasingService = purchasingService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Purchasing>> getAllPurchasing(){
        List<Purchasing> purchasings = purchasingService.findAllPurchasing();
        return new ResponseEntity<>(purchasings, HttpStatus.OK);
    }
    @GetMapping("/count")
    public  long count(){
        long records = purchasingService.countId();
        return (records);
    }
    @GetMapping("/find/{purchasingInvoiceId}")
    public ResponseEntity<Purchasing> getPurchasingById(@PathVariable("purchasingInvoiceId") Long purchasingInvoiceId){
        Purchasing purchasing = purchasingService.findPurchasingById(purchasingInvoiceId);
        return new ResponseEntity<>(purchasing, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Purchasing> addPurchasing(@RequestBody Purchasing purchasing){
        Purchasing newPurchasing = purchasingService.addPurchasing(purchasing);
        return new ResponseEntity<>(newPurchasing, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Purchasing> updatePurchasing(@RequestBody Purchasing purchasing){
        Purchasing updatePurchasing = purchasingService.updatePurchasing(purchasing);
        return new ResponseEntity<>(updatePurchasing, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Purchasing> deletePurchasing(@RequestBody Purchasing purchasing){
        Purchasing deletePurchasing = purchasingService.deletePurchasing(purchasing);
        return new ResponseEntity<>(deletePurchasing, HttpStatus.OK);
    }
}
