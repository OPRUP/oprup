package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CheckRepo extends JpaRepository<Check, Long>{
    @Query("select k from Check k where k.deleteFlag =1")
    List<Check> findCheckByDeleteFlag();

    //Optional<Check> findCheckByCheckId(Long CheckId);

    @Query(value="select * from acc_check  AS c where c.receipt_voucher_id=:receipt_voucher_id and c.delete_flag=1",nativeQuery = true)
    List<Check> findCheckByReceiptVoucher(@Param("receipt_voucher_id")ReceiptVoucher receiptVoucher);



    //Optional<Check> findCheckByCheckId(Long CheckId);



    @Query(value="select * from acc_check  AS c where c.delete_flag=1 AND c.receipt_voucher_id IN (SELECT t.receipt_voucher_id  FROM receipt_voucher t where t.checks_account=:checks_account AND t.delete_flag=1 ORDER BY voucher_date)",nativeQuery = true)
    List<Check> findByReCheck(@Param("checks_account") ChartAccount cao);


}

