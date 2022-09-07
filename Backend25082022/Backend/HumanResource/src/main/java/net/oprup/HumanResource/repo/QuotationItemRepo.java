package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.ContractDetail;
import net.oprup.HumanResource.model.HR02_E09_Contract;
import net.oprup.HumanResource.model.Quotation;
import net.oprup.HumanResource.model.QuotationItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface QuotationItemRepo extends JpaRepository<QuotationItem, Long> {

    @Query("select p from QuotationItem p where p.deleteFlag =1")
    List<QuotationItem> deleteQuotationItemByDeleteFlag();


    @Query(value ="select * from quotation_item  where quotation_item_id = :quotation_item_id",nativeQuery = true)
    Optional<QuotationItem> findByQuotationItemId(@Param("quotation_item_id") Long quotation_item_id );

    List<QuotationItem> findQuotationItemByQuotation(Quotation quotation);


    void deleteByQuotationItemId(Long quotationItemId);




}
