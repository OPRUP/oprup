package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.EmployeeProjectRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EmployeeProjectService {

    private final EmployeeProjectRepo repo;

    public EmployeeProjectService(EmployeeProjectRepo repo) {
        this.repo = repo;
    }

    public List<EmployeeProject> findAllProjectEmployee(){
        return  repo.findEmployeeProjectByDeleteFlag();
    }


    public EmployeeProject addEmployeeProject(EmployeeProject employeeProject){
        employeeProject.setDeleteFlag(1);
        return repo.save(employeeProject);
    }


    public EmployeeProject updateEmployeeProject(EmployeeProject employeeProject){
        employeeProject.setDeleteFlag(1);
        return repo.save(employeeProject);
    }

    public EmployeeProject deleteEmployeeProject(EmployeeProject employeeProject){
        employeeProject.setDeleteFlag(0);
        return repo.save(employeeProject);
    }

    public EmployeeProject findEmployeeProjectById(Long employeeProjectId){
        return repo.findEmployeeProjectById(employeeProjectId)
                .orElseThrow(() -> new UserNotFoundException("EmployeeProject by id: " + employeeProjectId + " not found"));
    }

    public List<EmployeeProject> findEmp(HR02_E01_Employee emp) {
        return repo.findEmp(emp);
    }

}
