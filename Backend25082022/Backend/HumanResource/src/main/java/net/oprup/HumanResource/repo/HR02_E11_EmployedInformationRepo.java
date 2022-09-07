package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface HR02_E11_EmployedInformationRepo extends JpaRepository<HR02_E11_EmployedInformation, Long> {
    Optional<HR02_E11_EmployedInformation> findById(Long employeeImageProfileId);

    @Query("select e from HR02_E11_EmployedInformation e where e.deleteFlag =1")
    List<HR02_E11_EmployedInformation> findByDeleteFlag();
    List<HR02_E11_EmployedInformation> findEmployedByEmployee(HR02_E01_Employee employee);
    //@Query(value = "SELECT employee_code from t13_employee_employed_information Where company_id = :company_id ORDER BY employee_code DESC",nativeQuery = true)
    //List<HR02_E11_EmployedInformation> findEmployeeCode(@Param("company_id")Long company_id );
    
    List<HR02_E11_EmployedInformation> findEmployeeCodeByCompany(A02_InternalCompany company);

}

