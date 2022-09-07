package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SlipRepo extends JpaRepository<Slip, Long> {





//   List<ContractDetail> findContractDetailsByContract(HR02_E09_Contract contract);
    List<Slip> findSlipsByContract(HR02_E09_Contract contract);

//    List<Slip> findSlipBySlipId(Long slipId);

}


