package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="quotationItem")
public class QuotationItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quotationItemId", nullable = false, updatable = false)
    private long quotationItemId;


    private Double quotationItemValue;
    private Double quotationItemTotalValue;

    private Double operationFee;
    private double monthlyOperationFee;

    public Double getOperationFee() {
        return operationFee;
    }

    public void setOperationFee(Double operationFee) {
        this.operationFee = operationFee;
    }

    public double getMonthlyOperationFee() {
        return monthlyOperationFee;
    }

    public void setMonthlyOperationFee(double monthlyOperationFee) {
        this.monthlyOperationFee = monthlyOperationFee;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    private Long quantity;
    private Integer deleteFlag;

    @ManyToOne(targetEntity = Item.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "itemId",referencedColumnName = "itemId", nullable = false)
    private Item item;

    @ManyToOne(targetEntity = Quotation.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "quotationId",referencedColumnName = "quotationId", nullable = false)
    private Quotation quotation;

//    public Long getNumberHours() {
//        return numberHours;
//    }
//
//    public void setNumberHours(Long numberHours) {
//        this.numberHours = numberHours;
//    }

    public Long getQuotationItemId() {
        return quotationItemId;
    }

    public void setQuotationItemId(long quotationItemId) {
        this.quotationItemId = quotationItemId;
    }

    public void setQuotationItemId(Long quotationItemId) {
        this.quotationItemId = quotationItemId;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Quotation getQuotation() {
        return quotation;
    }

    public void setQuotation(Quotation quotation) {
        this.quotation = quotation;
    }

//    public Long getQuotationItemQuantity() {
//        return quotationItemQuantity;
//    }
//
//    public void setQuotationItemQuantity(Long quotationItemQuantity) {
//        this.quotationItemQuantity = quotationItemQuantity;
//    }

    public Double getQuotationItemValue() {
        return quotationItemValue;
    }

    public void setQuotationItemValue(Double quotationItemValue) {
        this.quotationItemValue = quotationItemValue;
    }

    public Double getQuotationItemTotalValue() {
        return quotationItemTotalValue;
    }

    public void setQuotationItemTotalValue(Double quotationItemTotalValue) {
        this.quotationItemTotalValue = quotationItemTotalValue;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
