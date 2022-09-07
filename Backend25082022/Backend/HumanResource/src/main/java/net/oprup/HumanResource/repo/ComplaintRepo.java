package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ComplaintRepo extends JpaRepository<Complaint, Long> {
    @Query("select c from Complaint c where c.deleteFlag =1")
    List<Complaint> findComplaintByDeleteFlag();

    Optional<Complaint> findComplaintByComplaintId(Long complaintId);
}
