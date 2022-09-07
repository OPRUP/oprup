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
@Table(name="receiptVoucher")
public class ReceiptVoucher implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receiptVoucherId", nullable = false, updatable = false)
    private Long receiptVoucherId;
    private String description;
    private Long  checksAmount;
    private String cashAmount;
    private LocalDate voucherDate;
    private Integer deleteFlag;
    private String receiptVoucherNumber;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "vendorAccount",referencedColumnName = "accountId", nullable = false, updatable = true)
    private ChartAccount vendorAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "cashAccount",referencedColumnName = "accountId", nullable = false, updatable = true)
    private ChartAccount cashAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "checksAccount",referencedColumnName = "accountId", nullable = false, updatable = true)
    private ChartAccount checksAccount;
    @ManyToOne(targetEntity = CostCenter.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "costCenterId",referencedColumnName = "costCenterId",nullable = false)
    private CostCenter costCenter;

    public Long getReceiptVoucherId() {
        return receiptVoucherId;
    }

    public void setReceiptVoucherId(Long receiptVoucherId) {
        this.receiptVoucherId = receiptVoucherId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getChecksAmount() {
        return checksAmount;
    }

    public void setChecksAmount(Long checksAmount) {
        this.checksAmount = checksAmount;
    }

    public String getCashAmount() {
        return cashAmount;
    }

    public void setCashAmount(String cashAmount) {
        this.cashAmount = cashAmount;
    }

    public LocalDate getVoucherDate() {
        return voucherDate;
    }

    public void setVoucherDate(LocalDate voucherDate) {
        this.voucherDate = voucherDate;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
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

    public ChartAccount getChecksAccount() {
        return checksAccount;
    }

    public void setChecksAccount(ChartAccount checksAccount) {
        this.checksAccount = checksAccount;
    }

    public CostCenter getCostCenter() {
        return costCenter;
    }

    public void setCostCenter(CostCenter costCenter) {
        this.costCenter = costCenter;
    }

    public String getReceiptVoucherNumber() {
        return receiptVoucherNumber;
    }

    public void setReceiptVoucherNumber(String receiptVoucherNumber) {
        this.receiptVoucherNumber = receiptVoucherNumber;
    }
}
