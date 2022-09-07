package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.A01_Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface A01_DepartmentRepo extends JpaRepository<A01_Department, Long> {
    Optional<A01_Department> findDepartmentByDepartmentId(Long departmentId);

    @Query("select e from A01_Department e where e.deleteFlag =1")
    //@Query("select d,e from HR03_Department d LEFT JOIN HR02_E01_Employee e on e.employeeId=d.employeeId where d.deleteFlag =1")
    List<A01_Department> findDepartmentsByDeleteFlag();
}
