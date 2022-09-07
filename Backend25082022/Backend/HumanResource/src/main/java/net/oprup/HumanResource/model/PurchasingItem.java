package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="PurchasingItem")

public class PurchasingItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "purchasingItemId", nullable = false, updatable = false)
    private long purchasingItemId;
    private long purchasingItemQuantity;
    private long purchasingItemValue;
    private long numberOfEmployee;

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    private long purchasingItemTotal;

 private Integer deleteFlag;

    public long getNumberOfEmployee() {
        return numberOfEmployee;
    }

    public void setNumberOfEmployee(long numberOfEmployee) {
        this.numberOfEmployee = numberOfEmployee;
    }

    public long getPurchasingItemId() {
        return purchasingItemId;
    }

    public void setPurchasingItemId(long purchasingItemId) {
        this.purchasingItemId = purchasingItemId;
    }

    public long getPurchasingItemQuantity() {
        return purchasingItemQuantity;
    }

    public void setPurchasingItemQuantity(long purchasingItemQuantity) {
        this.purchasingItemQuantity = purchasingItemQuantity;
    }

    public long getPurchasingItemValue() {
        return purchasingItemValue;
    }

    public void setPurchasingItemValue(long purchasingItemValue) {
        this.purchasingItemValue = purchasingItemValue;
    }

    public long getPurchasingItemTotal() {
        return purchasingItemTotal;
    }

    public void setPurchasingItemTotal(long purchasingItemTotal) {
        this.purchasingItemTotal = purchasingItemTotal;
    }

    public Purchasing getPurchasing() {
        return purchasing;
    }

    public void setPurchasing(Purchasing purchasing) {
        this.purchasing = purchasing;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }


    @ManyToOne(targetEntity = Purchasing.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "purchasingInvoiceId",referencedColumnName = "purchasingInvoiceId", nullable = false, updatable = false)
    private Purchasing purchasing;

    @ManyToOne(targetEntity = Item.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "itemId",referencedColumnName = "itemId")
    private Item item;


}
