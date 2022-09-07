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
@Table(name="payment_check")
public class PaymentCheck implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "checkId", nullable = false, updatable = false)
    private Long checkId;
    private String checkNumber;
    private String checkValue;
    private LocalDate checkDate;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR10_Bank.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "bankId",referencedColumnName = "bankId", nullable = false, updatable = true)
    private HR10_Bank bank;
    @ManyToOne(targetEntity = PaymentVoucher.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "paymentVoucherId",referencedColumnName = "paymentVoucherId", nullable = false, updatable = true)
    private PaymentVoucher paymentVoucher;

    public Long getCheckId() {
        return checkId;
    }

    public void setCheckId(Long checkId) {
        this.checkId = checkId;
    }

    public String getCheckNumber() {
        return checkNumber;
    }

    public void setCheckNumber(String checkNumber) {
        this.checkNumber = checkNumber;
    }

    public String getCheckValue() {
        return checkValue;
    }

    public void setCheckValue(String checkValue) {
        this.checkValue = checkValue;
    }

    public LocalDate getCheckDate() {
        return checkDate;
    }

    public void setCheckDate(LocalDate checkDate) {
        this.checkDate = checkDate;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public HR10_Bank getBank() {
        return bank;
    }

    public void setBank(HR10_Bank bank) {
        this.bank = bank;
    }

    public PaymentVoucher getPaymentVoucher() {
        return paymentVoucher;
    }

    public void setPaymentVoucher(PaymentVoucher paymentVoucher) {
        this.paymentVoucher = paymentVoucher;
    }
}
