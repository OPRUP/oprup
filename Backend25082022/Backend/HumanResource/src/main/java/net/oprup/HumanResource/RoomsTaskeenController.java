package net.oprup.HumanResource;

import net.oprup.HumanResource.model.RoomsTaskeen;
import net.oprup.HumanResource.service.RoomsTaskeenService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roomsTaskeen")
@CrossOrigin(origins = "*")

public class RoomsTaskeenController {
    private final RoomsTaskeenService roomsTaskeenService;

    public RoomsTaskeenController(RoomsTaskeenService roomsTaskeenService) {
        this.roomsTaskeenService = roomsTaskeenService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<RoomsTaskeen>> getAllRoomsTaskeen(){
        List<RoomsTaskeen> roomsTaskeens = roomsTaskeenService.findAllRoomsTaskeen();
        return new ResponseEntity<>(roomsTaskeens, HttpStatus.OK);
    }
    @GetMapping("/find/{roomId}")
    public ResponseEntity<RoomsTaskeen> getRoomsTaskeenServiceById(@PathVariable("roomId") Long roomId){
        RoomsTaskeen roomsTaskeen = roomsTaskeenService.findRoomsTaskeenById(roomId);
        return new ResponseEntity<>(roomsTaskeen, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<RoomsTaskeen> addRoomsTaskeen(@RequestBody RoomsTaskeen roomsTaskeen){
        RoomsTaskeen newRoomsTaskeen = roomsTaskeenService.addRoomsTaskeen(roomsTaskeen);
        return new ResponseEntity<>(newRoomsTaskeen, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<RoomsTaskeen> updateRoomsTaskeen(@RequestBody RoomsTaskeen roomsTaskeen){
        RoomsTaskeen updateRoomsTaskeen = roomsTaskeenService.updateRoomsTaskeen(roomsTaskeen);
        return new ResponseEntity<>(updateRoomsTaskeen, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<RoomsTaskeen> deleteRoomsTaskeen(@RequestBody RoomsTaskeen roomsTaskeen){
        RoomsTaskeen deleteRoomsTaskeen = roomsTaskeenService.deleteRoomsTaskeen(roomsTaskeen);
        return new ResponseEntity<>(deleteRoomsTaskeen, HttpStatus.OK);
    }
}
