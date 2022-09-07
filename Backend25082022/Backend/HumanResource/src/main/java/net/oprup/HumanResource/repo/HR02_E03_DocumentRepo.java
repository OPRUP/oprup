package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E03_Document;
import net.oprup.HumanResource.model.HR02_E05_Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E03_DocumentRepo extends JpaRepository<HR02_E03_Document, Long> {
    Optional<HR02_E03_Document> findById(Long employeeImageProfileId);

    @Query("select e from HR02_E03_Document e where e.deleteFlag =1")
    List<HR02_E03_Document> findByDeleteFlag();

    List<HR02_E03_Document> findDocumentsByEmployee(HR02_E01_Employee employee);

}
