package net.oprup.HumanResource.repo;


import net.oprup.HumanResource.model.HR02_E13_EmployeeSalaryObject;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E13_EmployeeSalaryObjectRepo extends JpaRepository<HR02_E13_EmployeeSalaryObject, Long> {

    Optional<HR02_E13_EmployeeSalaryObject> findEmployeeSalaryObjectByEmployeeSalaryObjectId(Long employeeSalaryObjectId);

    @Query("select s from HR02_E13_EmployeeSalaryObject s where s.deleteFlag =1")
    List<HR02_E13_EmployeeSalaryObject> findEmployeeSalaryObjectsByDeleteFlag();

    List<HR02_E13_EmployeeSalaryObject> findEmployeeSalaryObjectsByEmployee(HR02_E01_Employee emp);


    List<HR02_E13_EmployeeSalaryObject> findEmployeeSalaryObjectsByEmployeeAndType(HR02_E01_Employee emp, String type);
}

