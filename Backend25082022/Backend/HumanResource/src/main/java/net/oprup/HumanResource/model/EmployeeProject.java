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
@Table(name="employeeProject")
public class EmployeeProject implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employeeProjectId", nullable = false, updatable = false)
    private long employeeProjectId;
    private Integer deleteFlag;

    public long getEmployeeProjectId() {
        return employeeProjectId;
    }

    public void setEmployeeProjectId(long employeeProjectId) {
        this.employeeProjectId = employeeProjectId;
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

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId",nullable = false)
    private HR02_E01_Employee employee;


    @ManyToOne(targetEntity = Project.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "projectId",referencedColumnName = "projectId",nullable = false)
    private Project project;

}
