package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Taskeen;
import net.oprup.HumanResource.model.Transportation;
import net.oprup.HumanResource.repo.TransportationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TransportationService {
    private final TransportationRepo transportationRepo;
    @Autowired

    public TransportationService(TransportationRepo transportationRepo) {
        this.transportationRepo = transportationRepo;
    }
    public Transportation addTransportation(Transportation transportation){
        transportation.setDeleteFlag(1);
        return transportationRepo.save(transportation);
    }
    public List<Transportation> findAllTransportation(){
        return  transportationRepo.findTransportationByDeleteFlag();
    }
    public Transportation updateTransportation(Transportation transportation){
        transportation.setDeleteFlag(1);
        return transportationRepo.save(transportation);
    }
    public Transportation findTransportationById(Long transportationMeanId){
        return (Transportation) transportationRepo.findTransportationBytransportationMeanId(transportationMeanId)
                .orElseThrow(() -> new UserNotFoundException("Transportation by id: " + transportationMeanId + " not found"));
    }
    public Transportation deleteTransportation(Transportation transportation){
        transportation.setDeleteFlag(0);
        return transportationRepo.save(transportation);
    }
}
