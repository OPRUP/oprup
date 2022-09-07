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
@Table(name="ATMCardRequest")
public class ATMCardRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="creditCardRequestId",nullable = false, updatable = false)
    private Long creditCardRequestId;
    private LocalDate date ;
    private String reason ;
    private Integer approve;
//    private Integer deleteFlag;

//    public Integer getDeleteFlag() {
//        return deleteFlag;
//    }
//
//    public void setDeleteFlag(Integer deleteFlag) {
//        this.deleteFlag = deleteFlag;
//    }

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId" )
    private HR02_E01_Employee employee;

    public Long getATMCardRequestId() {
        return creditCardRequestId;
    }

    public void setATMCardRequestId(Long creditCardRequestId) {
        this.creditCardRequestId = creditCardRequestId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Integer getApprove() {
        return approve;
    }

    public void setApprove(Integer approve) {
        this.approve = approve;
    }

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }


}