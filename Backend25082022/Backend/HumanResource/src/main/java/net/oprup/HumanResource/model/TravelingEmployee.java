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
@Table(name="travelingemployee ")
public class TravelingEmployee  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TravelingEmployeeId", nullable = false, updatable = false)
    private long travelingEmployeeId;

    @ManyToOne(targetEntity = Taskeen.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "habitationId",referencedColumnName = "habitationId")
    private Taskeen habitation;

    @ManyToOne(targetEntity = RoomsTaskeen.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "roomId",referencedColumnName = "roomId")
    private RoomsTaskeen room;


    private LocalDate backDate;
    private LocalDate travilinDate;
    private Integer deleteFlag;

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId",nullable = false,updatable = false  )
    private HR02_E01_Employee employee;

    public long getTravelingEmployeeId() {
        return travelingEmployeeId;
    }

    public void setTravelingEmployeeId(long travelingEmployeeId) {
        this.travelingEmployeeId = travelingEmployeeId;
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

    public LocalDate getBackDate() {
        return backDate;
    }

    public void setBackDate(LocalDate backDate) {
        this.backDate = backDate.plusDays(1);
    }

    public LocalDate getTravilinDate() {
        return travilinDate;
    }

    public void setTravilinDate(LocalDate travilinDate) {
        this.travilinDate = travilinDate.plusDays(1);
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
