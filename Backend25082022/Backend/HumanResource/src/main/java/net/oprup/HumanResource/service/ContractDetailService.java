package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.ContractDetailRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ContractDetailService {

    private final ContractDetailRepo repo;
    @Autowired
    public ContractDetailService(ContractDetailRepo repo) {
        this.repo = repo;
    }


    public List<ContractDetail> getContractDetailsByContractId(HR02_E09_Contract contract) {
        return repo.findContractDetailsByContract(contract);
    }

    public List<ContractDetail> getContractDetailsByEmployeeId(HR02_E01_Employee employee) {
        return repo.findContractDetailsByEmployee(employee);
    }


    public ContractDetail add(ContractDetail record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }

    public ContractDetail delete(ContractDetail record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }

}
