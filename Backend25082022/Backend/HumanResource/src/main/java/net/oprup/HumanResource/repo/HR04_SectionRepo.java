package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR04_Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface HR04_SectionRepo extends JpaRepository<HR04_Section, Long> {
    Optional<HR04_Section> findSectionBySectionId(Long sectionId);

    @Query("select s from HR04_Section s where s.deleteFlag =1")
    List<HR04_Section> findSectionsByDeleteFlag();
}
