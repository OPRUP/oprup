package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Item;
import net.oprup.HumanResource.model.TimeSheet;
import net.oprup.HumanResource.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "*")
public class ItemController {
    private final ItemService service;
    public ItemController(ItemService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Item>> getAll(){
        List<Item> records = service.findAllItems();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/find/{itemId}")
    public ResponseEntity<Item> getById(@PathVariable("itemId") Long itemId){
        Item record = service.findItemById(itemId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Item> addVendor(@RequestBody Item record){
        Item newRecord = service.addItem(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Item> update(@RequestBody Item record){
        Item updateRecord = service.updateItem(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Item> delete(@RequestBody Item record){
        Item deleteRecord = service.deleteItem(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/findCode/{item_code}")
    public ResponseEntity<?> getItemCod(@PathVariable String item_code) {
        Item record = service.findItemCode(item_code);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
}