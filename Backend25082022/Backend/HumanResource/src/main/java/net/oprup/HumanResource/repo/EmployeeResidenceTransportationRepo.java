package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.EmployeeResidenceTransportation;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeeResidenceTransportationRepo extends JpaRepository<EmployeeResidenceTransportation, Long> {


    Optional<EmployeeResidenceTransportation> findById(Long employeeResTransId);

    @Query("select e from EmployeeResidenceTransportation e where e.deleteFlag =1")
    List<EmployeeResidenceTransportation> findByDeleteFlag();
    List<EmployeeResidenceTransportation> findEmployeeResidenceTransportationByEmployee(HR02_E01_Employee employee);
}
