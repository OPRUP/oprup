package net.oprup.HumanResource.repo;


import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProjectRepo extends JpaRepository<Project, Long> {

    @Query("select p from Project p where p.deleteFlag =1")
    List<Project> findProjectByDeleteFlag();

    Optional<Project> findProjectByProjectId(Long projectId);

//new
@Query("select count(e) from Project e where e.deleteFlag = 1")
long countByProjects();

//    List<Project> findProjectsByUsers(User users);

    @Query(value ="select * from project p inner join employee_project emp on p.employee_id=emp.employee_id inner join t03_employee e on emp.employee_id=e.employee_id ",nativeQuery = true)
    List<Project> getProjectsAndEmployeeProject();





}
