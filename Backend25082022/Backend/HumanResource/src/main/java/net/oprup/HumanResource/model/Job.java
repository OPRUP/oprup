package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="job")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="jobId",nullable = false, updatable = false)
    private Long jobId;
    private String jobTitle;
    private String nationality;
    private Double mainSalary;
    private Double allowance;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "directSupervisor",referencedColumnName = "employeeId", nullable = false, updatable = false)
    private HR02_E01_Employee directSupervisor;
    private String internalExternal;
    private Integer deleteFlag;

    public Long getJobId() {
        return jobId;
    }

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public Double getMainSalary() {
        return mainSalary;
    }

    public void setMainSalary(Double mainSalary) {
        this.mainSalary = mainSalary;
    }

    public Double getAllowance() {
        return allowance;
    }

    public void setAllowance(Double allowance) {
        this.allowance = allowance;
    }

    public HR02_E01_Employee getDirectSupervisor() {
        return directSupervisor;
    }

    public void setDirectSupervisor(HR02_E01_Employee directSupervisor) {
        this.directSupervisor = directSupervisor;
    }

    public String getInternalExternal() {
        return internalExternal;
    }

    public void setInternalExternal(String internalExternal) {
        this.internalExternal = internalExternal;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
