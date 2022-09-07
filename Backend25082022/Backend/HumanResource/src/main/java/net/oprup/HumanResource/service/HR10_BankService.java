package net.oprup.HumanResource.service;

import java.util.List;

import javax.transaction.Transactional;

import net.oprup.HumanResource.model.HR10_Bank;
import net.oprup.HumanResource.repo.HR10_BankRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.oprup.HumanResource.exception.UserNotFoundException;


@Service
@Transactional
public class HR10_BankService {

	private final HR10_BankRepo bankRepo;


	@Autowired
	public HR10_BankService(HR10_BankRepo bankRepo) {
		this.bankRepo = bankRepo;
	}
	
	public HR10_Bank addBank(HR10_Bank bank){
		bank.setDeleteFlag(1);
        return bankRepo.save(bank);
	}
    
    public List<HR10_Bank> findAllBanks(){
		return  bankRepo.findBanksByDeleteFlag();
    }
    
    public HR10_Bank updateBank(HR10_Bank bank){
        bank.setDeleteFlag(1);
        return bankRepo.save(bank);
    }
    
    public HR10_Bank findBankById(Long bankId){
        return bankRepo.findBankByBankId(bankId)
                .orElseThrow(() -> new UserNotFoundException("Bank by id: " + bankId + " not found"));
    }

    public HR10_Bank deleteBank(HR10_Bank bank){
    	bank.setDeleteFlag(0);
       // bank.setBankName(bank.getBankName());

        return bankRepo.save(bank);
    }


}