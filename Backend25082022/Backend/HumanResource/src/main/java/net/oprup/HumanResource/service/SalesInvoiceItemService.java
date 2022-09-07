package net.oprup.HumanResource.service;


import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E09_Contract;
import net.oprup.HumanResource.model.SalesInvoice;
import net.oprup.HumanResource.model.SalesInvoiceItem;
import net.oprup.HumanResource.repo.SalesInvoiceItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SalesInvoiceItemService {

    private final SalesInvoiceItemRepo salesInvoiceItemRepo;

    @Autowired

    public SalesInvoiceItemService(SalesInvoiceItemRepo salesInvoiceItemRepo) {
        this.salesInvoiceItemRepo = salesInvoiceItemRepo;
    }

    public SalesInvoiceItem addSalesInvoiceItem(SalesInvoiceItem salesInvoiceItem){
        salesInvoiceItem.setDeleteFlag(1);
        return salesInvoiceItemRepo.save(salesInvoiceItem);
    }

    public List<SalesInvoiceItem> findAllSalesInvoiceItem(){

        return  salesInvoiceItemRepo.deleteSalesInvoiceItemByDeleteFlag();
    }

    public SalesInvoiceItem updateSalesInvoiceItem(SalesInvoiceItem salesInvoiceItem){
        salesInvoiceItem.setDeleteFlag(1);
        return salesInvoiceItemRepo.save(salesInvoiceItem);
    }

    public List<SalesInvoiceItem> findSalesInvoiceItemBySalesInvoice(SalesInvoice salesInvoice) {
        return salesInvoiceItemRepo.findSalesInvoiceItemBySalesInvoice(salesInvoice);

    }

    public SalesInvoiceItem deleteSalesInvoiceItem(SalesInvoiceItem salesInvoiceItem){
        salesInvoiceItem.setDeleteFlag(0);
        return salesInvoiceItemRepo.save(salesInvoiceItem);
    }

}