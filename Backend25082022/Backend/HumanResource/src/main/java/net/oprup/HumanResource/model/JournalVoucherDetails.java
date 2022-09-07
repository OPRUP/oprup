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
@Table(name="JournalVoucherDetails")
public class JournalVoucherDetails implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "journalVoucherDetailsId", nullable = false, updatable = false)
    private Long journalVoucherDetailsId;
//    private String accountNumber;
//    private String accountName;
    private String debit;
    private String credit;
    private String description;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "accountId",referencedColumnName = "accountId", nullable = false)
    private ChartAccount chartAccounts;
    @ManyToOne(targetEntity = JournalVoucher.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "journalVoucherId",referencedColumnName = "journalVoucherId", nullable = false)
    private JournalVoucher journalVoucher;

    @ManyToOne(targetEntity = CostCenter.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "costCenterId",referencedColumnName = "costCenterId")
    private CostCenter costCenter;

    public Long getJournalVoucherDetailsId() {
        return journalVoucherDetailsId;
    }

    public void setJournalVoucherDetailsId(Long journalVoucherDetailsId) {
        this.journalVoucherDetailsId = journalVoucherDetailsId;
    }



    public String getDebit() {
        return debit;
    }

    public void setDebit(String debit) {
        this.debit = debit;
    }

    public String getCredit() {
        return credit;
    }

    public void setCredit(String credit) {
        this.credit = credit;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public ChartAccount getChartAccounts() {
        return chartAccounts;
    }

    public void setChartAccounts(ChartAccount chartAccounts) {
        this.chartAccounts = chartAccounts;
    }

    public JournalVoucher getJournalVoucher() {
        return journalVoucher;
    }

    public void setJournalVoucher(JournalVoucher journalVoucher) {
        this.journalVoucher = journalVoucher;
    }

    public CostCenter getCostCenter() {
        return costCenter;
    }

    public void setCostCenter(CostCenter costCenter) {
        this.costCenter = costCenter;
    }
}

