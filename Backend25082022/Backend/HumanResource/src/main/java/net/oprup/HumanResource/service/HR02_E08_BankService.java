package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E07_Experience;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.repo.HR02_E08_BankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E08_BankService {
    private final HR02_E08_BankRepo repo;
    @Autowired
    public HR02_E08_BankService(HR02_E08_BankRepo repo) {
        this.repo = repo;
    }
    public List<HR02_E08_Bank> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E08_Bank findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }
    public HR02_E08_Bank add(HR02_E08_Bank record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E08_Bank update(HR02_E08_Bank record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E08_Bank delete(HR02_E08_Bank record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }
    public List<HR02_E08_Bank> getBankOfEmployee(HR02_E01_Employee employee) {
        return repo.findBankByEmployee(employee);
    }
    public void deleteBank(Long bankId){
        this.repo.deleteById(bankId);
    }

    ///new
    public List<HR02_E08_Bank>getNotificationCreditCardExpiry(){
        return repo.getCreditCardExpiryNotification();
    }
    public long countOfCreditCard(){return repo.countByCreditCard();}
    public List<HR02_E08_Bank> findCreditCardsHaveNotYetBeenIssued(){
        return  repo.CreditCardsHaveNotYetBeenIssued();
    }
}


