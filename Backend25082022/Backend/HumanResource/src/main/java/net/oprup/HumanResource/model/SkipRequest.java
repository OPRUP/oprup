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
@Table(name="skipRequest")
public class SkipRequest implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SkipRequestId", nullable = false, updatable = false)
    private long skipRequestId;


    private LocalDate skipDate;

    private String description;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    public long getSkipRequestId() {
        return skipRequestId;
    }

    public void setSkipRequestId(long skipRequestId) {
        this.skipRequestId = skipRequestId;
    }

    public LocalDate getSkipDate() {
        return skipDate;
    }

    public void setSkipDate(LocalDate skipDate) {
        this.skipDate = skipDate.plusDays(1);
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

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }
}
