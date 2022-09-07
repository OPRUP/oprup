package net.oprup.HumanResource.service;

import com.sun.istack.NotNull;
import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Project;

import net.oprup.HumanResource.model.User;
import net.oprup.HumanResource.repo.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProjectService {

    private final ProjectRepo projectRepo;
    @Autowired
    public ProjectService(ProjectRepo projectRepo) {
        this.projectRepo = projectRepo;

    }
    public Project addProject(Project project){
        project.setDeleteFlag(1);
        return projectRepo.save(project);
    }
    public List<Project> findAllProject(){
        return  projectRepo.findProjectByDeleteFlag();
    }

    public Project updateProject(Project project){
        project.setDeleteFlag(1);
        return projectRepo.save(project);
    }
    public Project findProjectById(Long projectId){
        return (Project) projectRepo.findProjectByProjectId(projectId)
                .orElseThrow(() -> new UserNotFoundException("Project by id: " + projectId + " not found"));
    }
    public Project deleteProject(Project project){
        project.setDeleteFlag(0);
        return projectRepo.save(project);
    }



    //new

    public long countOfProjects(){return projectRepo.countByProjects();}

//    public List<Project> getProjectsOfUsers(User users) {
//        return projectRepo.findProjectsByUsers(users);
//    }

    public List<Project>  getAllProjectAndEmployeeProject(){return projectRepo.getProjectsAndEmployeeProject();}

}
