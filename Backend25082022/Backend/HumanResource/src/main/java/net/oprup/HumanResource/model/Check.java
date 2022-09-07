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
@Table(name="acc_check")
public class Check implements Serializable {

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
    @ManyToOne(targetEntity = ReceiptVoucher.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "receiptVoucherId",referencedColumnName = "receiptVoucherId", nullable = false, updatable = true)
    private ReceiptVoucher receiptVoucher;

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

    public ReceiptVoucher getReceiptVoucher() {
        return receiptVoucher;
    }

    public void setReceiptVoucher(ReceiptVoucher receiptVoucher) {
        this.receiptVoucher = receiptVoucher;
    }
}
