package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.EmployeeProject;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR04_Section;
import net.oprup.HumanResource.model.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmployeeProjectRepo extends JpaRepository<EmployeeProject, Long> {


    @Query(value ="select * from Employee_Project  where employee_project_id = :employee_project_id",nativeQuery = true)
    Optional<EmployeeProject> findEmployeeProjectById(@Param("employee_project_id") Long employee_project_id );


    @Query("select ep from EmployeeProject ep where ep.deleteFlag =1")
    List<EmployeeProject> findEmployeeProjectByDeleteFlag();

    @Query(value = "SELECT * FROM employee_project AS u WHERE u.employee_id=:employee_id AND u.delete_flag=1",nativeQuery = true)
    List<EmployeeProject> findEmp(@Param("employee_id") HR02_E01_Employee emp);

}
