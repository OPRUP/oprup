package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.Item;
import net.oprup.HumanResource.model.PurchasingItem;
import net.oprup.HumanResource.model.ReceiptVoucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReceiptVoucherRepo extends JpaRepository<ReceiptVoucher, Long> {
    @Query("select k from ReceiptVoucher k where k.deleteFlag =1")
    List<ReceiptVoucher> findReceiptVoucherByDeleteFlag();



    Optional<ReceiptVoucher> findReceiptVoucherByReceiptVoucherId(Long ReceiptVoucherId);
    @Query(value="select * from receipt_voucher AS k where k.delete_flag =1 and k.cash_account=:cash_account",nativeQuery = true)
    List<ReceiptVoucher> findCashAccount(@Param("cash_account") ChartAccount cao);

    @Query(value="select * from receipt_voucher AS k where k.delete_flag =1 and  k.checks_account=:checks_account",nativeQuery = true)
    List<ReceiptVoucher> findcheckAccount(@Param("checks_account") ChartAccount cao);

    @Query(value="select * from receipt_voucher AS k where k.delete_flag =1 and k.vendor_account=:vendor_account ORDER BY voucher_date",nativeQuery = true)
    List<ReceiptVoucher> findVendorAccount(@Param("vendor_account") ChartAccount cao);
    @Query(value ="select count(receipt_voucher_id) from receipt_voucher",nativeQuery = true)
    long countReceiptVoucherByReceiptVoucherId();
}
