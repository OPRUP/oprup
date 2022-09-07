package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E07_Experience;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.service.HR02_E08_BankService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetailsBank")
@CrossOrigin(origins = "*")
public class HR02_E08_BankController {
    private final HR02_E08_BankService service;
    public HR02_E08_BankController(HR02_E08_BankService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR02_E08_Bank>> getAll(){
        List<HR02_E08_Bank> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{bankId}")
    public ResponseEntity<HR02_E08_Bank> getById(@PathVariable("bankId") Long bankId){
        HR02_E08_Bank record = service.findById(bankId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<HR02_E08_Bank> add(@RequestBody HR02_E08_Bank record){
        HR02_E08_Bank newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E08_Bank> update(@RequestBody HR02_E08_Bank record){
        HR02_E08_Bank updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E08_Bank> delete(@RequestBody HR02_E08_Bank record){
        HR02_E08_Bank deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
    @GetMapping("/employee-bank/{employeeId}")
    public ResponseEntity<?> getBankOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E08_Bank> employeeBank = service.getBankOfEmployee(emp);
        return new ResponseEntity<>(employeeBank, HttpStatus.OK);
    }
    @DeleteMapping("/{empBankId}")
    public void deleteBank(@PathVariable("empBankId") Long empBankId){
        this.service.deleteBank(empBankId);

    }

    //new

    @GetMapping("/CreditCardNotification")
    public ResponseEntity<List<HR02_E08_Bank>> getCreditCardExpireInThreeMonth(){
        List<HR02_E08_Bank> records = service.getNotificationCreditCardExpiry();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

    @GetMapping("/CreditCardCount")

    public int getAllCreditCardCount(){
        int records = (int) service.countOfCreditCard();
        return records;
    }

    @GetMapping("/CreditCardsHaveNotYetBeenIssued")
    public ResponseEntity<List<HR02_E08_Bank>> getAllCreditCardsHaveNotYetBeenIssued(){
        List<HR02_E08_Bank> records = service.findCreditCardsHaveNotYetBeenIssued();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
}


