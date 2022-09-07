package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.Hokome;
import net.oprup.HumanResource.repo.HokomeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HokomeService {
    private final HokomeRepo repo;
    @Autowired
    public HokomeService(HokomeRepo repo) {
        this.repo = repo;
    }
    public List<Hokome> findAll(){
        return  repo.findByDeleteFlag();
    }

    public Hokome findById(Long hokomeId){
        return repo.findHokomeByhokomeId(hokomeId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + hokomeId + " not found"));
    }
    public Hokome add(Hokome record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public Hokome update(Hokome record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public Hokome delete(Hokome record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }
    public List<Hokome> getHokomeOfEmployee(HR02_E01_Employee employee) {
        return repo.findHokomeByEmployee(employee);

    }

    public List<Hokome>getNotification(){
        return repo.getNotification();
    }
    public void deleteHealth(Long healthId){

        this.repo.deleteById(healthId);
    }

    //new

    public long countOfInsurance(){return repo.countByInsurancesCode();}
    public long countMedicalResult(){return repo.countByMedicalExaminationCode();}
    public long countOfResidenceByInsuranceAndMedicalResult(){return repo.countResidenceByInsurancesCodeAndMedicalExaminationCode();}


    public List<Hokome> findAllByMedicalExaminationCode(){
        return  repo.getAllByMedicalExaminationCode();
    }
    public List<Hokome> findAllByInsurancesCode(){
        return  repo.getAllByInsurancesCode();
    }
    public List<Hokome> findAllByNotHaveResidenceYet(){
        return  repo.getAllByNotHaveResidenceYet();
    }
}


