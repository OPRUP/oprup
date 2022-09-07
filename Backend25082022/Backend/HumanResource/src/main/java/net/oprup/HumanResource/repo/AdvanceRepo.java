package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Advance;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.model.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AdvanceRepo extends JpaRepository<Advance,Long> {

    @Query("select a from Advance a where a.approve =1")
    List<Advance> findAdvancesByApprove();

    @Query("select a from Advance a where a.approve =2")
    List<Advance> findApprove();

    @Query("select a from Advance a where a.approve =3")
    List<Advance> findRejrct();



    Optional<Advance> findById(Long advanceId);

    List<Advance> findAdvanceByEmployee(HR02_E01_Employee employee);

    @Query(value ="select * from Advance AS a where a.approve =1 AND a.employee_id=:employee_id",nativeQuery = true)
    List<Advance> findAdvancesByEmployeeApprove(@Param("employee_id") HR02_E01_Employee emp);
}
