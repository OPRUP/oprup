package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.SalaryObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SalaryObjectRepo extends JpaRepository<SalaryObject, Long> {

    Optional<SalaryObject> findSalaryObjectBySalaryObjectId(Long salaryObjectId);

    @Query("select s from SalaryObject s where s.deleteFlag =1")
    List<SalaryObject> findSalaryObjectByDeleteFlag();
}

