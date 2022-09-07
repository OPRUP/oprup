package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.Hokome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HokomeRepo extends JpaRepository<Hokome, Long> {
    Optional<Hokome> findHokomeByhokomeId(Long hokomeId);

    @Query("select e from Hokome e where e.deleteFlag =1")
    List<Hokome> findByDeleteFlag();
    List<Hokome> findHokomeByEmployee(HR02_E01_Employee employee);

    //new


    @Query("select count(e) from Hokome e where e.medicalExaminationCode is null")
    long countByMedicalExaminationCode();

    @Query("select count(e) from Hokome e where e.insurancesCode is null")
    long countByInsurancesCode();

    @Query("select count(e) from Hokome e where e.insurancesCode is not null and e.medicalExaminationCode is not null and e.residenceNumber is null ")
    long countResidenceByInsurancesCodeAndMedicalExaminationCode();

    @Query("select e from Hokome e where e.medicalExaminationCode is null")
    List<Hokome> getAllByMedicalExaminationCode();

    @Query("select e from Hokome e where e.insurancesCode is null")
    List<Hokome> getAllByInsurancesCode();

    @Query("select e from Hokome e where e.insurancesCode is not null and e.medicalExaminationCode is not null and e.residenceNumber is null ")
    List<Hokome> getAllByNotHaveResidenceYet();
    @Query(value = "SELECT * FROM hokome  WHERE DATEDIFF(residence_expiry,CURDATE())<60",nativeQuery = true)
    List<Hokome> getNotification();
}

