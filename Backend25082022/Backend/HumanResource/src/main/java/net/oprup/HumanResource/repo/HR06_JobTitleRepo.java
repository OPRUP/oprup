package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR06_JobTitle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR06_JobTitleRepo extends JpaRepository<HR06_JobTitle, Long> {
    Optional<HR06_JobTitle> findJobTitleByJobId(Long jobId);

    @Query("select j from HR06_JobTitle j where j.deleteFlag =1")
    List<HR06_JobTitle> findJobTitlesByDeleteFlag();
}
