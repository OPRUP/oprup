package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Project;
import net.oprup.HumanResource.model.RoomsTaskeen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RoomsTaskeenRepo extends JpaRepository<RoomsTaskeen, Long> {

    @Query("select r from RoomsTaskeen r where r.deleteFlag =1")
    List<RoomsTaskeen> findRoomsTaskeenByDeleteFlag();

    Optional<RoomsTaskeen> findRoomsTaskeenByRoomId(Long roomId);
}

