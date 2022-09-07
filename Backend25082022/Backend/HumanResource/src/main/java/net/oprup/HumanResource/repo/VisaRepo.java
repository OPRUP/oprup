package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.model.Visa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VisaRepo extends JpaRepository<Visa, Long> {

    @Query("select p from Visa p where p.deleteFlag =1")
    List<Visa> findVisaByDeleteFlag();

    Optional<Visa> findVisaByVisaInformationId(Long visaInformationId);
}
