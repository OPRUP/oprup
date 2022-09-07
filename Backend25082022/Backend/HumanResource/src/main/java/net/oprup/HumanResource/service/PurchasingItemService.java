package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;

import net.oprup.HumanResource.model.Purchasing;
import net.oprup.HumanResource.model.PurchasingItem;
import net.oprup.HumanResource.repo.PurchasingItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PurchasingItemService {
    private final PurchasingItemRepo purchasingItemRepo;
    @Autowired

    public PurchasingItemService(PurchasingItemRepo purchasingItemRepo) {
        this.purchasingItemRepo = purchasingItemRepo;
    }
    public PurchasingItem addPurchasingItem(PurchasingItem purchasingItem){
        purchasingItem.setDeleteFlag(1);
        return purchasingItemRepo.save(purchasingItem); }

    public List<PurchasingItem> findAllPurchasingItem(){
        return purchasingItemRepo.deletePurchasingItemByDeleteFlag();
    }


    //new


    public PurchasingItem updatePurchasingItem(PurchasingItem purchasingItem){
        purchasingItem.setDeleteFlag(1);
        return purchasingItemRepo.save(purchasingItem);
    }

    public PurchasingItem findPurchasingItemById(Long purchasingItemId){
        return purchasingItemRepo.findByPurchasingItemId(purchasingItemId)
                .orElseThrow(() -> new UserNotFoundException("PurchasingItemId by id: " + purchasingItemId + " not found"));
    }

    public PurchasingItem deletePurchasingItem(PurchasingItem purchasingItem){
        purchasingItem.setDeleteFlag(0);
        return purchasingItemRepo.save(purchasingItem);
    }

    //new
    public List<PurchasingItem> findPurchasingItemsByPurchasing(Purchasing purchasing) {
        return purchasingItemRepo.findPurchasingItemByPurchasing(purchasing);

    }

}
