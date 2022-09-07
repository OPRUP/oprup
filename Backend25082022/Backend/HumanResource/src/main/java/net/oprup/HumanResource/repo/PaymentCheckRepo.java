package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
public interface PaymentCheckRepo extends JpaRepository<PaymentCheck, Long> {
    @Query("select k from PaymentCheck k where k.deleteFlag =1")
    List<PaymentCheck> findPaymentCheckByDeleteFlag();



    @Query(value="select * from payment_check  AS c where c.payment_voucher_id=:payment_voucher_id and c.delete_flag=1",nativeQuery = true)
    List<PaymentCheck> findPaymentCheckByPaymentVoucher(@Param("payment_voucher_id")PaymentVoucher paymentVoucher);

    @Query(value="select * from payment_check  AS c where c.delete_flag=1 AND c.payment_voucher_id IN (SELECT t.payment_voucher_id  FROM payment_voucher t where t.checks_account=:checks_account AND t.delete_flag=1 ORDER BY voucher_date)  ",nativeQuery = true)
    List<PaymentCheck> findByCheck(@Param("checks_account") ChartAccount cao);


}
