package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.RecruitmentCompany;
import net.oprup.HumanResource.model.RenewingResidence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.util.Optional;

public interface RecruitmentCompanyRepo extends JpaRepository<RecruitmentCompany, Long>

    {
        @Query("select p from RecruitmentCompany p where p.deleteFlag =1")
        List<RecruitmentCompany> deleteRecruitmentCompanyByDeleteFlag();

     //Optional<RecruitmentCompany> findRecruitmentCompanyById(Long recruitmentCompanyId);
      @Query(value ="select * from recruitment_company  where recruitment_company_id = :recruitment_company_id",nativeQuery = true)
       Optional<RecruitmentCompany> findRecruitmentCompanyById(@Param("recruitment_company_id") Long recruitment_company_id );


    }