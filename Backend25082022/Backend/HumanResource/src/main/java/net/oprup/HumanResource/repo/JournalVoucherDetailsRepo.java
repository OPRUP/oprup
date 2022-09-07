package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;


public interface JournalVoucherDetailsRepo extends JpaRepository<JournalVoucherDetails,Long> {
    @Query("select j from JournalVoucherDetails j where j.deleteFlag =1")
    List<JournalVoucherDetails> deleteJournalVoucherDetailsByDeleteFlag();
    @Query(value="select * from journal_voucher_details AS k where k.journal_voucher_id=:journal_voucher_id and k.delete_flag =1",nativeQuery = true)
    List<JournalVoucherDetails> findJournalVoucherDetailsByJournalVoucher(@Param("journal_voucher_id")JournalVoucher journalVoucher);

//    @Query("select j from JournalVoucherDetails j where j.deleteFlag =1")
//    List<JournalVoucherDetails> deleteJournalVoucherDetailsByDeleteFlag();


//    @Query(value ="select * from  journal_voucher_details  where journal_voucher_details_id = :journal_voucher_details_id",nativeQuery = true)
//    Optional<JournalVoucherDetails> findByJournalVoucherDetailsId(@Param("journal_voucher_details_id") Long journal_voucher_details_id );

//    List<JournalVoucherDetails> findJournalVoucherDetailsByJournalVoucher(JournalVoucher journalVoucher);
//@Query(value="select * from journal_voucher_details AS k where k.delete_flag=1 AND k.account_id=:account_id  IN (SELECT *  FROM journal_voucher t where t.delete_flag=1 ORDER BY date_voucher",nativeQuery = true)
//List<JournalVoucherDetails> findJourAccount(@Param("account_id") ChartAccount cao);
@Query(value="select * from journal_voucher_details AS k where k.delete_flag = 1 AND k.account_id=:account_id  AND k.journal_voucher_id IN  (SELECT t.journal_voucher_id  FROM journal_voucher t where t.delete_flag=1 ORDER BY date_voucher)",nativeQuery = true)
List<JournalVoucherDetails> findJourAccount(@Param("account_id") ChartAccount cao);


}
