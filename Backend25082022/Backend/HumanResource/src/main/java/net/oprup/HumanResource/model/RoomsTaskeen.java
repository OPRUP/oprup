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
@Table(name="RoomsTaskeen")
public class RoomsTaskeen implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "roomId", nullable = false, updatable = false)
    private Long roomId;
    private String roomCode;
    private String bids;
    private String lockers;
    private String conditioners;
    private String tools;
    private String description;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = Taskeen.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "habitationId",referencedColumnName = "habitationId", nullable = false, updatable = true)
    private Taskeen taskeens;

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public String getRoomCode() {
        return roomCode;
    }

    public void setRoomCode(String roomCode) {
        this.roomCode = roomCode;
    }

    public String getBids() {
        return bids;
    }

    public void setBids(String bids) {
        this.bids = bids;
    }

    public String getLockers() {
        return lockers;
    }

    public void setLockers(String lockers) {
        this.lockers = lockers;
    }

    public String getConditioners() {
        return conditioners;
    }

    public void setConditioners(String conditioners) {
        this.conditioners = conditioners;
    }

    public String getTools() {
        return tools;
    }

    public void setTools(String tools) {
        this.tools = tools;
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

    public Taskeen getTaskeens() {
        return taskeens;
    }

    public void setTaskeens(Taskeen taskeens) {
        this.taskeens = taskeens;
    }
}
