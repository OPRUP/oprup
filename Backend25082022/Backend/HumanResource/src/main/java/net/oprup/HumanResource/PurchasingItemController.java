package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Purchasing;
import net.oprup.HumanResource.model.PurchasingItem;
import net.oprup.HumanResource.service.PurchasingItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/purchasingItem")
@CrossOrigin(origins = "*")
public class PurchasingItemController {
    private final PurchasingItemService purchasingItemService;

    public PurchasingItemController(PurchasingItemService purchasingItemService) {
        this.purchasingItemService = purchasingItemService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<PurchasingItem>> getAllPurchasingItem() {
        List<PurchasingItem> purchasingItems = purchasingItemService.findAllPurchasingItem();
        return new ResponseEntity<>(purchasingItems, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PurchasingItem> addPurchasingItem(@RequestBody PurchasingItem purchasingItem) {
        PurchasingItem record  = purchasingItemService.addPurchasingItem(purchasingItem);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    //new

    @GetMapping("/find/{purchasingItemId}")
    public ResponseEntity<PurchasingItem> getById(@PathVariable("purchasingItemId") Long purchasingItemId){
        PurchasingItem record = purchasingItemService.findPurchasingItemById(purchasingItemId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<PurchasingItem> update(@RequestBody PurchasingItem record){
        PurchasingItem updateRecord = purchasingItemService.updatePurchasingItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<PurchasingItem> delete(@RequestBody PurchasingItem record){
        PurchasingItem deleteRecord = purchasingItemService.deletePurchasingItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/itemByPurcxhasing/{purchasingInvoiceId}")
    public ResponseEntity<?> getPurchasingItemByPurchasing(@PathVariable("purchasingInvoiceId") Long purchasingInvoiceId){
        Purchasing emp =  new Purchasing();
        emp.setPurchasingInvoiceId(purchasingInvoiceId);
        List<PurchasingItem> purchasingItems = purchasingItemService.findPurchasingItemsByPurchasing(emp);
        return new ResponseEntity<>(purchasingItems, HttpStatus.OK);
    }

}
