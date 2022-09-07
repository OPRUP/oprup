package net.oprup.HumanResource.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="t21_job_title")
public class HR06_JobTitle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="jobId",nullable = false, updatable = false)
    private Long jobId;
    private String jobTitleName;
    private String description;

    public String getJobCode() {
        return jobCode;
    }

    public void setJobCode(String jobCode) {
        this.jobCode = jobCode;
    }

    private Integer deleteFlag;
    private String jobCode;


    @ManyToOne(targetEntity = HR05_CentralJob.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "centralId",referencedColumnName = "centralId", nullable = false, updatable = false)
    private HR05_CentralJob centralJobs;

    public HR05_CentralJob getCentralJobs() {
        return centralJobs;
    }

    public void setCentralJobs(HR05_CentralJob centralJobs) {
        this.centralJobs = centralJobs;
    }

    public Long getJobId() {
        return jobId;
    }

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }

    public String getJobTitleName() {
        return jobTitleName;
    }

    public void setJobTitleName(String jobTitleName) {
        this.jobTitleName = jobTitleName;
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

}
