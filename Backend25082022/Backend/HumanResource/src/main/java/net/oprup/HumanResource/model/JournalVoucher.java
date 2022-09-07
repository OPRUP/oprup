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
@Table(name="JournalVoucher")
public class JournalVoucher implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "journalVoucherId", nullable = false, updatable = false)
    private Long journalVoucherId;
    private String journalVoucherNumber;
    private LocalDate dateVoucher;
    private Integer deleteFlag;
//    private String accountNumber;
//    private String accountName;
//    private String debit;
//    private String credit;
//    private String description;


    public Long getJournalVoucherId() {
        return journalVoucherId;
    }

    public void setJournalVoucherId(Long journalVoucherId) {
        this.journalVoucherId = journalVoucherId;
    }

    public String getJournalVoucherNumber() {
        return journalVoucherNumber;
    }

    public void setJournalVoucherNumber(String journalVoucherNumber) {
        this.journalVoucherNumber = journalVoucherNumber;
    }

    public LocalDate getDateVoucher() {
        return dateVoucher;
    }

    public void setDateVoucher(LocalDate dateVoucher) {
        this.dateVoucher = dateVoucher.plusDays(1);
    }

//    public String getAccountNumber() {
//        return accountNumber;
//    }
//
//    public void setAccountNumber(String accountNumber) {
//        this.accountNumber = accountNumber;
//    }
//
//    public String getAccountName() {
//        return accountName;
//    }
//
//    public void setAccountName(String accountName) {
//        this.accountName = accountName;
//    }
//
//    public String getDebit() {
//        return debit;
//    }
//
//    public void setDebit(String debit) {
//        this.debit = debit;
//    }
//
//    public String getCredit() {
//        return credit;
//    }
//
//    public void setCredit(String credit) {
//        this.credit = credit;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }


}

