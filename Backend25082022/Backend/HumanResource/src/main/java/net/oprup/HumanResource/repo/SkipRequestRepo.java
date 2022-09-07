package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.EmployeeProject;
import net.oprup.HumanResource.model.SkipRequest;
import net.oprup.HumanResource.model.TravelingEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SkipRequestRepo extends JpaRepository<SkipRequest, Long> {



    @Query("select b from SkipRequest b where b.deleteFlag =1")
    List<SkipRequest> findSkipRequestByDeleteFlag();

    @Query(value ="select * from skip_request  where skip_request_id = :skip_request_id",nativeQuery = true)
    Optional<SkipRequest> findSkipRequestById(@Param("skip_request_id") Long skip_request_id );




}
