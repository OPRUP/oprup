package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Customer;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getAll(){
        List<Customer> records = service.findAllCustomer();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/count")
    public  long count(){
        long records = service.countId();
        return (records);
    }

    @GetMapping("/find/{customerId}")
    public ResponseEntity<Customer> getById(@PathVariable("customerId") Long customerId){
        Customer record = service.findCustomerById(customerId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Customer> addVendor(@RequestBody Customer record){
        Customer newRecord = service.addCustomer(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Customer> update(@RequestBody Customer record){
        Customer updateRecord = service.updateCustomer(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<Customer> delete(@RequestBody Customer record){
        Customer deleteRecord = service.deleteCustomer(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @GetMapping("/getQualified")
    public ResponseEntity<List<Customer>>getQualified(){
        List<Customer> records = service.getAllQualifiedCustomers();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/allCustomers")
    public ResponseEntity<List<Customer>> getProjectCustomers(){
        List<Customer> records = service.getProjectCustomers();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

}
