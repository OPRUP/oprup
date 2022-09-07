package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.KitchenRoom;
import net.oprup.HumanResource.model.Maintenance;
import net.oprup.HumanResource.model.PaymentVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PaymentVoucherRepo  extends JpaRepository<PaymentVoucher, Long> {


    @Query("select k from PaymentVoucher k where k.deleteFlag =1")
    List<PaymentVoucher> findPaymentVoucherByDeleteFlag();

    Optional<PaymentVoucher> findPaymentVoucherByPaymentVoucherId(Long paymentVoucherId);

    @Query(value="select * from payment_voucher AS k where k.delete_flag =1 and k.cash_account=:cash_account",nativeQuery = true)
    List<PaymentVoucher> findCashAccount(@Param("cash_account") ChartAccount cao);


    @Query(value="select * from payment_voucher AS k where k.delete_flag =1 and k.vendor_account=:vendor_account ORDER BY voucher_date",nativeQuery = true)
    List<PaymentVoucher> findVendorAccount(@Param("vendor_account") ChartAccount cao);

    @Query(value ="select count(payment_voucher_id) from payment_voucher",nativeQuery = true)
    long countPaymentVoucherByPaymentVoucherId();


}