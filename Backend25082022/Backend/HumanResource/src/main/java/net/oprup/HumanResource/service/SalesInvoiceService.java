package net.oprup.HumanResource.service;


import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.repo.SalesInvoiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SalesInvoiceService {

    private final SalesInvoiceRepo salesInvoiceRepo;

    @Autowired
    public SalesInvoiceService(SalesInvoiceRepo salesInvoiceRepo) {
        this.salesInvoiceRepo = salesInvoiceRepo;
    }
    public SalesInvoice addSalesInvoice(SalesInvoice salesInvoice){
        salesInvoice.setDeleteFlag(1);
        return salesInvoiceRepo.save(salesInvoice);
    }

    public List<SalesInvoice> findAllSalesInvoice(){
        return  salesInvoiceRepo.findSalesInvoiceByDeleteFlag();
    }

    public SalesInvoice updateSalesInvoice(SalesInvoice salesInvoice){
        salesInvoice.setDeleteFlag(1);
        return salesInvoiceRepo.save(salesInvoice);
    }

    public SalesInvoice findSalesInvoiceById(Long salesInvoiceId){
        return salesInvoiceRepo.findSalesInvoiceyById(salesInvoiceId)
                .orElseThrow(() -> new UserNotFoundException("SalesInvoice by id: " + salesInvoiceId + " not found"));
    }

    public SalesInvoice deleteSalesInvoice(SalesInvoice salesInvoice){
        salesInvoice.setDeleteFlag(0);
        return salesInvoiceRepo.save(salesInvoice);
    }
    public long countId(){

        return salesInvoiceRepo.countSalesInvoiceBySalesInvoiceId();
    }
}