package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.User;
import net.oprup.HumanResource.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "*")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Project>> getAllProject(){
        List<Project> projects = projectService.findAllProject();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @GetMapping("/find/{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable("projectId") Long projectId){
        Project project = projectService.findProjectById(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }
//    @GetMapping("/emp-project/{projectId}")
//    public ResponseEntity<?> getProjectByProjectId(@PathVariable("projectId") Long projectId){
//        Project pro =  new Project();
//        pro.setProjectId(projectId);
//        List<Project> employeeProject = projectService.getAddressesOfEmployee(pro);
//        return new ResponseEntity<>(employeeProject, HttpStatus.OK);
//    }
    @PostMapping("/add")
    public ResponseEntity<Project> addProject(@RequestBody Project project){
        Project newProject = projectService.addProject(project);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Project> updateProject(@RequestBody Project project){
        Project updateProject = projectService.updateProject(project);
        return new ResponseEntity<>(updateProject, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Project> deleteProject(@RequestBody Project project){
        Project deleteProject = projectService.deleteProject(project);
        return new ResponseEntity<>(deleteProject, HttpStatus.OK);
    }


    //new
    @GetMapping("/count")

    public int getAllProjectsCount(){
        int records = (int) projectService.countOfProjects();
        return records;
    }
//    @GetMapping("/customer-projects/{id}")
//    public ResponseEntity<?> getProjectsByUsers(@PathVariable("id") Long id){
//        User users =  new User();
//        users.setId(id);
//        List<Project> projectList = projectService.getProjectsOfUsers(users);
//        return new ResponseEntity<>(projectList, HttpStatus.OK);
//    }


    @GetMapping("/allProjectwithEmployee")
    public ResponseEntity<List<Project>> getAllProjectAndEmployee(){
        List<Project> projects = projectService.getAllProjectAndEmployeeProject();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

}
