package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.KitchenRoom;
import net.oprup.HumanResource.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface KitchenRoomRepo extends JpaRepository<KitchenRoom, Long> {
    @Query("select k from KitchenRoom k where k.deleteFlag =1")
    List<KitchenRoom> findKitchenRoomByDeleteFlag();

    Optional<KitchenRoom> findKitchenRoomByKitchenId(Long kitchenId);
}
