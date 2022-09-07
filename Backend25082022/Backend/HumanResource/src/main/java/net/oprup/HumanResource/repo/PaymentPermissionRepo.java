package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.PaymentPermission;
import net.oprup.HumanResource.model.PaymentVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PaymentPermissionRepo extends JpaRepository<PaymentPermission, Long> {
    @Query("select k from PaymentPermission k where k.deleteFlag =1")
    List<PaymentPermission> findPaymentPermissionByDeleteFlag();

    Optional<PaymentPermission> findPaymentPermissionByPaymentPermissionId(Long paymentVoucherId);



}
