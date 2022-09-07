package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E13_EmployeeSalaryObject;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.repo.HR02_E13_EmployeeSalaryObjectRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E13_EmployeeSalaryObjectService {

    private final HR02_E13_EmployeeSalaryObjectRepo HR02E13EmployeeSalaryObjectRepo;

    public HR02_E13_EmployeeSalaryObjectService(HR02_E13_EmployeeSalaryObjectRepo HR02E13EmployeeSalaryObjectRepo) {
        this.HR02E13EmployeeSalaryObjectRepo = HR02E13EmployeeSalaryObjectRepo;
    }

    public List<HR02_E13_EmployeeSalaryObject> findAllEmployeeSalaryObjects(){
        return  HR02E13EmployeeSalaryObjectRepo.findEmployeeSalaryObjectsByDeleteFlag();
    }

    public HR02_E13_EmployeeSalaryObject findEmployeeSalaryObjectById(Long employeeSalaryObjectId){
        return HR02E13EmployeeSalaryObjectRepo.findEmployeeSalaryObjectByEmployeeSalaryObjectId(employeeSalaryObjectId)
                .orElseThrow(() -> new UserNotFoundException("Employee Salary Object by id: " + employeeSalaryObjectId + " not found"));
    }

    public List<HR02_E13_EmployeeSalaryObject> getEmployeeSalaryObjectsOfEmployee(HR02_E01_Employee emp) {
        return HR02E13EmployeeSalaryObjectRepo.findEmployeeSalaryObjectsByEmployee(emp);
    }

    public List<HR02_E13_EmployeeSalaryObject> getEmployeeSalaryObjectsOfEmployeeAndType(HR02_E01_Employee emp, String type) {
        return HR02E13EmployeeSalaryObjectRepo.findEmployeeSalaryObjectsByEmployeeAndType(emp, type);
    }

    public HR02_E13_EmployeeSalaryObject addEmployeeSalaryObject(HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject){
        HR02E13EmployeeSalaryObject.setDeleteFlag(1);
        return HR02E13EmployeeSalaryObjectRepo.save(HR02E13EmployeeSalaryObject);
    }

    public HR02_E13_EmployeeSalaryObject updateEmployeeSalaryObject(HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject){
        HR02E13EmployeeSalaryObject.setDeleteFlag(1);
        return HR02E13EmployeeSalaryObjectRepo.save(HR02E13EmployeeSalaryObject);
    }

    public HR02_E13_EmployeeSalaryObject deleteEmployeeSalaryObject(HR02_E13_EmployeeSalaryObject HR02E13EmployeeSalaryObject){
        HR02E13EmployeeSalaryObject.setDeleteFlag(0);
        return HR02E13EmployeeSalaryObjectRepo.save(HR02E13EmployeeSalaryObject);
    }



}

