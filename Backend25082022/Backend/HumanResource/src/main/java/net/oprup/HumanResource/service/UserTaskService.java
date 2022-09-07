package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.repo.UserTaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserTaskService {
    private final UserTaskRepo userTaskRepo;
    @Autowired
    public UserTaskService(UserTaskRepo userTaskRepo) {
        this.userTaskRepo = userTaskRepo;
    }
    public List<UserTask> getAll() {
        return userTaskRepo.findAll();

    }
    public List<UserTask> getUserOfEmployee(HR02_E01_Employee employee) {
        return userTaskRepo.findTaskByEmployee(employee);

    }

    public UserTask addUserTask(UserTask userTask){
        return userTaskRepo.save(userTask);
    }
    public UserTask UpdateUserTask(UserTask userTask){
        return userTaskRepo.save(userTask);
    }
    public UserTask deleteUserTask(UserTask userTask) {
        userTask.setDeleteFlag(0);
        return userTaskRepo.save(userTask);
    }
    public List<UserTask> findAllUserTasks(){
        return userTaskRepo.findUserTaskByDeleteFlag();
    }

    public UserTask findUserTaskById(Long taskId){
        return userTaskRepo.findUserTaskByTaskId(taskId)
                .orElseThrow(() -> new UserNotFoundException("CentralJob by id: " + taskId + " not found"));
    }
}
