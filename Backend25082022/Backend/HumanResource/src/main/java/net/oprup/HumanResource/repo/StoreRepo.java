package net.oprup.HumanResource.repo;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.model.HR04_Section;
import net.oprup.HumanResource.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;



public interface StoreRepo extends JpaRepository<Store, Long> {
    Optional<Store> findStoreByStoreId(Long storeId);

    void deleteStoreByStoreId(Long storeId);

    @Query("select s from Store s where s.deleteFlag =1")
    List<Store> findStoreByDeleteFlag();





}











