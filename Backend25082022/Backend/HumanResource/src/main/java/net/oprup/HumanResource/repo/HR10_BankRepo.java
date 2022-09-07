package net.oprup.HumanResource.repo;

import java.util.List;
import java.util.Optional;

import net.oprup.HumanResource.model.HR10_Bank;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;


public interface HR10_BankRepo extends JpaRepository<HR10_Bank, Long>{

	Optional<HR10_Bank> findBankByBankId(Long bankId);

	@Query("select b from HR10_Bank b where b.deleteFlag =1")
	List<HR10_Bank> findBanksByDeleteFlag();





}


