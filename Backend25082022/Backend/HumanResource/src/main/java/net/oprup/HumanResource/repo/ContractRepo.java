package net.oprup.HumanResource.repo;
import net.oprup.HumanResource.model.Contract;
import net.oprup.HumanResource.model.ContractItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ContractRepo extends JpaRepository<Contract, Long> {

    @Query("select p from Contract p where p.deleteFlag =1")
    List<Contract> findContractByDeleteFlag();

    Optional<Contract> findContractBycontractId(Long contractId);

    @Query("select count(e) from Contract e where e.deleteFlag = 1")
    long countByContract();


    @Query(value = "select * from contract e  INNER JOIN contract_item i ON e.contract_id = i.contract_id where e.delete_flag = 1 and i.contract_extension=1",nativeQuery = true)
    List<Contract> findAllByContractByContractExtension();

    List<Contract> findContractByCustomer(Long customerId);


    @Query(value = "select * from contract e  INNER JOIN contract_item i ON e.contract_id = i.contract_id where e.delete_flag = 1 and i.contract_extension=1",nativeQuery = true)
    Optional<Contract> findContractExtensionByContractId(Long contractId);
}
