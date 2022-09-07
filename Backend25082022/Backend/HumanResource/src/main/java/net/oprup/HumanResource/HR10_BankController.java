package net.oprup.HumanResource;

import java.util.List;

import net.oprup.HumanResource.model.HR10_Bank;
import net.oprup.HumanResource.service.HR10_BankService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bank")
@CrossOrigin(origins = "*")
public class HR10_BankController {
	
	private final HR10_BankService bankService;
	
	public HR10_BankController(HR10_BankService bankService) {
		this.bankService = bankService;
	}

    @GetMapping("/all")
    public ResponseEntity<List<HR10_Bank>> getAllBanks(){
        List<HR10_Bank> banks = bankService.findAllBanks();
        return new ResponseEntity<>(banks, HttpStatus.OK);
    }

    @GetMapping("/find/{bankId}")
    public ResponseEntity<HR10_Bank> getBankById(@PathVariable("bankId") Long bankId){
        HR10_Bank bank = bankService.findBankById(bankId);
        return new ResponseEntity<>(bank, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR10_Bank> addBank(@RequestBody HR10_Bank bank){
    	HR10_Bank newBank = bankService.addBank(bank);
        return new ResponseEntity<>(newBank, HttpStatus.CREATED);
    }
    
    @PutMapping("/update")
    public ResponseEntity<HR10_Bank> updateBank(@RequestBody HR10_Bank bank){
        HR10_Bank updateBank = bankService.updateBank(bank);
        return new ResponseEntity<>(updateBank, HttpStatus.OK);
    }
    
    @PutMapping("/delete")
    public ResponseEntity<HR10_Bank> deleteBank(@RequestBody HR10_Bank bank){
        HR10_Bank deleteBank = bankService.deleteBank(bank);
        return new ResponseEntity<>(deleteBank, HttpStatus.OK);
    }
    
    
}