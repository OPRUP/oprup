package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E05_Address;
import net.oprup.HumanResource.repo.HR02_E05_AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E05_AddressService {
    private final HR02_E05_AddressRepo repo;
    @Autowired
    public HR02_E05_AddressService(HR02_E05_AddressRepo repo) {
        this.repo = repo;
    }
    public List<HR02_E05_Address> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E05_Address findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }
    public List<HR02_E05_Address> getAddressesOfEmployee(HR02_E01_Employee employee) {
        return repo.findAddressesByEmployee(employee);

    }
    public HR02_E05_Address add(HR02_E05_Address record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E05_Address update(HR02_E05_Address record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E05_Address delete(HR02_E05_Address record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }
    public void deleteAddress(Long addressId){

        this.repo.deleteById(addressId);
    }
}


