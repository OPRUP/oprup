package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.Item;
import net.oprup.HumanResource.repo.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ItemService {
    private final ItemRepo itemRepo;
    @Autowired
    public ItemService(ItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }
    public Item addItem(Item vendor){
        vendor.setDeleteFlag(1);
        return itemRepo.save(vendor);
    }
    public List<Item> findAllItems(){
        return  itemRepo.deleteItemByDeleteFlag();
    }
    public Item updateItem(Item item){
        item.setDeleteFlag(1);
        return itemRepo.save(item);
    }
    public Item findItemById(Long itemId){
        return itemRepo.findItemByItemId(itemId)
                .orElseThrow(() -> new UserNotFoundException("Item by id: " + itemId + " not found"));
    }
    public Item deleteItem(Item item){
        item.setDeleteFlag(0);
        return itemRepo.save(item);
    }
    public Item findItemCode(String itemCode){
        return itemRepo.getItemCode(itemCode)
                .orElseThrow(() -> new UserNotFoundException("Item by id: " + itemCode + " not found"));

    }
}
