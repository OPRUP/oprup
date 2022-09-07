package net.oprup.HumanResource.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.oprup.HumanResource.model.HR11_InsuranceCompany;
import org.springframework.data.jpa.repository.Query;


public interface HR11_InsuranceCompanyRepo extends JpaRepository<HR11_InsuranceCompany, Long>{
	Optional<HR11_InsuranceCompany> findInsuranceCompanyByInsuranceCompanyId(Long insuranceCompanyId);

	@Query("select i from HR11_InsuranceCompany i where i.deleteFlag =1")
	List<HR11_InsuranceCompany> findInsuranceCompaniesByDeleteFlag();
}