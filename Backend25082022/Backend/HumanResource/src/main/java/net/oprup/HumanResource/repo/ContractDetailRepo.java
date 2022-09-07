package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ContractDetailRepo extends JpaRepository<ContractDetail, Long> {

    @Query("select e from ContractDetail e where e.deleteFlag =1")
    List<ContractDetail> findContractDetailsByContract(HR02_E09_Contract contract);

    List<ContractDetail> findContractDetailsByEmployee(HR02_E01_Employee employee);

    @Query("select e from ContractDetail e where e.deleteFlag =1")
    List<ContractDetail> findContractDetailByDeleteFlag();





}
