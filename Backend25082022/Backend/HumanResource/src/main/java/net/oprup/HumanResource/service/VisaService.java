package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Visa;
import net.oprup.HumanResource.repo.VisaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VisaService {
    private final VisaRepo visaRepo;

    @Autowired
    public VisaService(VisaRepo visaRepo) {
        this.visaRepo = visaRepo;
    }


    public Visa addVisa(Visa visa){
        visa.setDeleteFlag(1);
        return visaRepo.save(visa);
    }

    public List<Visa> findAllVisa(){
        return  visaRepo.findVisaByDeleteFlag();
    }

    public Visa updateVisa(Visa visa){
        visa.setDeleteFlag(1);
        return visaRepo.save(visa);
    }

    public Visa findVisaByVisaInformationId(Long visaInformationId){
        return visaRepo.findVisaByVisaInformationId(visaInformationId)
                .orElseThrow(() -> new UserNotFoundException("Visa by id: " + visaInformationId + " not found"));
    }

    public Visa deleteVisa(Visa visa){
        visa.setDeleteFlag(0);
        return visaRepo.save(visa);
    }

}
