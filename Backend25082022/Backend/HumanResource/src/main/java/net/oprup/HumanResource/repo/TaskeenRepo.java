package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.Taskeen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TaskeenRepo extends JpaRepository<Taskeen, Long> {
    @Query("select t from Taskeen t where t.deleteFlag =1")
    List<Taskeen> findTaskeenByDeleteFlag();

    Optional<Taskeen> findTaskeenByHabitationId(Long projectId);
}
