package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.JournalVoucher;
import net.oprup.HumanResource.model.SalesInvoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface JournalVoucherRepo extends JpaRepository<JournalVoucher, Long> {

    @Query(value ="select * from journal_voucher  where journal_voucher_id = :journal_voucher_id",nativeQuery = true)
    Optional<JournalVoucher> findJournalVoucherById(@Param("journal_voucher_id") Long journal_voucher_id );

    @Query("select j from JournalVoucher j where j.deleteFlag =1")
    List<JournalVoucher> findAllJournalVoucherByDeleteFlag();

    @Query(value ="select count(journal_voucher_id) from journal_voucher",nativeQuery = true)
    long countJournalVoucherByJournalVoucherId();


    //    @Query("select j from JournalVoucher j where j.deleteFlag =1")
//    List<JournalVoucher> findJournalVoucherByDeleteFlag();
//
//    Optional<JournalVoucher> findJournalVoucherByJournalVoucherId(Long journalVoucherId);
}
