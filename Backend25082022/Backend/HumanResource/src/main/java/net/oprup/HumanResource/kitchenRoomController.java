package net.oprup.HumanResource;

import net.oprup.HumanResource.model.KitchenRoom;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.service.KitchenRoomService;
import net.oprup.HumanResource.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/kitchenRoom")
@CrossOrigin(origins = "*")

public class kitchenRoomController {
    private final KitchenRoomService kitchenRoomService;
    public kitchenRoomController(KitchenRoomService kitchenRoomService) {
        this.kitchenRoomService = kitchenRoomService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<KitchenRoom>> getAllKitchenRoom(){
        List<KitchenRoom> kitchenRooms = kitchenRoomService.findAllKitchenRoom();
        return new ResponseEntity<>(kitchenRooms, HttpStatus.OK);
    }
    @GetMapping("/find/{kitchenId}")
    public ResponseEntity<KitchenRoom> getKitchenRoomById(@PathVariable("kitchenId") Long kitchenId){
        KitchenRoom kitchenRoom = kitchenRoomService.findKitchenRoomById(kitchenId);
        return new ResponseEntity<>(kitchenRoom, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<KitchenRoom> addKitchenRoom(@RequestBody KitchenRoom kitchenRoom){
        KitchenRoom newKitchenRoom = kitchenRoomService.addKitchenRoom(kitchenRoom);
        return new ResponseEntity<>(newKitchenRoom, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<KitchenRoom> updateKitchenRoom(@RequestBody KitchenRoom kitchenRoom){
        KitchenRoom updateKitchenRoom = kitchenRoomService.updateKitchenRoom(kitchenRoom);
        return new ResponseEntity<>(updateKitchenRoom, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<KitchenRoom> deleteKitchenRoom(@RequestBody KitchenRoom kitchenRoom){
        KitchenRoom deleteKitchenRoom = kitchenRoomService.deleteKitchenRoom(kitchenRoom);
        return new ResponseEntity<>(deleteKitchenRoom, HttpStatus.OK);
    }
}
