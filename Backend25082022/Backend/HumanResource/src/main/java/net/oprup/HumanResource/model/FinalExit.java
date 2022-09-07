
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
@Table(name="finalExit")
public class FinalExit implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="finalExitId",nullable = false)
    private Long finalExitId;
    private String  ticket ;
    private LocalDate exitDate ;
    private String reason ;
    private Integer deleteFlag;
    private Integer approve;
    private Integer reject;

    public Integer getApprove() {
        return approve;
    }

    public void setApprove(Integer approve) {
        this.approve = approve;
    }

    public Integer getReject() {
        return reject;
    }

    public void setReject(Integer reject) {
        this.reject = reject;
    }

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
//    nullable = false
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId" )
    private HR02_E01_Employee employee;

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public Long getFinalExitId() {
        return finalExitId;
    }

    public void setFinalExitId(Long finalExitId) {
        this.finalExitId = finalExitId;
    }

    public String getReason() {
        return reason;
    }

    public String getTicket() {
        return ticket;
    }

    public void setTicket(String ticket) {
        this.ticket = ticket;
    }

    public LocalDate getExitDate() {
        return exitDate;
    }

    public void setExitDate(LocalDate exitDate) {
        this.exitDate = exitDate;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
