package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.TravelingEmployee;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.repo.TravelingEmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TravelingEmployeeService {
    private final TravelingEmployeeRepo travelingEmployeeRepo;
    @Autowired
    public TravelingEmployeeService(TravelingEmployeeRepo travelingEmployeeRepo) {
        this.travelingEmployeeRepo = travelingEmployeeRepo;
    }

    public  TravelingEmployee addTravelingEmployee( TravelingEmployee travelingEmployee){
        travelingEmployee.setDeleteFlag(1);
        return travelingEmployeeRepo.save(travelingEmployee);
    }

    public List< TravelingEmployee> findAllTravelingEmployee(){
        return  travelingEmployeeRepo.deleteTravelingEmployeeByDeleteFlag();
    }

    public  TravelingEmployee updateTravelingEmployee( TravelingEmployee travelingEmployee){
        travelingEmployee.setDeleteFlag(1);
        return travelingEmployeeRepo.save(travelingEmployee);
    }

    public  TravelingEmployee findTravelingEmployeeById(Long travelingEmployeeId){
        return travelingEmployeeRepo.findByTravelingEmployeeId(travelingEmployeeId)
                .orElseThrow(() -> new UserNotFoundException("Traveling Employee by id: " + travelingEmployeeId + " not found"));
    }

    public  TravelingEmployee deleteTravelingEmployee( TravelingEmployee travelingEmployee){
        travelingEmployee.setDeleteFlag(0);
        return travelingEmployeeRepo.save(travelingEmployee);
    }

    //new

    public long countOfTravelingEmployee(){return travelingEmployeeRepo.countByTravelingEmployee();}

    public List<TravelingEmployee> findTravelingEmployeeByDeleteFlag(){
        return travelingEmployeeRepo.getTravelingEmployeeByDeleteFlag();

    }

}
