package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Transportation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;
import java.util.Optional;

public interface TransportationRepo extends JpaRepository<Transportation, Long> {
    @Query("select t from Transportation t where t.deleteFlag =1")
    List<Transportation> findTransportationByDeleteFlag();

    Optional<Transportation> findTransportationBytransportationMeanId(Long transportationMeanId);
}
