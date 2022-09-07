package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.A01_Department;
import net.oprup.HumanResource.model.ContractDetail;
import net.oprup.HumanResource.model.CostCenter;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CostCenterRepo extends JpaRepository<CostCenter, Long> {



    @Query("select e from CostCenter e where e.deleteFlag =1")
    List<CostCenter> findCostCenterByDeleteFlag();

    Optional<CostCenter> findCostCenterByCostCenterId(Long costCenterId);

    @Query("select count(e) from CostCenter e where e.deleteFlag =1 ")
    long countCostCenterId();
}
