package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.repo.VendorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VendorService {
    private final VendorRepo vendorRepo;

    @Autowired
    public VendorService(VendorRepo vendorRepo) {
        this.vendorRepo = vendorRepo;
    }

    public Vendor addVendor(Vendor vendor){
        vendor.setDeleteFlag(1);
        return vendorRepo.save(vendor);
    }

    public List<Vendor> findAllVendor(){
        return  vendorRepo.deleteVendorByDeleteFlag();
    }

    public Vendor updateVendor(Vendor vendor){
        vendor.setDeleteFlag(1);
        return vendorRepo.save(vendor);
    }

    public Vendor findVendorById(Long vendorId){
        return vendorRepo.findVendorByVendorId(vendorId)
                .orElseThrow(() -> new UserNotFoundException("Vendor by id: " + vendorId + " not found"));
    }

    public Vendor deleteVendor(Vendor vendor){
        vendor.setDeleteFlag(0);
         return vendorRepo.save(vendor);
    }

}