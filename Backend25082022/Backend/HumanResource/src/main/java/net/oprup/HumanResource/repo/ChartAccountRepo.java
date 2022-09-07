package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ChartAccountRepo extends JpaRepository<ChartAccount, Long> {
    Optional<ChartAccount> findAccountByAccountId(Long accountId);
    @Query("select c from ChartAccount  c where c.deleteFlag =1")
    List<ChartAccount> findAccountByDeleteFlag();



    @Query("select c from ChartAccount  c where c.accountType='sub' AND c.deleteFlag =1")
    List<ChartAccount> findChartAccountByAccountTypeEqualsSub();


    @Query("select c from ChartAccount  c where c.deleteFlag =1 AND c.parentAccount=:parent_account")
    List<ChartAccount> findSubByParent(@Param("parent_account") String parent_account);

    Optional <ChartAccount> findChartAccountByAccountName (String accountName);
    List <ChartAccount> findChartAccountByAccountType (String accountName);
    @Query("select c from ChartAccount  c where c.accountCode =:account_code")
    List<ChartAccount> findByCode(@Param("account_code") Long account_code);
@Query(value = "select * from chart_account AS c where c.delete_flag=1 AND c.parent_account =:account_code",nativeQuery = true)
    List<ChartAccount> findByParent(@Param("account_code") Long account_code);

}
