package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.SalaryObject;
import net.oprup.HumanResource.repo.SalaryObjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SalaryObjectService {

    private final SalaryObjectRepo salaryObjectRepo;


    @Autowired
    public SalaryObjectService(SalaryObjectRepo salaryObjectRepo) {
        this.salaryObjectRepo = salaryObjectRepo;
    }


    public List<SalaryObject> findAllSalaryObjects(){
        return  salaryObjectRepo.findSalaryObjectByDeleteFlag();
    }


    public SalaryObject findSalaryObjectById(Long salaryObjectId){
        return salaryObjectRepo.findSalaryObjectBySalaryObjectId(salaryObjectId)
                .orElseThrow(() -> new UserNotFoundException("Salary Object by id: " + salaryObjectId + " not found"));
    }


    public SalaryObject addSalaryObject(SalaryObject salaryObject){
        salaryObject.setDeleteFlag(1);
        return salaryObjectRepo.save(salaryObject);
    }


    public SalaryObject updateSalaryObject(SalaryObject salaryObject){
        salaryObject.setDeleteFlag(1);
        return salaryObjectRepo.save(salaryObject);
    }


    public SalaryObject deleteSalaryObject(SalaryObject salaryObject){
        salaryObject.setDeleteFlag(0);
        return salaryObjectRepo.save(salaryObject);
    }

}
