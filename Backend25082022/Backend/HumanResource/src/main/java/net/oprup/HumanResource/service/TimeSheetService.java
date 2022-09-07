package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.TimeSheetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class TimeSheetService {
    private final TimeSheetRepo timeSheetRepo;
    @Autowired
    public TimeSheetService(TimeSheetRepo timeSheetRepo) {
        this.timeSheetRepo = timeSheetRepo;
    }
    public TimeSheet addTimeSheet(TimeSheet timeSheet){
        return timeSheetRepo.save(timeSheet);
    }

    public List<TimeSheet> findAllTimeSheets(){
        return timeSheetRepo.findAll();
    }
//    public List<TimeSheet> findTimeSheetByEmployee(Long employeeId){
//       return timeSheetRepo.findTimeSheetByEmployee(employeeId);
//    }
    public List<TimeSheet> getSheetsOfEmployee(HR02_E01_Employee employee) {
        return timeSheetRepo.findSheetByEmployee(employee);

    }
    public TimeSheet updateTimeSheet(TimeSheet timeSheet){
        return timeSheetRepo.save(timeSheet);
    }

//    public List<TimeSheet> findGeneratedSheet(HR02_E01_Employee employee, LocalDate attDate) {
//        return timeSheetRepo.findGeneratedSheet(employee, attDate);
//    }

//    public List<TimeSheet> findTimeSheetOfEmployee(HR02_E01_Employee emp, String attDate) {
//        return timeSheetRepo.findTimeSheetOfEmployee(emp, attDate);
//    }
//    public List<TimeSheet> findTimeSheetOfEmployeeBetween(HR02_E01_Employee emp, String attDate1,String attDate2) {
//        return timeSheetRepo.findTimeSheetOfEmployeeBetween(emp, attDate1, attDate2);
//    }
    public List<TimeSheet> findOfEmployeeBetween(HR02_E01_Employee emp, Integer att_day,Integer att_month,Integer att_year) {
        return timeSheetRepo.findOfEmployeeBetween(emp,  att_day,att_month, att_year);
    }
}
