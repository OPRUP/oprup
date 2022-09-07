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
@Table(name="DebtorNoticeItem")

public class DebtorNoticeItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "debtorNoticeItemId", nullable = false, updatable = false)
    private long debtorNoticeItemId;
    private long debtorNoticeItemQuantity;
    private double debtorNoticeItemValue;
    private double debtorNoticeItemTotal;
    private long   numberOfEmployees;
    private Double operationFee;
    private double monthlyOperationFee;
    @ManyToOne(targetEntity = DebtorNotice.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "debtorNoticeId",referencedColumnName = "debtorNoticeId",nullable = false)
    private DebtorNotice debtorNotice;

    @ManyToOne(targetEntity = Item.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "itemId",referencedColumnName = "itemId",nullable = false)
    private Item item;



    private Integer deleteFlag;

    public long getDebtorNoticeItemId() {
        return debtorNoticeItemId;
    }

    public void setDebtorNoticeItemId(long debtorNoticeItemId) {
        this.debtorNoticeItemId = debtorNoticeItemId;
    }

    public long getDebtorNoticeItemQuantity() {
        return debtorNoticeItemQuantity;
    }

    public void setDebtorNoticeItemQuantity(long debtorNoticeItemQuantity) {
        this.debtorNoticeItemQuantity = debtorNoticeItemQuantity;
    }

    public double getDebtorNoticeItemValue() {
        return debtorNoticeItemValue;
    }

    public void setDebtorNoticeItemValue(double debtorNoticeItemValue) {
        this.debtorNoticeItemValue = debtorNoticeItemValue;
    }

    public double getDebtorNoticeItemTotal() {
        return debtorNoticeItemTotal;
    }

    public void setDebtorNoticeItemTotal(double debtorNoticeItemTotal) {
        this.debtorNoticeItemTotal = debtorNoticeItemTotal;
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

    public DebtorNotice getDebtorNotice() {
        return debtorNotice;
    }

    public void setDebtorNotice(DebtorNotice debtorNotice) {
        this.debtorNotice = debtorNotice;
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
