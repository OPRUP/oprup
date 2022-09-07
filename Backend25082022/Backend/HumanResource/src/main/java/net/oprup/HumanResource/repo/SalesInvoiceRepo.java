package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SkipRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SalesInvoiceRepo extends JpaRepository<SalesInvoice, Long> {

    @Query(value ="select * from sales_invoice  where sales_invoice_id = :sales_invoice_id AND deleteFlag=0",nativeQuery = true)
    Optional<SalesInvoice> findSalesInvoiceyById(@Param("sales_invoice_id") Long sales_invoice_id );

    @Query("select p from SalesInvoice p where p.deleteFlag =1")
    List<SalesInvoice> findSalesInvoiceByDeleteFlag();

    @Query(value ="select count(sales_invoice_id) from sales_invoice",nativeQuery = true)
    long countSalesInvoiceBySalesInvoiceId();


}
