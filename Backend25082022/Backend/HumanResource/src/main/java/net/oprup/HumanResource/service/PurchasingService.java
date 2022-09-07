package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;

import net.oprup.HumanResource.model.Purchasing;
import net.oprup.HumanResource.model.PurchasingItem;
import net.oprup.HumanResource.repo.PurchasingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PurchasingService {
    private final PurchasingRepo purchasingRepo;
@Autowired
    public PurchasingService(PurchasingRepo purchasingRepo) {
        this.purchasingRepo = purchasingRepo;
    }
    public Purchasing addPurchasing(Purchasing purchasing){
        purchasing.setDeleteFlag(1);
    return purchasingRepo.save(purchasing);
    }

    public List<Purchasing> findAllPurchasing(){
        return purchasingRepo.findPurchasingByDeleteFlag();
    }


    public Purchasing findPurchasingById(Long purchasingInvoiceId){
        return purchasingRepo.findById(purchasingInvoiceId)
                .orElseThrow(() -> new UserNotFoundException("PurchasingItemId by id: " + purchasingInvoiceId + " not found"));
    }

    public Purchasing deletePurchasing(Purchasing purchasing){
        purchasing.setDeleteFlag(0);
        return purchasingRepo.save(purchasing);
    }
    public Purchasing updatePurchasing(Purchasing purchasing){
        purchasing.setDeleteFlag(1);
        return purchasingRepo.save(purchasing);
    }
    public long countId(){

        return purchasingRepo.countPurchasingByPurchasingInvoiceId();
    }
}
