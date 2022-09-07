package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.A01_Department;
import net.oprup.HumanResource.repo.A01_DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class A01_DepartmentService {

    private final A01_DepartmentRepo departmentRepo;


    @Autowired
    public A01_DepartmentService(A01_DepartmentRepo departmentRepo) {
        this.departmentRepo = departmentRepo;
    }

    public A01_Department addDepartment(A01_Department department){
        department.setDeleteFlag(1);
        return departmentRepo.save(department);
    }

    public List<A01_Department> findAllDepartments(){
        return  departmentRepo.findDepartmentsByDeleteFlag();
    }

    public A01_Department updateDepartment(A01_Department department){
        department.setDeleteFlag(1);
        return departmentRepo.save(department);
    }

    public A01_Department findDepartmentById(Long departmentId){
        return departmentRepo.findDepartmentByDepartmentId(departmentId)
                .orElseThrow(() -> new UserNotFoundException("Department by id: " + departmentId + " not found"));
    }

    public A01_Department deleteDepartment(A01_Department department){
        department.setDeleteFlag(0);
        return departmentRepo.save(department);
    }


}
