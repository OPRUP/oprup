package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.A02_InternalCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface A02_InternalCompanyRepo extends JpaRepository<A02_InternalCompany, Long> {

    Optional<A02_InternalCompany> findInternalCompanyByCompanyId(Long companyId);

    @Query("select c from A02_InternalCompany c where c.deleteFlag =1")
    List<A02_InternalCompany> findInternalCompaniesByDeleteFlag();
}