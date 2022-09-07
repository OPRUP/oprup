package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E08_Bank;
import net.oprup.HumanResource.model.HR02_E11_EmployedInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR02_E08_BankRepo extends JpaRepository<HR02_E08_Bank, Long> {
    Optional<HR02_E08_Bank> findById(Long employeeImageProfileId);

    @Query("select e from HR02_E08_Bank e where e.deleteFlag =1")
    List<HR02_E08_Bank> findByDeleteFlag();
    List<HR02_E08_Bank> findBankByEmployee(HR02_E01_Employee employee);


    //new

    @Query(value = "SELECT * FROM t10_employee_bank b INNER JOIN t03_employee e ON b.emp_bank_id = e.employee_id WHERE DATEDIFF(b.credit_card_expiry,CURDATE())<=90 and e.delete_flag=1",nativeQuery = true)
    List<HR02_E08_Bank> getCreditCardExpiryNotification();

    @Query("select count(e) from HR02_E08_Bank e where e.creditCardNumber is null and e.deleteFlag =1")
    long countByCreditCard();

    @Query("select e from HR02_E08_Bank e where e.creditCardNumber is null and e.deleteFlag =1")
    List<HR02_E08_Bank> CreditCardsHaveNotYetBeenIssued();
}
