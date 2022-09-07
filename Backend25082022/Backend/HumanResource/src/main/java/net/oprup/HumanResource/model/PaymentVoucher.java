//package net.oprup.HumanResource.model;
//
//import java.io.Serializable;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.ToString;
//
//import javax.persistence.*;
//import java.io.Serializable;
//import java.time.LocalDate;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@ToString
//@Entity
//@Table(name="paymentVoucher")
//public class PaymentVoucher implements Serializable  {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "paymentVoucherId", nullable = false, updatable = false)
//    private Long paymentVoucherId;



//    @ManyToOne(targetEntity = Customer.class,fetch = FetchType.EAGER)
//    @JoinColumn(name = "customerId",referencedColumnName = "customerId")
//    private Customer customer;
//
//    private LocalDate dateVoucher;
//    private String paymentWay;
//    private String description;
//    private String cashAmount;
//    private Long  checkNumber;
//    private LocalDate dateCheck;
//    private String checkValue;
//    private Integer deleteFlag;
//
//    @ManyToOne(targetEntity = HR10_Bank.class,fetch = FetchType.EAGER)
//    @JoinColumn(name = "bankId",referencedColumnName = "bankId")
//    private HR10_Bank bank;

//    private String fundAccount;
//    private String checkAccount;



//}



package net.oprup.HumanResource.model;

import java.io.Serializable;
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
@Table(name="paymentVoucher")
public class PaymentVoucher implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentVoucherId", nullable = false, updatable = false)
    private Long paymentVoucherId;
    private String paymentVoucherNumber;

    private String description;
    private Long  checksAmount;
    private String cashAmount;
    private LocalDate voucherDate;
    private Integer deleteFlag;
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
    public Long getPaymentVoucherId() {
        return paymentVoucherId;
    }

    public void setPaymentVoucherId(Long paymentVoucherId) {
        this.paymentVoucherId = paymentVoucherId;
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

    public String getPaymentVoucherNumber() {
        return paymentVoucherNumber;
    }

    public void setPaymentVoucherNumber(String paymentVoucherNumber) {
        this.paymentVoucherNumber = paymentVoucherNumber;
    }
}

