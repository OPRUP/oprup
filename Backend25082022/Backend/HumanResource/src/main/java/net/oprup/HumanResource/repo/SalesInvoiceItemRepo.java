package net.oprup.HumanResource.repo;



import net.oprup.HumanResource.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SalesInvoiceItemRepo extends JpaRepository<SalesInvoiceItem, Long> {
    @Query("select p from SalesInvoiceItem p where p.deleteFlag =1")
    List<SalesInvoiceItem> deleteSalesInvoiceItemByDeleteFlag();

    @Query(value="select * from sales_invoice_item  AS c where c.sales_invoice_id=:sales_invoice_id and c.delete_flag=1",nativeQuery = true)
    List<SalesInvoiceItem> findSalesInvoiceItemBySalesInvoice(@Param("sales_invoice_id")SalesInvoice salesInvoice);



}
