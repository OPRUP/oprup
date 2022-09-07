package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SurveyRepo extends JpaRepository<Survey, Long> {

    @Query("select p from Survey p where p.deleteFlag =1")
    List<Survey> deleteSurveyByDeleteFlag();

}
