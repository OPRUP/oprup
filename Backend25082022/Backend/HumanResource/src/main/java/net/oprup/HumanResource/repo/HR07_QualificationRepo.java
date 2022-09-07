package net.oprup.HumanResource.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import net.oprup.HumanResource.model.HR07_Qualification;
import org.springframework.data.jpa.repository.Query;

public interface HR07_QualificationRepo extends JpaRepository<HR07_Qualification, Long>{
	Optional<HR07_Qualification> findQualificationByQualificationId(Long qualificationId);

	@Query("select q from HR07_Qualification q where q.deleteFlag =1")
	List<HR07_Qualification> findQualificationsByDeleteFlag();
}