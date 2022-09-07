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
@Table(name="t13_employee_employed_information")
public class HR02_E11_EmployedInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="empId",nullable = false, updatable = false)
    private Long empId;
    private Integer deleteFlag;
    private String  employeeCode;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = HR04_Section.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "sectionId",referencedColumnName = "sectionId")
    private HR04_Section section;
    @ManyToOne(targetEntity = A02_InternalCompany.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "companyId",referencedColumnName = "companyId")
    private A02_InternalCompany company;

    @ManyToOne(targetEntity = HR05_CentralJob.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "centralId",referencedColumnName = "centralId")
    private HR05_CentralJob centralJob;

    @ManyToOne(targetEntity = HR06_JobTitle.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "jobId",referencedColumnName = "jobId")
    private HR06_JobTitle jobTitle;

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
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

    public HR04_Section getSection() {
        return section;
    }

    public void setSection(HR04_Section section) {
        this.section = section;
    }

    public HR05_CentralJob getCentralJob() {
        return centralJob;
    }

    public void setCentralJob(HR05_CentralJob centralJob) {
        this.centralJob = centralJob;
    }

    public HR06_JobTitle getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(HR06_JobTitle jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

//    public A02_InternalCompany getCompany() {
//        return company;
//    }
//
//    public void setCompany(A02_InternalCompany company) {
//        this.company = company;
//    }
}
