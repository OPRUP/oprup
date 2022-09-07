package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.HR02_E09_Contract;
import net.oprup.HumanResource.model.Slip;
import net.oprup.HumanResource.repo.SlipRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SlipService {

    private final SlipRepo slipRepo;

    public SlipService(SlipRepo slipRepo) {
        this.slipRepo = slipRepo;
    }


    public Slip addSlip(Slip slip){
        return slipRepo.save(slip);
    }

    public List<Slip> getSlipsOfContract(HR02_E09_Contract contract) {
        return slipRepo.findSlipsByContract(contract);
    }

//    public List<Slip> getSlipById(Long slipId){
//        return slipRepo.findSlipBySlipId(slipId);
//    }

    public Optional<Slip> getSlipBySlipId(Long slipId) {
        return slipRepo.findById(slipId);
    }


}