package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Taskeen;
import net.oprup.HumanResource.repo.TaskeenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TaskeenService {
    private final TaskeenRepo taskeenRepo;
    @Autowired

    public TaskeenService(TaskeenRepo taskeenRepo) {
        this.taskeenRepo = taskeenRepo;
    }
    public Taskeen addTaskeen(Taskeen taskeen){
        taskeen.setDeleteFlag(1);
        return taskeenRepo.save(taskeen);
    }
    public List<Taskeen> findAllTaskeen(){
        return  taskeenRepo.findTaskeenByDeleteFlag();
    }
    public Taskeen updateTaskeen(Taskeen taskeen){
        taskeen.setDeleteFlag(1);
        return taskeenRepo.save(taskeen);
    }
    public Taskeen findTaskeenById(Long habitationId){
        return (Taskeen) taskeenRepo.findTaskeenByHabitationId(habitationId)
                .orElseThrow(() -> new UserNotFoundException("Taskeen by id: " + habitationId + " not found"));
    }
    public Taskeen deleteTaskeen(Taskeen taskeen){
        taskeen.setDeleteFlag(0);
        return taskeenRepo.save(taskeen);
    }
}
