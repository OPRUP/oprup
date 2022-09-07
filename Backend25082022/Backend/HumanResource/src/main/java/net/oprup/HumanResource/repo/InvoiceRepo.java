package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Invoice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface InvoiceRepo extends CrudRepository<Invoice, Long> {

    Optional<Invoice> findInvoiceByInvoiceId(Long invoiceId);

    @Query("select c from Invoice c where c.deleteFlag =1")
    List<Invoice> findInvoicesByDeleteFlag();
}
