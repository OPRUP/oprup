package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TimeSheetRepo extends JpaRepository<TimeSheet, Long> {


    List<TimeSheet> findSheetByEmployee(HR02_E01_Employee employee);


//     @Query(value = "SELECT * FROM time_sheet AS u WHERE u.employee_id=?1 AND u.att_date=?2",nativeQuery = true)
//    List<TimeSheet> findTimeSheetOfEmployee(HR02_E01_Employee emp, String attDate);

//    @Query(value = "SELECT * FROM time_sheet AS u WHERE u.employee_id=?1 AND u.att_date<=?2 AND u.att_date>=?3",nativeQuery = true)
//    List<TimeSheet> findTimeSheetOfEmployeeBetween(HR02_E01_Employee emp, String attDate1, String attDate2);

//    @Query(value = "SELECT * FROM time_sheet AS u WHERE u.employee_id=?1 AND u.att_day<=?2 AND u.att_day>=?3 AND u.att_month=?4 and u.att.year=?5",nativeQuery = true)
//    List<TimeSheet> findOfEmployeeBetween(HR02_E01_Employee emp, TimeSheet timeSheet);

    @Query(value = "SELECT * FROM time_sheet AS u WHERE u.employee_id=:employee_id AND u.att_day>=:att_day AND u.att_month=:att_month and u.att_year=:att_year ORDER BY u.att_day",nativeQuery = true)
    List<TimeSheet> findOfEmployeeBetween(@Param("employee_id") HR02_E01_Employee emp, @Param("att_day") Integer att_day, @Param("att_month") Integer att_month, @Param("att_year") Integer att_year);



}
