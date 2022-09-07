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
@Table(name="renewingResidence")

public class RenewingResidence implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "renewingResidenceId", nullable = false, updatable = false)
    private long renewingResidenceId;

    private LocalDate expiryDate;
    private LocalDate submittingDate;
    private Integer deleteFlag;

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId",nullable = false,updatable = true)
    private HR02_E01_Employee employee;

    public long getRenewingResidenceId() {
        return renewingResidenceId;
    }

    public void setRenewingResidenceId(long renewingResidenceId) {
        this.renewingResidenceId = renewingResidenceId;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public LocalDate getSubmittingDate() {
        return submittingDate;
    }

    public void setSubmittingDate(LocalDate submittingDate) {
        this.submittingDate = submittingDate;
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
