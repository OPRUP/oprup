package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Contract;
import net.oprup.HumanResource.model.ContractItem;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ContractItemRepo  extends JpaRepository<ContractItem, Long> {
    @Query("select p from ContractItem p where p.deleteFlag =1")
    List<ContractItem> deleteContractItemByDeleteFlag();

    @Query("select p from ContractItem p where p.contractExtension =1")
    List<ContractItem> getContractItemByContractExtension();

    List<ContractItem> findContractItemByContract(Contract contract);

    @Query(value = "select * from contract_item  e  INNER JOIN contract i ON e.contract_id = i.contract_id where i.delete_flag = 1 and e.contract_extension=1",nativeQuery = true)
    Optional<List<ContractItem>> findContractExtensionByContractId(Long contractId);
}
