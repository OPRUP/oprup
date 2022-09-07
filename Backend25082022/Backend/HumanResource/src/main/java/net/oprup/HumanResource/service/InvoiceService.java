package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.Invoice;
import net.oprup.HumanResource.model.Job;
import net.oprup.HumanResource.repo.InvoiceRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional

public class InvoiceService {

    private final InvoiceRepo invoiceRepo;

    public InvoiceService(InvoiceRepo invoiceRepo) {
        this.invoiceRepo = invoiceRepo;
    }

    public Invoice addInvoice(Invoice invoice){
        invoice.setDeleteFlag(1);
        return invoiceRepo.save(invoice);
    }

}
