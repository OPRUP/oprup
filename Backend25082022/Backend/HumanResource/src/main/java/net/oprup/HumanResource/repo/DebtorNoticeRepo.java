package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.CreditNotice;
import net.oprup.HumanResource.model.DebtorNotice;
import net.oprup.HumanResource.model.Taskeen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DebtorNoticeRepo extends JpaRepository<DebtorNotice, Long> {

    @Query(value ="select * from debtor_notice  where debtor_notice_id = :debtor_notice_id and delete_flag=1",nativeQuery = true)
    Optional<DebtorNotice> findDebtorNoticeByDebtorNoticeId(@Param("debtor_notice_id") Long debtor_notice_id );

    @Query("select p from DebtorNotice p where p.deleteFlag =1")
    List<DebtorNotice> findDebtorNoticeByDeleteFlag();

    @Query(value ="select count(debtor_notice_id) from debtor_notice",nativeQuery = true)
    long countDebtorNoticeByDebtorNoticeId();

}
