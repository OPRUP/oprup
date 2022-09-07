package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.model.HR04_Section;
import net.oprup.HumanResource.model.HR11_InsuranceCompany;
import net.oprup.HumanResource.model.Store;
import net.oprup.HumanResource.repo.StoreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class StoreService {
    private final StoreRepo storeRepo;

    @Autowired
    public StoreService(StoreRepo storeRepo) {
        this.storeRepo = storeRepo;
    }



    public Store addStore(Store store) {
        store.setDeleteFlag(1);
        return storeRepo.save(store);
    }

    public Store updateStore(Store store) {
        store.setDeleteFlag(1);
        return storeRepo.save(store);
    }
    public List<Store> findAllStores(){
        return  storeRepo.findStoreByDeleteFlag();
    }



    public void deleteStoreByStoreId(Long storeId){
        storeRepo.deleteStoreByStoreId(storeId);
    }

    public Store delete(Store store){
        store.setDeleteFlag(0);
        return storeRepo.save(store);
    }

    public Store findStoreById(Long storeId) {
        return storeRepo.findStoreByStoreId(storeId)
                .orElseThrow(() -> new UserNotFoundException("InsuranceCompany by id: " + storeId + " not found"));
    }
    public void deleteStore(Long storeId){

        this.storeRepo.deleteById(storeId);
    }


}
