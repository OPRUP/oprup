package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.KitchenRoom;
import net.oprup.HumanResource.repo.KitchenRoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class KitchenRoomService {
    private final KitchenRoomRepo kitchenRoomRepo;
    @Autowired
    public KitchenRoomService(KitchenRoomRepo kitchenRoomRepo) {
        this.kitchenRoomRepo = kitchenRoomRepo;

    }
    public KitchenRoom addKitchenRoom(KitchenRoom kitchenRoom){
        kitchenRoom.setDeleteFlag(1);
        return kitchenRoomRepo.save(kitchenRoom);
    }
    public List<KitchenRoom> findAllKitchenRoom(){
        return  kitchenRoomRepo.findKitchenRoomByDeleteFlag();
    }
    public KitchenRoom updateKitchenRoom(KitchenRoom kitchenRoom){
        kitchenRoom.setDeleteFlag(1);
        return kitchenRoomRepo.save(kitchenRoom);
    }
    public KitchenRoom findKitchenRoomById(Long kitchenId){
        return (KitchenRoom) kitchenRoomRepo.findKitchenRoomByKitchenId(kitchenId)
                .orElseThrow(() -> new UserNotFoundException("Kitchen by id: " + kitchenId + " not found"));
    }
    public KitchenRoom deleteKitchenRoom(KitchenRoom kitchenRoom){
        kitchenRoom.setDeleteFlag(0);
        return kitchenRoomRepo.save(kitchenRoom);
    }
}
