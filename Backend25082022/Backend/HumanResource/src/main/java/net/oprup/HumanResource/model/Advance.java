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
@Table(name="advance")
public class Advance implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="advanceId",nullable = false, updatable = false)

    private Long advanceId;
    private LocalDate submissionDate;
    private double advanceAmount;
    private double numberOfInstallment;
    private double monthlyPayment;
    private int approve;
    private int deductionStartMonth;
    private int deductionStartYear;
    



    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId",nullable = false, updatable = false)
    private HR02_E01_Employee employee;

    public Long getAdvanceId() {
        return advanceId;
    }

    public void setAdvanceId(Long advanceId) {
        this.advanceId = advanceId;
    }

    public LocalDate getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(LocalDate submissionDate) {
        this.submissionDate = submissionDate;
    }

    public double getAdvanceAmount() {
        return advanceAmount;
    }

    public void setAdvanceAmount(double advanceAmount) {
        this.advanceAmount = advanceAmount;
    }

    public double getNumberOfInstallment() {
        return numberOfInstallment;
    }

    public void setNumberOfInstallment(double numberOfInstallment) {
        this.numberOfInstallment = numberOfInstallment;
    }

    public double getMonthlyPayment() {
        return monthlyPayment;
    }

    public void setMonthlyPayment(double monthlyPayment) {
        this.monthlyPayment = monthlyPayment;
    }

    public int getApprove() {
        return approve;
    }

    public void setApprove(int approve) {
        this.approve = approve;
    }

    public int getDeductionStartMonth() {
        return deductionStartMonth;
    }

    public void setDeductionStartMonth(int deductionStartMonth) {
        this.deductionStartMonth = deductionStartMonth;
    }

    public int getDeductionStartYear() {
        return deductionStartYear;
    }

    public void setDeductionStartYear(int deductionStartYear) {
        this.deductionStartYear = deductionStartYear;
    }

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }
}
