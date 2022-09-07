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
@Table(name="t08_employee_qualification")
public class HR02_E06_Qualification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="employeeQualificationId",nullable = false, updatable = false)
    private Long employeeQualificationId;
    private LocalDate dateFrom;
    private LocalDate dateTo;
    private String degree;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = HR07_Qualification.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "qualificationId",referencedColumnName = "qualificationId")
    private HR07_Qualification qualification;

    @ManyToOne(targetEntity = HR08_University.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "universityId",referencedColumnName = "universityId")
    private HR08_University university;

    @ManyToOne(targetEntity = HR09_Major.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "majorId",referencedColumnName = "majorId")
    private HR09_Major major;

    public Long getEmployeeQualificationId() {
        return employeeQualificationId;
    }

    public void setEmployeeQualificationId(Long employeeQualificationId) {
        this.employeeQualificationId = employeeQualificationId;
    }

    public LocalDate getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(LocalDate dateFrom) {
        this.dateFrom = dateFrom;
    }

    public LocalDate getDateTo() {
        return dateTo;
    }

    public void setDateTo(LocalDate dateTo) {
        this.dateTo = dateTo;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
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

    public HR07_Qualification getQualification() {
        return qualification;
    }

    public void setQualification(HR07_Qualification qualification) {
        this.qualification = qualification;
    }

    public HR08_University getUniversity() {
        return university;
    }

    public void setUniversity(HR08_University university) {
        this.university = university;
    }

    public HR09_Major getMajor() {
        return major;
    }

    public void setMajor(HR09_Major major) {
        this.major = major;
    }
}
