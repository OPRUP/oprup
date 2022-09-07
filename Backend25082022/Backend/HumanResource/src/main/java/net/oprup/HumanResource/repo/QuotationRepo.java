package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;;import java.util.List;
import java.util.Optional;

public interface QuotationRepo extends JpaRepository<Quotation, Long> {

    Optional<Quotation> findByQuotationId(Long quotationId);

    void deleteByquotationId(Long quotationId);

//    @Query("select r from Quotation r where r.approve = 1")
//    List<Quotation> findQuotationByApprove();



    @Query(value ="select * from quotation  where quotation_id = :quotation_id",nativeQuery = true)
    Optional<Quotation> findQuotationById(@Param("quotation_id") Long quotation_id );

    @Query("select p from Quotation p where p.deleteFlag =1")
    List<Quotation> deleteQuotationByDeleteFlag();

    @Query("select count(p) from Quotation p where p.deleteFlag =1")
    Long getCountOfQuotation();
}
