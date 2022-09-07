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
@Table(name="Purchasing")
public class Purchasing implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "purchasingInvoiceId", nullable = false, updatable = false)
    private Long purchasingInvoiceId;
    private String purchasingInvoiceNumber;
    private String purchasingInvoiceType;
    private LocalDate date;
    private Integer deleteFlag;
    private double amount;
    private  double tax;
    private double total;

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "vendorAccount",referencedColumnName = "accountId")
    private ChartAccount vendorAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "cashAccount",referencedColumnName = "accountId")
    private ChartAccount cashAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "taxAccount",referencedColumnName = "accountId")
    private ChartAccount taxAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "purchasingAccount",referencedColumnName = "accountId")
    private ChartAccount purchasingAccount;
    @ManyToOne(targetEntity = CostCenter.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "costCenterId",referencedColumnName = "costCenterId",nullable = false)
    private CostCenter costCenter;

    public Long getPurchasingInvoiceId() {
        return purchasingInvoiceId;
    }

    public void setPurchasingInvoiceId(Long purchasingInvoiceId) {
        this.purchasingInvoiceId = purchasingInvoiceId;
    }

    public String getPurchasingInvoiceNumber() {
        return purchasingInvoiceNumber;
    }

    public void setPurchasingInvoiceNumber(String purchasingInvoiceNumber) {
        this.purchasingInvoiceNumber = purchasingInvoiceNumber;
    }

    public String getPurchasingInvoiceType() {
        return purchasingInvoiceType;
    }

    public void setPurchasingInvoiceType(String purchasingInvoiceType) {
        this.purchasingInvoiceType = purchasingInvoiceType;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date.plusDays(1);
    }

    public ChartAccount getVendorAccount() {
        return vendorAccount;
    }

    public void setVendorAccount(ChartAccount vendorAccount) {
        this.vendorAccount = vendorAccount;
    }

    public ChartAccount getCashAccount() {
        return cashAccount;
    }

    public void setCashAccount(ChartAccount cashAccount) {
        this.cashAccount = cashAccount;
    }

    public ChartAccount getTaxAccount() {
        return taxAccount;
    }

    public void setTaxAccount(ChartAccount taxAccount) {
        this.taxAccount = taxAccount;
    }

    public ChartAccount getPurchasingAccount() {
        return purchasingAccount;
    }

    public void setPurchasingAccount(ChartAccount purchasingAccount) {
        this.purchasingAccount = purchasingAccount;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public CostCenter getCostCenter() {
        return costCenter;
    }

    public void setCostCenter(CostCenter costCenter) {
        this.costCenter = costCenter;
    }
}
