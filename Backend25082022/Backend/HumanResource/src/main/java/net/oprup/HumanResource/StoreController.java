package net.oprup.HumanResource;


import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.model.Store;
import net.oprup.HumanResource.service.StoreService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/store")
@CrossOrigin(origins = "*")


public class StoreController {
    private final StoreService storeService;


    public StoreController(StoreService storeService) {
        this.storeService = storeService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Store>> getAllStores(){
        List<Store> store = storeService.findAllStores();
        return new ResponseEntity<>(store, HttpStatus.OK);
    }



    @GetMapping("/find/{storeId}")
    public ResponseEntity<Store> getStoreById(@PathVariable("storeId") Long storeId){
        Store store = storeService.findStoreById(storeId);
        return new ResponseEntity<>(store, HttpStatus.OK);
    }
    //////////////

    @PostMapping("/add")
    public ResponseEntity<Store> addStore(@RequestBody Store store){
        Store newStore = storeService.addStore(store);
        return new ResponseEntity<>(newStore, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Store> updateStore(@RequestBody Store store){
        Store updateStore = storeService.updateStore(store);
        return new ResponseEntity<>(updateStore, HttpStatus.OK);
    }

//    @PutMapping("/delete")
//    public ResponseEntity<Store> deleteStore(@RequestBody Store store){
//        Store deleteStore = storeService.deleteStore(store);
//        return new ResponseEntity<>(deleteStore, HttpStatus.OK);
//    }


//    @DeleteMapping("/delete/{storeId}")
//    public ResponseEntity<?> deleteStore(@PathVariable("storeId") Long storeId){
//        storeService.deleteStoreByStoreId(storeId);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @PutMapping("/delete")
    public ResponseEntity<Store> delete(@RequestBody Store store){
        Store deletestore = storeService.delete(store);
        return new ResponseEntity<>(deletestore, HttpStatus.OK);
    }

    @DeleteMapping("/{storeId}")
    public void deleteStore(@PathVariable("addressId") Long storeId){
        this.storeService.deleteStore(storeId);

    }

}
