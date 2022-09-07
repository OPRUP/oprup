package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SalesInvoiceItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CreditNoticeRepo extends JpaRepository<CreditNotice, Long> {

    @Query(value ="select * from credit_notice  where credit_notice_id = :credit_notice_id and delete_flag=1",nativeQuery = true)
    Optional<CreditNotice> findCreditNoticeByCreditNoticeId(@Param("credit_notice_id") Long credit_notice_id );

    @Query("select p from CreditNotice p where p.deleteFlag =1")
    List<CreditNotice> findCreditNoticeByDeleteFlag();

    @Query(value ="select count(credit_notice_id) from credit_notice",nativeQuery = true)
    long countCreditNoticeByCreditNoticeId();

}
