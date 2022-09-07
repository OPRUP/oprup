package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.EmployeeResidenceTransportation;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.repo.EmployeeResidenceTransportationRepo;
import net.oprup.HumanResource.repo.HR02_E08_BankRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EmployeeResidenceTransportationService {
    private final EmployeeResidenceTransportationRepo repo;
    @Autowired
    public EmployeeResidenceTransportationService(EmployeeResidenceTransportationRepo repo) {
        this.repo = repo;
    }
    public List<EmployeeResidenceTransportation> findAll(){
        return  repo.findByDeleteFlag();
    }
    public EmployeeResidenceTransportation findById(Long employeeResTransId){
        return repo.findById(employeeResTransId)
                .orElseThrow(() -> new UserNotFoundException("Info by id: " + employeeResTransId + " not found"));
    }
    public EmployeeResidenceTransportation add(EmployeeResidenceTransportation record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public EmployeeResidenceTransportation update(EmployeeResidenceTransportation record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public EmployeeResidenceTransportation delete(EmployeeResidenceTransportation record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }
    public List<EmployeeResidenceTransportation> getResTransOfEmployee(HR02_E01_Employee employee) {
        return repo.findEmployeeResidenceTransportationByEmployee(employee);
    }
    public void deleteResTrans(Long bankId){
        this.repo.deleteById(bankId);
    }
}
