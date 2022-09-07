package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ItemRepo extends JpaRepository<Item , Long> {


    Optional<Item> findItemByItemId(Long itemId);

    @Query("select e from Item e where e.deleteFlag =1")
    List<Item> deleteItemByDeleteFlag();

    @Query("select i from Item i WHERE i.itemCode=:item_code and i.deleteFlag =1")
    Optional<Item> getItemCode(@Param("item_code") String item_code);
}
