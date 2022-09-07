package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.VacationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VacationService {
    private final VacationRepo vacationRepo;

    @Autowired
    public VacationService(VacationRepo vacationRepo) {
     this.vacationRepo = vacationRepo;
    }

    public Vacation addVacation(Vacation vacation){
        vacation.setApprove(1);
        return vacationRepo.save(vacation);
    }

    public List<Vacation> findAllVacations(){
        return vacationRepo.findVacationByApprove();
    }
    public List<Vacation> findApprove(){
        return  vacationRepo.findApprove();
    }
    public List<Vacation> findRejrct(){
        return  vacationRepo.findRejrct();
    }

    public Vacation updateVacation(Vacation vacation){
        return vacationRepo.save(vacation);
    }

    public Vacation findVacationByVacationId(Long vacationId){
        return vacationRepo.findVacationByVacationId(vacationId)
                .orElseThrow(() -> new UserNotFoundException("Vacation With this ID: " + vacationId + "Does Not Exist!"));
    }

    public void deleteVacationByVacationId(Long vacationId){
        vacationRepo.deleteVacationByVacationId(vacationId);


    }

    public Vacation approveVacation(Vacation vacation){
        vacation.setApprove(2);
        return vacationRepo.save(vacation);
    }

    public Vacation rejectVacation(Vacation vacation){
        vacation.setApprove(3);
        return vacationRepo.save(vacation);
    }


//    public List<Vacation> findDaysOfVacation(HR02_E01_Employee emp) {
//        return vacationRepo.findDaysOfVacation(emp);
//    }
public List<Integer> findDaysOfVacation(HR02_E01_Employee employee) {
    return vacationRepo.findDaysOfVacation(employee);
}
}

