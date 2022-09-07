package net.oprup.HumanResource;

import net.oprup.HumanResource.model.HR04_Section;
import net.oprup.HumanResource.service.HR04_SectionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/section")
@CrossOrigin(origins = "*")
public class HR04_SectionController {

    private final HR04_SectionService sectionService;

    public HR04_SectionController(HR04_SectionService sectionService) {
        this.sectionService = sectionService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<HR04_Section>> getAllSections(){
        List<HR04_Section> sections = sectionService.findAllSections();
        return new ResponseEntity<>(sections, HttpStatus.OK);
    }

    @GetMapping("/find/{sectionId}")
    public ResponseEntity<HR04_Section> getSectionById(@PathVariable("sectionId") Long sectionId){
        HR04_Section section = sectionService.findSectionById(sectionId);
        return new ResponseEntity<>(section, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR04_Section> addSection(@RequestBody HR04_Section section){
        HR04_Section newSection = sectionService.addSection(section);
        return new ResponseEntity<>(newSection, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<HR04_Section> updateSection(@RequestBody HR04_Section section){
        HR04_Section updateSection = sectionService.updateSection(section);
        return new ResponseEntity<>(updateSection, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<HR04_Section> deleteSection(@RequestBody HR04_Section section){
        HR04_Section deleteSection = sectionService.deleteSection(section);
        return new ResponseEntity<>(deleteSection, HttpStatus.OK);
    }


}
