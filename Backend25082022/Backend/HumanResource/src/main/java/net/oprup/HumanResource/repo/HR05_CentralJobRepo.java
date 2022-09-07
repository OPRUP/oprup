package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR05_CentralJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR05_CentralJobRepo extends JpaRepository<HR05_CentralJob, Long> {

    Optional<HR05_CentralJob> findCentralJobByCentralId(Long centralId);

    @Query("select c from HR05_CentralJob c where c.deleteFlag =1")
    List<HR05_CentralJob> findCentralJobsByDeleteFlag();
}
