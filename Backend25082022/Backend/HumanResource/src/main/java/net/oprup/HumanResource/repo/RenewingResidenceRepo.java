package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.RenewingResidence;
import net.oprup.HumanResource.model.SkipRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RenewingResidenceRepo extends JpaRepository<RenewingResidence, Long> {
    @Query("select p from RenewingResidence p where p.deleteFlag =1")
    List<RenewingResidence> deleteRenewingResidenceByDeleteFlag();

    @Query(value ="select * from renewing_residence  where renewing_residence_id = :renewing_residence_id",nativeQuery = true)
    Optional<RenewingResidence> findRenewingResidenceId(@Param("renewing_residence_id") Long renewing_residence_id );



}