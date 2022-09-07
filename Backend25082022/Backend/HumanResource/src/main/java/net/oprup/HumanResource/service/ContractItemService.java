package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Contract;
import net.oprup.HumanResource.model.ContractItem;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SalesInvoiceItem;
import net.oprup.HumanResource.repo.ContractItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ContractItemService {
    private final ContractItemRepo Repo;
    @Autowired
    public ContractItemService(ContractItemRepo repo) {
        Repo = repo;
    }
    public ContractItem addContractItem(ContractItem contractItem){
        contractItem.setDeleteFlag(1);
        return Repo.save(contractItem);
    }

    public List<ContractItem> findAllContractItem(){

        return  Repo.deleteContractItemByDeleteFlag();
    }

    public ContractItem updateContractItem(ContractItem contractItem){
        contractItem.setDeleteFlag(1);
        return Repo.save(contractItem);
    }

    public List<ContractItem> findContractItemByContract(Contract contract) {
        return Repo.findContractItemByContract(contract);

    }

    public ContractItem deleteContractItem(ContractItem contractItem){
        contractItem.setDeleteFlag(0);
        return Repo.save(contractItem);
    }


    //contractExtension
    public List<ContractItem> findAllContractExtension(){

        return  Repo.getContractItemByContractExtension();
    }
    public List<ContractItem> findContractExtensionById(Long contractId){
        return  Repo.findContractExtensionByContractId(contractId)
                .orElseThrow(() -> new UserNotFoundException("contract by id: " + contractId + " not found"));
    }

}
