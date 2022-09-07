package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Contract;
import net.oprup.HumanResource.repo.ContractRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ContractService {

    private final ContractRepo contractRepo;
    @Autowired
    public ContractService(ContractRepo contractRepo) {
        this.contractRepo = contractRepo;
    }

    public Contract add(Contract contract){
        contract.setDeleteFlag(1);
        return contractRepo.save(contract);
    }
    public List<Contract> findAllContract(){
        return  contractRepo.findContractByDeleteFlag();
    }

    public Contract updateContract(Contract contract){
        contract.setDeleteFlag(1);
        return contractRepo.save(contract);
    }
    public Contract findContractById(Long contractId){
        return (Contract) contractRepo.findContractBycontractId(contractId)
                .orElseThrow(() -> new UserNotFoundException("contract by id: " + contractId + " not found"));
    }
    public Contract deleteContract(Contract contract){
        contract.setDeleteFlag(0);
        return contractRepo.save(contract);
    }


    public long countOfContract(){return contractRepo.countByContract();}

//contract
public List<Contract> findAllContractByContractExtension(){
    return  contractRepo.findAllByContractByContractExtension();
}


    public Contract findContractByCustomerId(Long customerId){
        return (Contract) contractRepo.findContractBycontractId(customerId)
                .orElseThrow(() -> new UserNotFoundException("contract by id: " + customerId + " not found"));
    }
    public Contract findContractExtensionById(Long contractId){
        return (Contract) contractRepo.findContractExtensionByContractId(contractId)
                .orElseThrow(() -> new UserNotFoundException("contract by id: " + contractId + " not found"));
    }
}
