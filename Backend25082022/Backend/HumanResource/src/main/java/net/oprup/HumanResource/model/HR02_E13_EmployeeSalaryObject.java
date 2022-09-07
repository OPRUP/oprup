package net.oprup.HumanResource.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(	name = "t15_employee_salary_object")
public class HR02_E13_EmployeeSalaryObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="employeeSalaryObjectId",nullable = false, updatable = false)
    private Long employeeSalaryObjectId;
    private String type;
    private Long allowanceAmount;
    private Long deductionAmount;
    private String createdDate;
    private String endDate;
    private Integer deleteFlag;


    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    //salary object
    @ManyToOne(targetEntity = SalaryObject.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "salaryObjectId",referencedColumnName = "salaryObjectId")
    private SalaryObject salaryObject;

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public Long getEmployeeSalaryObjectId() {
        return employeeSalaryObjectId;
    }

    public void setEmployeeSalaryObjectId(Long employeeSalaryObjectId) {
        this.employeeSalaryObjectId = employeeSalaryObjectId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getAllowanceAmount() {
        return allowanceAmount;
    }

    public void setAllowanceAmount(Long allowanceAmount) {
        this.allowanceAmount = allowanceAmount;
    }

    public Long getDeductionAmount() {
        return deductionAmount;
    }

    public void setDeductionAmount(Long deductionAmount) {
        this.deductionAmount = deductionAmount;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }


    public SalaryObject getSalaryObject() {
        return salaryObject;
    }

    public void setSalaryObject(SalaryObject salaryObject) {
        this.salaryObject = salaryObject;
    }
}

