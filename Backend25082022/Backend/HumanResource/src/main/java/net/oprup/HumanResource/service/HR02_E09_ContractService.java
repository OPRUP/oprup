package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E09_Contract;
import net.oprup.HumanResource.repo.HR02_E09_ContractRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E09_ContractService {
    private final HR02_E09_ContractRepo repo;
    @Autowired
    public HR02_E09_ContractService(HR02_E09_ContractRepo repo) {
        this.repo = repo;
    }

    public List<HR02_E09_Contract> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E09_Contract findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }
    public List<HR02_E09_Contract> getContractsOfEmployee(HR02_E01_Employee employee) {
        return repo.findContractsByEmployee(employee);

    }
    public HR02_E09_Contract add(HR02_E09_Contract record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E09_Contract update(HR02_E09_Contract record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E09_Contract delete(HR02_E09_Contract record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }
    public List<HR02_E09_Contract>getNotification(){
        return repo.getNotification();
    }
//new


    public long countOfContracts(){return repo.countByContract();}
    public long countOfQiwa(){return repo.countByQiwaCode();}

    public List<HR02_E09_Contract>getAllQiwaEmployee(){
        return repo.getEmployeeByQiwaCode();
    }
}


