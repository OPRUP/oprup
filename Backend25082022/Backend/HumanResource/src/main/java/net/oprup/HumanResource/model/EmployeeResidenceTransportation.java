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
@Table(name="employee_residence_transportation")
public class EmployeeResidenceTransportation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="employeeResTransId",nullable = false, updatable = false)
    private Long employeeResTransId;

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = Taskeen.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "habitationId",referencedColumnName = "habitationId")
    private Taskeen habitation;

    @ManyToOne(targetEntity = RoomsTaskeen.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "roomId",referencedColumnName = "roomId")
    private RoomsTaskeen room;

    @ManyToOne(targetEntity = Transportation.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "transportationMeanId",referencedColumnName = "transportationMeanId")
    private Transportation transportation;

    private String shift;

    private Integer deleteFlag;

    public Long getEmployeeResTransId() {
        return employeeResTransId;
    }

    public void setEmployeeResTransId(Long employeeResTransId) {
        this.employeeResTransId = employeeResTransId;
    }

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public Taskeen getHabitation() {
        return habitation;
    }

    public void setHabitation(Taskeen habitation) {
        this.habitation = habitation;
    }

    public RoomsTaskeen getRoom() {
        return room;
    }

    public void setRoom(RoomsTaskeen room) {
        this.room = room;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public Transportation getTransportation() {
        return transportation;
    }

    public void setTransportation(Transportation transportation) {
        this.transportation = transportation;
    }

    public String getShift() {
        return shift;
    }

    public void setShift(String shift) {
        this.shift = shift;
    }
}
