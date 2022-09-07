package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR06_JobTitle;
import net.oprup.HumanResource.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface JobRepo extends JpaRepository<Job, Long> {

    Optional<Job> findJobByJobId(Long jobId);

    @Query("select j from Job j where j.deleteFlag =1")
    List<Job> findJobByDeleteFlag();

}
