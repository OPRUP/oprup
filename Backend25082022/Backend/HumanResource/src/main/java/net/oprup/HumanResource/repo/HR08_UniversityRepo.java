package net.oprup.HumanResource.repo;

import java.util.List;
import java.util.Optional;

import net.oprup.HumanResource.model.HR08_University;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;


public interface HR08_UniversityRepo extends JpaRepository<HR08_University, Long>{
	Optional<HR08_University> findUniversityByUniversityId(Long universityId);

	@Query("select u from HR08_University u where u.deleteFlag =1")
	List<HR08_University> findUniversitiesByDeleteFlag();

}