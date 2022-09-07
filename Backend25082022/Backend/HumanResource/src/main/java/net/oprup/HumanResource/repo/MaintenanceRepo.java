package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MaintenanceRepo extends JpaRepository<Maintenance, Long> {
    @Query("select m from Maintenance m where m.deleteFlag =1")
    List<Maintenance> findMaintenanceByDeleteFlag();

    Optional<Maintenance> findMaintenanceByMaintenanceId(Long maintenanceId);
}
