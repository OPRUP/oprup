package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Customer;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerService {

    private final CustomerRepo customerRepo;
    @Autowired
    public CustomerService(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }

    public Customer addCustomer(Customer customer){
        customer.setDeleteFlag(1);
        return customerRepo.save(customer);
    }

    public List<Customer> findAllCustomer(){
        return  customerRepo.deleteCustomerByDeleteFlag();
    }

    public Customer updateCustomer(Customer customer){
        customer.setDeleteFlag(1);
        return customerRepo.save(customer);
    }

    public Customer findCustomerById(Long customerId){
        return customerRepo.findVendorByCustomerId(customerId)
                .orElseThrow(() -> new UserNotFoundException("customer by id: " + customerId + " not found"));
    }

    public Customer deleteCustomer(Customer customer){
        customer.setDeleteFlag(0);
        return customerRepo.save(customer);
    }

    public long countId(){

        return customerRepo.countCustomerId();
    }
    public List<Customer> getAllQualifiedCustomers(){
        return  customerRepo.getQualifiedCustomers();
    }

    public List<Customer> getProjectCustomers(){
        return  customerRepo.getProjectCustomers();
    }
}
