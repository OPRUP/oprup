package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentChecksPermissionRepo extends JpaRepository<PaymentChecksPermission, Long> {

    @Query("select k from PaymentChecksPermission k where k.deleteFlag =1")
    List<PaymentChecksPermission> findPaymentChecksPermissionByDeleteFlag();



    @Query(value="select * from payment_check_permission  AS c where c.payment_permission_id=:payment_permission_id and c.delete_flag=1",nativeQuery = true)
    List<PaymentChecksPermission> findPaymentChecksPermissionByPaymentPermission(@Param("payment_permission_id")PaymentPermission paymentPermission);




}
