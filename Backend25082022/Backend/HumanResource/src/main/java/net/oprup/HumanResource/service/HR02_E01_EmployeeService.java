package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.repo.HR02_E01_EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E01_EmployeeService {

    private final HR02_E01_EmployeeRepo employeeRepo;


    @Autowired
    public HR02_E01_EmployeeService(HR02_E01_EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public List<HR02_E01_Employee> findAllEmployees(){
        return  employeeRepo.findEmployeesByDeleteFlag();
    }
    public List<?> findResAndcode(){
        return  employeeRepo.getEmployeeResAndCode();
    }

    public HR02_E01_Employee findEmployeeById(Long employeeId){
        return employeeRepo.findById(employeeId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + employeeId + " not found"));
    }

    public HR02_E01_Employee addEmployee(HR02_E01_Employee employee){
        employee.setDeleteFlag(1);
        return employeeRepo.save(employee);
    }

    public HR02_E01_Employee updateEmployee(HR02_E01_Employee employee){
        employee.setDeleteFlag(1);
        return employeeRepo.save(employee);
    }

    public HR02_E01_Employee deleteEmployee(HR02_E01_Employee employee){
        employee.setDeleteFlag(0);
        return employeeRepo.save(employee);
    }

//    public List<HR02_E01_Employee>getNotification(){
//        return employeeRepo.getNotification();
//    }

    //new
    public List<HR02_E01_Employee> findExitEmployee(){
        return employeeRepo.findExitEmployeesByDeleteFlag();

    }


    public List<HR02_E01_Employee>getNotificationResidenceInWeek(){
        return employeeRepo.getResNotificationDuringWeek();
    }

    public List<HR02_E01_Employee>getNotificationResidenceInTwoWeek(){
        return employeeRepo.getResNotificationDuringTwoWeeks();
    }
    public List<HR02_E01_Employee>getNotificationResidenceInThreeWeek(){
        return employeeRepo.getResNotificationDuringThreeWeeks();
    }
    public List<HR02_E01_Employee>getNotificationResidenceInFourWeek(){
        return employeeRepo.getResNotificationDuringFourWeeks();
    }

    public List<HR02_E01_Employee>getNotificationPassPortInFirstMonth(){
        return employeeRepo.getExpiryPassPortInMonth();
    }
    public List<HR02_E01_Employee>getNotificationPassPortInTwoMonth(){
        return employeeRepo.getExpiryPassPortInTwoMonth();
    }
    public List<HR02_E01_Employee>getNotificationPassPortInThreeMonth(){
        return employeeRepo.getExpiryPassPortInThreeMonth();
    }
    public List<HR02_E01_Employee>getNotificationPassPortInFourMonth(){
        return employeeRepo.getExpiryPassPortInFourMonth();
    }

    public long countOfEmployee(){return employeeRepo.countByEmployee();}
    public long countOfExitEmployee(){return employeeRepo.countByExitEmployee();}

    public List<HR02_E01_Employee> findExistEmployee(){
        return employeeRepo.getExistEmployeeByDeleteFlag();

    }
}
