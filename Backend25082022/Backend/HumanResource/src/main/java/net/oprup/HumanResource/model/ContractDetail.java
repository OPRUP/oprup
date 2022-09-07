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
@Table(name="contract_detail")
public class ContractDetail implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="contractDetailId",nullable = false, updatable = false)
    private Long contractDetailId;
    private String salaryObjectType;
    private Long allowanceAmount;
    private Long deductionAmount;
    private Integer deleteFlag;

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = HR02_E09_Contract.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "contractId",referencedColumnName = "contractId")
    private HR02_E09_Contract contract;

    @ManyToOne(targetEntity = SalaryObject.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "salaryObjectId",referencedColumnName = "salaryObjectId")
    private SalaryObject salaryObject;

    public Long getContractDetailId() {
        return contractDetailId;
    }

    public void setContractDetailId(Long contractDetailId) {
        this.contractDetailId = contractDetailId;
    }

    public String getSalaryObjectType() {
        return salaryObjectType;
    }

    public void setSalaryObjectType(String salaryObjectType) {
        this.salaryObjectType = salaryObjectType;
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

    public SalaryObject getSalaryObject() {
        return salaryObject;
    }

    public void setSalaryObject(SalaryObject salaryObject) {
        this.salaryObject = salaryObject;
    }
}
