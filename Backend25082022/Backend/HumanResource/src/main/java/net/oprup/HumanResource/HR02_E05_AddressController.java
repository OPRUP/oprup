package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.service.HR02_E05_AddressService;
import org.apache.tomcat.jni.Address;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetailsAddress")
@CrossOrigin(origins = "*")
public class HR02_E05_AddressController {
    private final HR02_E05_AddressService service;
    public HR02_E05_AddressController(HR02_E05_AddressService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR02_E05_Address>> getAll(){
        List<HR02_E05_Address> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{addressId}")
    public ResponseEntity<HR02_E05_Address> getById(@PathVariable("addressId") Long addressId){
        HR02_E05_Address record = service.findById(addressId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }



    @GetMapping("/employee-address/{employeeId}")
    public ResponseEntity<?> getAddressesOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E05_Address> employeeAddress = service.getAddressesOfEmployee(emp);
        return new ResponseEntity<>(employeeAddress, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<HR02_E05_Address> add(@RequestBody HR02_E05_Address record){
        HR02_E05_Address newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E05_Address> update(@RequestBody HR02_E05_Address record){
        HR02_E05_Address updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E05_Address> delete(@RequestBody HR02_E05_Address record){
        HR02_E05_Address deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @DeleteMapping("/{addressId}")
    public void deleteAddress(@PathVariable("addressId") Long addressId){
        this.service.deleteAddress(addressId);

    }

}


