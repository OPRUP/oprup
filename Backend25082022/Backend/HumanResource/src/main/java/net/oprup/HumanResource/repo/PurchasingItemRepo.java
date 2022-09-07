package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Purchasing;
import net.oprup.HumanResource.model.PurchasingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PurchasingItemRepo extends JpaRepository<PurchasingItem,Long> {

    @Query("select p from PurchasingItem p where p.deleteFlag =1")
    List<PurchasingItem> deletePurchasingItemByDeleteFlag();


    @Query(value ="select * from purchasing_item  where purchasing_item_id = :purchasing_item_id",nativeQuery = true)
    Optional<PurchasingItem> findByPurchasingItemId(@Param("purchasing_item_id") Long purchasing_item_id );

    List<PurchasingItem> findPurchasingItemByPurchasing(Purchasing purchasing);

}
