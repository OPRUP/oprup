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
@Table(name="salesInvoiceItem")


public class SalesInvoiceItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "salesInvoiceItemId", nullable = false, updatable = false)
    private long salesInvoiceItemId;
    private long salesInvoiceItemQuantity;
    private double salesInvoiceItemValue;
    private double salesInvoiceItemTotal;

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

    private long   numberOfEmployees;
    private Double operationFee;
    private double monthlyOperationFee;

    @ManyToOne(targetEntity = SalesInvoice.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "salesInvoiceId",referencedColumnName = "salesInvoiceId",nullable = false)
    private SalesInvoice salesInvoice;

    @ManyToOne(targetEntity = Item.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "itemId",referencedColumnName = "itemId",nullable = false)
    private Item item;



    private Integer deleteFlag;

    public long getSalesInvoiceItemId() {
        return salesInvoiceItemId;
    }

    public void setSalesInvoiceItemId(long salesInvoiceItemId) {
        this.salesInvoiceItemId = salesInvoiceItemId;
    }

    public long getSalesInvoiceItemQuantity() {
        return salesInvoiceItemQuantity;
    }

    public void setSalesInvoiceItemQuantity(long salesInvoiceItemQuantity) {
        this.salesInvoiceItemQuantity = salesInvoiceItemQuantity;
    }

    public double getSalesInvoiceItemValue() {
        return salesInvoiceItemValue;
    }

    public void setSalesInvoiceItemValue(double salesInvoiceItemValue) {
        this.salesInvoiceItemValue = salesInvoiceItemValue;
    }

    public double getSalesInvoiceItemTotal() {
        return salesInvoiceItemTotal;
    }

    public void setSalesInvoiceItemTotal(double salesInvoiceItemTotal) {
        this.salesInvoiceItemTotal = salesInvoiceItemTotal;
    }

    public long getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public void setNumberOfEmployees(long numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }

    public SalesInvoice getSalesInvoice() {
        return salesInvoice;
    }

    public void setSalesInvoice(SalesInvoice salesInvoice) {
        this.salesInvoice = salesInvoice;
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
