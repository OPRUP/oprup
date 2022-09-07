package net.oprup.HumanResource;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.UserTaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/UserTask")
@CrossOrigin(origins = "*")
public class UserTaskController {
    private final UserTaskService userTaskService;

    public UserTaskController(UserTaskService userTaskService) {
        this.userTaskService = userTaskService;
    }
//    @GetMapping("/all")
//    public ResponseEntity<List<UserTask>> getAllTask(){
//        List<UserTask> userTasks = userTaskService.getAll();
//        return new ResponseEntity<>(userTasks, HttpStatus.OK);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<UserTask>> findAllTask(){
        List<UserTask> userTasks = userTaskService.findAllUserTasks();
        return new ResponseEntity<>(userTasks, HttpStatus.OK);
    }
    @GetMapping("/task/{employeeId}")
    public ResponseEntity<?> getUserTaskOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<UserTask> UserTask = userTaskService.getUserOfEmployee(emp);
        return new ResponseEntity<>(UserTask, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<UserTask> addTimeSheet(@RequestBody UserTask userTask){
        UserTask newUserTask = userTaskService.addUserTask(userTask);
        return new ResponseEntity<>(newUserTask, HttpStatus.CREATED);
    }



    @PutMapping("/update")
    public ResponseEntity<UserTask> updateUserTask(@RequestBody UserTask userTask){
        UserTask updateUserTask = userTaskService.UpdateUserTask(userTask);
        return new ResponseEntity<>(updateUserTask, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<UserTask> deleteUserTask(@RequestBody UserTask userTask){
        UserTask deleteUserTask = userTaskService.deleteUserTask(userTask);
        return new ResponseEntity<>(deleteUserTask, HttpStatus.OK);
    }

    @GetMapping("/find/{taskId}")
    public ResponseEntity<UserTask> getUserTaskById(@PathVariable("taskId") Long taskId){
        UserTask userTask = userTaskService.findUserTaskById(taskId);
        return new ResponseEntity<>(userTask, HttpStatus.OK);
    }
}
