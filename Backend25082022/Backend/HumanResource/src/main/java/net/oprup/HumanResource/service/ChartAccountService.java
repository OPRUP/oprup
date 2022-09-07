package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.ChartAccount;
import net.oprup.HumanResource.repo.ChartAccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class ChartAccountService {
    private final ChartAccountRepo chartAccountRepo;
    @Autowired
    public ChartAccountService(ChartAccountRepo chartAccountRepo) {
        this.chartAccountRepo = chartAccountRepo;
    }
    public List<ChartAccount> findAll(){
        return  chartAccountRepo.findAccountByDeleteFlag();
    }
    public ChartAccount findById(Long accountId){
        return chartAccountRepo.findAccountByAccountId(accountId)
                .orElseThrow(() -> new UserNotFoundException("Account by id: " + accountId + " not found"));
    }
    public ChartAccount findByName(String accountName){
        return chartAccountRepo.findChartAccountByAccountName(accountName)
                .orElseThrow(() -> new UserNotFoundException("Account by id: " + accountName + " not found"));
    }
    public List<ChartAccount> findByType(String accountType){
        return chartAccountRepo.findChartAccountByAccountType(accountType);

    }

    public ChartAccount add(ChartAccount chartAccount){
        chartAccount.setDeleteFlag(1);
        return chartAccountRepo.save(chartAccount);
    }
    public ChartAccount update(ChartAccount chartAccount){
        chartAccount.setDeleteFlag(1);
        return chartAccountRepo.save(chartAccount);
    }
    public ChartAccount delete(ChartAccount chartAccount){
        chartAccount.setDeleteFlag(0);
        return chartAccountRepo.save(chartAccount);
    }
    public List<ChartAccount> findSubaccounts(){
        return  chartAccountRepo.findChartAccountByAccountTypeEqualsSub();
    }

    public List<ChartAccount> findSubByParent(String  parent_account ){
        return  chartAccountRepo.findSubByParent(parent_account);
    }
    public List<ChartAccount> findByCode(Long accountCode){
        return chartAccountRepo.findByCode(accountCode);

    }
public List<ChartAccount> findByParent(Long accountCode){
        return chartAccountRepo.findByParent(accountCode);

    }

}
