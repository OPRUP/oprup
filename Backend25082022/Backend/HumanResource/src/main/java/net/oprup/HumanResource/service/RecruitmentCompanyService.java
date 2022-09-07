package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.RecruitmentCompany;
import net.oprup.HumanResource.repo.RecruitmentCompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RecruitmentCompanyService {

    private final RecruitmentCompanyRepo recruitmentCompanyRepo;
    @Autowired
    public RecruitmentCompanyService(RecruitmentCompanyRepo recruitmentCompanyRepo) {
        this.recruitmentCompanyRepo = recruitmentCompanyRepo;
    }

    public RecruitmentCompany addRecruitmentCompany(RecruitmentCompany renewingResidence){
        renewingResidence.setDeleteFlag(1);
        return recruitmentCompanyRepo.save(renewingResidence);
    }

    public List<RecruitmentCompany> findAllRecruitmentCompany(){
        return  recruitmentCompanyRepo.deleteRecruitmentCompanyByDeleteFlag();
    }

    public RecruitmentCompany updateRenewingResidence(RecruitmentCompany renewingResidence){
        renewingResidence.setDeleteFlag(1);
        return recruitmentCompanyRepo.save(renewingResidence);
    }

    public RecruitmentCompany findRenewingResidenceById(Long recruitmentCompanyId){
        return recruitmentCompanyRepo.findRecruitmentCompanyById(recruitmentCompanyId)
                .orElseThrow(() -> new UserNotFoundException("RecruitmentCompany by id: " + recruitmentCompanyId + " not found"));
    }



    public RecruitmentCompany deleteRenewingResidence(RecruitmentCompany recruitmentCompany){
        recruitmentCompany.setDeleteFlag(0);
        return recruitmentCompanyRepo.save(recruitmentCompany);
    }

}

