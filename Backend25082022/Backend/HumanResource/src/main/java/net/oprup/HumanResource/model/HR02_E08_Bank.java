package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="t10_employee_bank")
public class HR02_E08_Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="empBankId",nullable = false, updatable = false)
    private Long empBankId;
    private String bankBranch;
    private String accountType;
    private String accountNumber;
    private String iban;
    private String swiftCode;
    private Integer deleteFlag;
    private String creditCardNumber;
    private LocalDate creditCardExpiry;


    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = HR10_Bank.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "bankId",referencedColumnName = "bankId")
    private HR10_Bank bank;

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public HR10_Bank getBank() {
        return bank;
    }

    public String getSwiftCode() {
        return swiftCode;
    }

    public void setSwiftCode(String swiftCode) {
        this.swiftCode = swiftCode;
    }

    public void setBank(HR10_Bank bank) {
        this.bank = bank;
    }

    public Long getEmpBankId() {
        return empBankId;
    }

    public void setEmpBankId(Long empBankId) {
        this.empBankId = empBankId;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public String getBankBranch() {
        return bankBranch;
    }

    public void setBankBranch(String bankBranch) {
        this.bankBranch = bankBranch;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

}
