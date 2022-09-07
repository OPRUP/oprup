package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR04_Section;
import net.oprup.HumanResource.repo.HR04_SectionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR04_SectionService {

    private final HR04_SectionRepo sectionRepo;


    @Autowired
    public HR04_SectionService(HR04_SectionRepo sectionRepo) {
        this.sectionRepo = sectionRepo;
    }

    public HR04_Section addSection(HR04_Section section){
        section.setDeleteFlag(1);
        return sectionRepo.save(section);
    }

    public List<HR04_Section> findAllSections(){
        return  sectionRepo.findSectionsByDeleteFlag();
    }

    public HR04_Section updateSection(HR04_Section section){
        section.setDeleteFlag(1);
        return sectionRepo.save(section);
    }

    public HR04_Section findSectionById(Long sectionId){
        return sectionRepo.findSectionBySectionId(sectionId)
                .orElseThrow(() -> new UserNotFoundException("Section by id: " + sectionId + " not found"));
    }

    public HR04_Section deleteSection(HR04_Section section){
        section.setDeleteFlag(0);
        return sectionRepo.save(section);
    }
}
