package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.CreditNoticeItem;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SalesInvoiceItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CreditNoticeItemRepo extends JpaRepository<CreditNoticeItem, Long> {
    @Query("select p from CreditNoticeItem p where p.deleteFlag =1")
    List<CreditNoticeItem> findCreditNoticeItemByDeleteFlag();

    @Query(value="select * from credit_notice_item  AS c where c.credit_notice_id=:credit_notice_id and c.delete_flag=1",nativeQuery = true)
    List<CreditNoticeItem> findCreditNoticeItemByCreditNotice(@Param("credit_notice_id") CreditNotice creditNotice);
}
