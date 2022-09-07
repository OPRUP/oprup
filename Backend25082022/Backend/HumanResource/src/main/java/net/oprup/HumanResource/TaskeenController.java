package net.oprup.HumanResource;

import net.oprup.HumanResource.model.Taskeen;
import net.oprup.HumanResource.service.TaskeenService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/taskeen")
@CrossOrigin(origins = "*")
public class TaskeenController {
    private final TaskeenService taskeenService;

    public TaskeenController(TaskeenService taskeenService) {
        this.taskeenService = taskeenService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Taskeen>> getAllTaskeen(){
        List<Taskeen> taskeens = taskeenService.findAllTaskeen();
        return new ResponseEntity<>(taskeens, HttpStatus.OK);
    }
    @GetMapping("/find/{habitationId}")
    public ResponseEntity<Taskeen> getTaskeenById(@PathVariable("habitationId") Long habitationId){
        Taskeen taskeen = taskeenService.findTaskeenById(habitationId);
        return new ResponseEntity<>(taskeen, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Taskeen> addTaskeen(@RequestBody Taskeen taskeen){
        Taskeen newTaskeen = taskeenService.addTaskeen(taskeen);
        return new ResponseEntity<>(newTaskeen, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Taskeen> updateTaskeen(@RequestBody Taskeen taskeen){
        Taskeen updateTaskeen = taskeenService.updateTaskeen(taskeen);
        return new ResponseEntity<>(updateTaskeen, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<Taskeen> deleteTaskeen(@RequestBody Taskeen taskeen){
        Taskeen deleteTaskeen = taskeenService.deleteTaskeen(taskeen);
        return new ResponseEntity<>(deleteTaskeen, HttpStatus.OK);
    }
}
