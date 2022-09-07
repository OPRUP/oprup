package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.model.HR02_E06_Qualification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E06_QualificationRepo extends JpaRepository<HR02_E06_Qualification, Long> {
    Optional<HR02_E06_Qualification> findById(Long employeeImageProfileId);

    @Query("select e from HR02_E06_Qualification e where e.deleteFlag =1")
    List<HR02_E06_Qualification> findByDeleteFlag();
    List<HR02_E06_Qualification> findQualificationByEmployee(HR02_E01_Employee employee);
}
