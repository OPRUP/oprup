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
@Table(name="t11_employee_contract")
public class HR02_E09_Contract implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="contractId",nullable = false, updatable = false)
    private Long contractId;
    private String contractType;

    public String getQiwaCode() {
        return qiwaCode;
    }

    public void setQiwaCode(String qiwaCode) {
        this.qiwaCode = qiwaCode;
    }

    private LocalDate dateFrom;
    private LocalDate dateTo;
    private int vacationDayNumber;
    private String qiwaCode;
    private Integer deleteFlag;

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId", nullable = true)
    private HR02_E01_Employee employee;

    public Long getContractId() {
        return contractId;
    }

    public void setContractId(Long contractId) {
        this.contractId = contractId;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public LocalDate getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(LocalDate dateFrom) {
        this.dateFrom = dateFrom.plusDays(1);
    }

    public LocalDate getDateTo() {
        return dateTo;
    }

    public void setDateTo(LocalDate dateTo) {
        this.dateTo = dateTo.plusDays(1);
    }

    public int getVacationDayNumber() {
        return vacationDayNumber;
    }

    public void setVacationDayNumber(int vacationDayNumber) {
        this.vacationDayNumber = vacationDayNumber;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }


}
