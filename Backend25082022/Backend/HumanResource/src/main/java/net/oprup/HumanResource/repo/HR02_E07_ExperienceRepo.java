package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E07_Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E07_ExperienceRepo extends JpaRepository<HR02_E07_Experience, Long> {
    Optional<HR02_E07_Experience> findById(Long employeeImageProfileId);

    @Query("select e from HR02_E07_Experience e where e.deleteFlag =1")
    List<HR02_E07_Experience> findByDeleteFlag();

    List<HR02_E07_Experience> findExperiencesByEmployee(HR02_E01_Employee employee);
}
