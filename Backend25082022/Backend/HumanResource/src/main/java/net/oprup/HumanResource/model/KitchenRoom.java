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
@Table(name="KitchenRoom")

public class KitchenRoom implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kitchenId", nullable = false, updatable = false)
    private Long kitchenId;
    private String kitchenCode;
    private String gascylinders;
    private String gasStoves;
    private String tools;
    private String description;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = Taskeen.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "habitationId",referencedColumnName = "habitationId", nullable = false, updatable = true)
    private Taskeen taskeens;

    public Long getKitchenId() {
        return kitchenId;
    }

    public void setKitchenId(Long kitchenId) {
        this.kitchenId = kitchenId;
    }

    public String getKitchenCode() {
        return kitchenCode;
    }

    public void setKitchenCode(String kitchenCode) {
        this.kitchenCode = kitchenCode;
    }

    public String getGascylinders() {
        return gascylinders;
    }

    public void setGascylinders(String gascylinders) {
        this.gascylinders = gascylinders;
    }

    public String getGasStoves() {
        return gasStoves;
    }

    public void setGasStoves(String gasStoves) {
        this.gasStoves = gasStoves;
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
