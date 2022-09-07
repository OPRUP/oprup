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
@Table(name="CreditNoticeItem")

public class CreditNoticeItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "creditNoticeItemId", nullable = false, updatable = false)
    private long creditNoticeItemId;
    private long creditNoticeItemQuantity;
    private double creditNoticeItemValue;
    private double creditNoticeItemTotal;
    private long   numberOfEmployees;
    private Double operationFee;
    private double monthlyOperationFee;
    @ManyToOne(targetEntity = CreditNotice.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "creditNoticeId",referencedColumnName = "creditNoticeId",nullable = false)
    private CreditNotice creditNotice;

    @ManyToOne(targetEntity = Item.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "itemId",referencedColumnName = "itemId",nullable = false)
    private Item item;



    private Integer deleteFlag;

    public long getCreditNoticeItemId() {
        return creditNoticeItemId;
    }

    public void setCreditNoticeItemId(long creditNoticeItemId) {
        this.creditNoticeItemId = creditNoticeItemId;
    }

    public long getCreditNoticeItemQuantity() {
        return creditNoticeItemQuantity;
    }

    public void setCreditNoticeItemQuantity(long creditNoticeItemQuantity) {
        this.creditNoticeItemQuantity = creditNoticeItemQuantity;
    }

    public double getCreditNoticeItemValue() {
        return creditNoticeItemValue;
    }

    public void setCreditNoticeItemValue(double creditNoticeItemValue) {
        this.creditNoticeItemValue = creditNoticeItemValue;
    }

    public double getCreditNoticeItemTotal() {
        return creditNoticeItemTotal;
    }

    public void setCreditNoticeItemTotal(double creditNoticeItemTotal) {
        this.creditNoticeItemTotal = creditNoticeItemTotal;
    }

    public long getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public void setNumberOfEmployees(long numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }

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

    public CreditNotice getCreditNotice() {
        return creditNotice;
    }

    public void setCreditNotice(CreditNotice creditNotice) {
        this.creditNotice = creditNotice;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
