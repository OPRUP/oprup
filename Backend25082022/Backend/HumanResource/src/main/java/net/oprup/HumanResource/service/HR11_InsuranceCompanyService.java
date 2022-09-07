package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR11_InsuranceCompany;
import net.oprup.HumanResource.repo.HR11_InsuranceCompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class HR11_InsuranceCompanyService {

	private final HR11_InsuranceCompanyRepo insuranceCompanyRepo;

	@Autowired
	public HR11_InsuranceCompanyService(HR11_InsuranceCompanyRepo insuranceCompanyRepo) {
		this.insuranceCompanyRepo = insuranceCompanyRepo;
	}

	public HR11_InsuranceCompany addInsuranceCompany(HR11_InsuranceCompany insuranceCompany) {
		insuranceCompany.setDeleteFlag(1);
		return insuranceCompanyRepo.save(insuranceCompany);
	}

	public List<HR11_InsuranceCompany> findAllInsuranceCompanies() {
		return insuranceCompanyRepo.findInsuranceCompaniesByDeleteFlag();
	}

	public HR11_InsuranceCompany updateInsuranceCompany(HR11_InsuranceCompany insuranceCompany) {
		insuranceCompany.setDeleteFlag(1);
		return insuranceCompanyRepo.save(insuranceCompany);
	}

	public HR11_InsuranceCompany findInsuranceCompanyById(Long insuranceCompanyId) {
		return insuranceCompanyRepo.findInsuranceCompanyByInsuranceCompanyId(insuranceCompanyId)
				.orElseThrow(() -> new UserNotFoundException("InsuranceCompany by id: " + insuranceCompanyId + " not found"));
	}


	public HR11_InsuranceCompany deleteInsuranceCompany(HR11_InsuranceCompany insuranceCompany) {
		insuranceCompany.setDeleteFlag(0);
		return insuranceCompanyRepo.save(insuranceCompany);
	}
}

