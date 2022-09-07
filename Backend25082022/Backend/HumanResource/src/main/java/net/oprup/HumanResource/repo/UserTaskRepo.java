package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserTaskRepo extends JpaRepository<UserTask, Long> {
    List<UserTask> findTaskByEmployee(HR02_E01_Employee employee);

    @Query("select u from UserTask u where u.deleteFlag =1")
    List<UserTask> findUserTaskByDeleteFlag();

    Optional<UserTask> findUserTaskByTaskId(Long taskId);
}
