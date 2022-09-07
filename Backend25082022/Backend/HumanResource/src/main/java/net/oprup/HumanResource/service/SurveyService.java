package net.oprup.HumanResource.service;

import net.oprup.HumanResource.model.Survey;
import net.oprup.HumanResource.model.Vendor;
import net.oprup.HumanResource.repo.SurveyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SurveyService {

    private final SurveyRepo surveyRepo;

    @Autowired
    public SurveyService(SurveyRepo surveyRepo) {
        this.surveyRepo = surveyRepo;
    }

    public Survey addSurvey(Survey survey){
        survey.setDeleteFlag(1);
        return surveyRepo.save(survey);
    }

    public List<Survey> findAllSurvey(){
        return  surveyRepo.deleteSurveyByDeleteFlag();
    }

}
