package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR10_Bank;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.SiteVisits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SiteVisitsRepo extends JpaRepository<SiteVisits, Long> {
    @Query("select s from SiteVisits s where s.deleteFlag =1")
    List<SiteVisits> findSiteVisitsByDeleteFlag();

    Optional<SiteVisits> findSiteVisitsByVisitId(Long visitId);

    @Query(value ="select count(visit_id) from site_visits",nativeQuery = true)
    long countSiteVisitsBySiteVisitsId();
}
