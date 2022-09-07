package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.CreditNoticeItem;
import net.oprup.HumanResource.model.DebtorNotice;
import net.oprup.HumanResource.model.DebtorNoticeItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DebtorNoticeItemRepo extends JpaRepository<DebtorNoticeItem, Long> {
    @Query("select p from DebtorNoticeItem p where p.deleteFlag =1")
    List<DebtorNoticeItem> findDebtorNoticeItemByDeleteFlag();

    @Query(value="select * from debtor_notice_item  AS c where c.debtor_notice_id=:debtor_notice_id and c.delete_flag=1",nativeQuery = true)
    List<DebtorNoticeItem> findDebtorNoticeItemByDebtorNotice(@Param("debtor_notice_id") DebtorNotice debtorNotice);
}
