package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
    @Query("select p from Customer p where p.deleteFlag =1")
    List<Customer> deleteCustomerByDeleteFlag();

    Optional<Customer> findVendorByCustomerId(Long customerId);

    @Query(value ="select count(customer_id) from customer",nativeQuery = true)
    long countCustomerId();


    @Query(value="select p.* from customer p where p.customer_status =N'مؤهل' and p.delete_flag =1",nativeQuery = true)
    List<Customer> getQualifiedCustomers();


    @Query(value="select p.* from customer p where p.customer_status =N'محول' and p.delete_flag =1",nativeQuery = true)
    List<Customer> getProjectCustomers();


}