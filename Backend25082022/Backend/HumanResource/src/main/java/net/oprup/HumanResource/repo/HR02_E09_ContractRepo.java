package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E09_Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E09_ContractRepo extends JpaRepository<HR02_E09_Contract, Long> {
//SELECT * FROM t11_employee_contract WHERE DATEDIFF(date_to,date_from)<=30;
//    @Query("SELECT c FROM HR02_E09_Contract c WHERE DATEDIFF(c.date_to,c.date_from)<60")
//    List<HR02_E09_Contract> getNotification();
@Query(value = "SELECT * FROM t11_employee_contract  WHERE DATEDIFF(date_to,date_from)<60",nativeQuery = true)
List<HR02_E09_Contract> getNotification();

    @Query("select e from HR02_E09_Contract e where e.deleteFlag =1")
    List<HR02_E09_Contract> findByDeleteFlag();

    List<HR02_E09_Contract> findContractsByEmployee(HR02_E01_Employee employee);

    //new
        @Query("select count(e) from HR02_E09_Contract e where e.deleteFlag = 1")
    long countByContract();
    @Query("select count(e) from HR02_E09_Contract e where e.qiwaCode is not null and e.deleteFlag=1")
    long countByQiwaCode();
    @Query("select e from HR02_E09_Contract e where e.qiwaCode is not null and e.deleteFlag=1")
    List<HR02_E09_Contract> getEmployeeByQiwaCode();
}
