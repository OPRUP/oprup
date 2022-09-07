package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E01_EmployeeRepo extends JpaRepository<HR02_E01_Employee, Long> {
    Optional<HR02_E01_Employee> findById(Long employeeImageProfileId);

    @Query("select e from HR02_E01_Employee e where e.deleteFlag =1")
    List<HR02_E01_Employee> findEmployeesByDeleteFlag();

//    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(residence_expiry,CURDATE())<60",nativeQuery = true)
//    List<HR02_E01_Employee> getNotification();

    //new
    @Query("select e from HR02_E01_Employee e where e.deleteFlag =0")
    List<HR02_E01_Employee> findExitEmployeesByDeleteFlag();


    @Query("select count(e) from HR02_E01_Employee e where e.deleteFlag = 1")
    long countByEmployee();

    @Query("select count(e) from HR02_E01_Employee e where e.deleteFlag = 0")
    long countByExitEmployee();

    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(residence_expiry,CURDATE())<7 ",nativeQuery = true)
    List<HR02_E01_Employee> getResNotificationDuringWeek();

    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(residence_expiry,CURDATE())<14 and DATEDIFF(residence_expiry,CURDATE())>7",nativeQuery = true)
    List<HR02_E01_Employee> getResNotificationDuringTwoWeeks();

    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(residence_expiry,CURDATE())<21 and DATEDIFF(residence_expiry,CURDATE())>14",nativeQuery = true)
    List<HR02_E01_Employee> getResNotificationDuringThreeWeeks();

    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(residence_expiry,CURDATE())<28 and DATEDIFF(residence_expiry,CURDATE())>21",nativeQuery = true)
    List<HR02_E01_Employee> getResNotificationDuringFourWeeks();

    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(passport_expiry,CURDATE())<=30",nativeQuery = true)
    List<HR02_E01_Employee> getExpiryPassPortInMonth();
    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(passport_expiry,CURDATE())<=60 and DATEDIFF(passport_expiry,CURDATE())>30",nativeQuery = true)
    List<HR02_E01_Employee> getExpiryPassPortInTwoMonth();
    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(passport_expiry,CURDATE())<=90 and DATEDIFF(passport_expiry,CURDATE())>60",nativeQuery = true)
    List<HR02_E01_Employee> getExpiryPassPortInThreeMonth();
    @Query(value = "SELECT * FROM t03_employee  WHERE DATEDIFF(passport_expiry,CURDATE())<=120 and DATEDIFF(passport_expiry,CURDATE())>90",nativeQuery = true)
    List<HR02_E01_Employee> getExpiryPassPortInFourMonth();

    @Query(value=" SELECT * FROM t03_employee WHERE employee_id NOT IN (SELECT employee_id FROM travelingemployee) and delete_flag=1",nativeQuery = true)
    List<HR02_E01_Employee> getExistEmployeeByDeleteFlag();

    @Query(value = "select * from (select t03_employee.* , hokome.residence_number ,t13_employee_employed_information.employee_code  from t03_employee inner join hokome on t03_employee.employee_id =hokome.employee_id inner join t13_employee_employed_information on t13_employee_employed_information.employee_id = hokome.employee_id Group by hokome.residence_number ,t13_employee_employed_information.employee_code) as t1",nativeQuery = true)
    List<?>getEmployeeResAndCode();
}
