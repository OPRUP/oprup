package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR04_Section;
import net.oprup.HumanResource.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VendorRepo extends JpaRepository<Vendor, Long> {
    @Query("select p from Vendor p where p.deleteFlag =1")
    List<Vendor> deleteVendorByDeleteFlag();

    Optional<Vendor> findVendorByVendorId(Long vendorId);

}
