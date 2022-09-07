package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.ATMCardRequest;
import net.oprup.HumanResource.model.Advance;
import net.oprup.HumanResource.model.ResidenceCardRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ResidenceCardRequestRepo extends JpaRepository<ResidenceCardRequest, Long> {


    Optional<ResidenceCardRequest> findByResidenceCardRequestId(Long residenceCardRequestId);

    void deleteByResidenceCardRequestId(Long residenceCardRequestId);

    @Query("select r from ResidenceCardRequest r where r.approve = 1")
    List<ResidenceCardRequest> findResidenceCardRequestByApprove();
    @Query("select a from ResidenceCardRequest a where a.approve =2")
    List<ResidenceCardRequest> findApprove();

    @Query("select a from ResidenceCardRequest a where a.approve =3")
    List<ResidenceCardRequest> findRejrct();
}
