package net.oprup.HumanResource.repo;
import net.oprup.HumanResource.model.ATMCardRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
public interface ATMCardRequestRepo extends JpaRepository<ATMCardRequest, Long> {


    Optional<ATMCardRequest> findByCreditCardRequestId(Long creditCardRequestId);

    void deleteByCreditCardRequestId(Long creditCardRequestId);

    @Query("select r from ATMCardRequest r where r.approve = 1")
    List<ATMCardRequest> findATMRequestByApprove();


//    @Query("select s from ATMCardRequest s where s.deleteFlag =1")
//    List<ATMCardRequest> findReissuingATMReqByDeleteFlag();
}