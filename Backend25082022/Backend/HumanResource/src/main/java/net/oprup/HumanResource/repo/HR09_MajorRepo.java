package net.oprup.HumanResource.repo;

import java.util.List;
import java.util.Optional;

import net.oprup.HumanResource.model.HR09_Major;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;

public interface HR09_MajorRepo extends JpaRepository<HR09_Major, Long>{
	Optional<HR09_Major> findMajorByMajorId(Long majorId);

	@Query("select m from HR09_Major m where m.deleteFlag =1")
	List<HR09_Major> findMajorsByDeleteFlag();

}