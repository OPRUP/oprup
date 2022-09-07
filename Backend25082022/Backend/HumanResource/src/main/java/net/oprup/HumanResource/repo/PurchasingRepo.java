package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Purchasing;
import net.oprup.HumanResource.model.PurchasingItem;
import net.oprup.HumanResource.model.Taskeen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PurchasingRepo extends JpaRepository<Purchasing, Long> {
    @Query("select p from Purchasing p where p.deleteFlag =1")
    List<Purchasing> findPurchasingByDeleteFlag();

    @Query(value ="select count(purchasing_invoice_id) from purchasing",nativeQuery = true)
    long countPurchasingByPurchasingInvoiceId();
}
