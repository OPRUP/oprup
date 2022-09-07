package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Advance;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.TimeSheet;
import net.oprup.HumanResource.model.Vacation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

public interface VacationRepo extends JpaRepository<Vacation, Long> {

    void deleteVacationByVacationId(Long vacationId);

    Optional<Vacation> findVacationByVacationId(Long vacationId);

    @Query("select v from Vacation v where v.approve = 1")
    List<Vacation> findVacationByApprove();

    @Query("select a from Vacation a where a.approve =2")
    List<Vacation> findApprove();

    @Query("select a from Vacation a where a.approve =3")
    List<Vacation> findRejrct();


//    List<Vacation> findDaysOfVacation(HR02_E01_Employee employee);

//@Query(value = "select v.days_of_vacation from t27_vacation AS v ,t11_employee_contract as c where v.approve=2 AND v.employee_id=:employee_id AND c.delete_flag=1 ",nativeQuery = true)
//List<Vacation> findDaysOfVacation(@Param("employee_id") HR02_E01_Employee emp);


    @Query(value ="select sum(v.days_of_vacation) from t27_vacation AS v  Inner join emdadat1.t11_employee_contract as c on v.employee_id=c.employee_id where v.approve =2 AND v.employee_id=:employee_id AND c.delete_flag=1 ",nativeQuery = true)
    List<Integer> findDaysOfVacation(@Param("employee_id") HR02_E01_Employee emp);

}
