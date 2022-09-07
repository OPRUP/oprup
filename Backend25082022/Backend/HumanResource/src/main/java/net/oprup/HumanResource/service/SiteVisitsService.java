package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.SiteVisits;
import net.oprup.HumanResource.repo.SiteVisitsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SiteVisitsService {

    private final SiteVisitsRepo siteVisitsRepo;

    @Autowired
    public SiteVisitsService(SiteVisitsRepo siteVisitsRepo) {
        this.siteVisitsRepo = siteVisitsRepo;
    }
    public SiteVisits addSiteVisits(SiteVisits siteVisits){
        siteVisits.setDeleteFlag(1);
        return siteVisitsRepo.save(siteVisits);
    }
    public List<SiteVisits> findAllSiteVisits(){
        return  siteVisitsRepo.findSiteVisitsByDeleteFlag();
    }

    public SiteVisits updateSiteVisits(SiteVisits siteVisits){
        siteVisits.setDeleteFlag(1);
        return siteVisitsRepo.save(siteVisits);
    }
    public SiteVisits findSiteVisitsById(Long visitId){
        return (SiteVisits) siteVisitsRepo.findSiteVisitsByVisitId(visitId)
                .orElseThrow(() -> new UserNotFoundException("Visit by id: " + visitId + " not found"));
    }
    public SiteVisits deleteSiteVisits(SiteVisits siteVisits){
        siteVisits.setDeleteFlag(0);
        return siteVisitsRepo.save(siteVisits);
    }


    public long countId(){

        return siteVisitsRepo.countSiteVisitsBySiteVisitsId();
    }

}
