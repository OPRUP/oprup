package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.RoomsTaskeen;
import net.oprup.HumanResource.repo.ProjectRepo;
import net.oprup.HumanResource.repo.RoomsTaskeenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RoomsTaskeenService {
    private final RoomsTaskeenRepo roomsTaskeenRepo ;
    @Autowired
    public RoomsTaskeenService(RoomsTaskeenRepo roomsTaskeenRepo) {
        this.roomsTaskeenRepo = roomsTaskeenRepo;

    }
    public RoomsTaskeen addRoomsTaskeen(RoomsTaskeen roomsTaskeen){
        roomsTaskeen.setDeleteFlag(1);
        return roomsTaskeenRepo.save(roomsTaskeen);
    }
    public List<RoomsTaskeen> findAllRoomsTaskeen(){
        return  roomsTaskeenRepo.findRoomsTaskeenByDeleteFlag();
    }
    public RoomsTaskeen updateRoomsTaskeen(RoomsTaskeen roomsTaskeen){
        roomsTaskeen.setDeleteFlag(1);
        return roomsTaskeenRepo.save(roomsTaskeen);
    }
    public RoomsTaskeen findRoomsTaskeenById(Long roomId){
        return (RoomsTaskeen) roomsTaskeenRepo.findRoomsTaskeenByRoomId(roomId)
                .orElseThrow(() -> new UserNotFoundException("RoomsTaskeen by id: " + roomId + " not found"));
    }
    public RoomsTaskeen deleteRoomsTaskeen(RoomsTaskeen roomsTaskeen){
        roomsTaskeen.setDeleteFlag(0);
        return roomsTaskeenRepo.save(roomsTaskeen);
    }
}
