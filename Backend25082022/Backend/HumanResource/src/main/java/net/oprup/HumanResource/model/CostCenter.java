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
@Table(name="CostCenter")
public class CostCenter  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="costCenterId",nullable = false, updatable = false)
    private Long costCenterId;
    private String costCenterName;
    private String costCenterNumber;
    private Integer deleteFlag;

    public Long getCostCenterId() {
        return costCenterId;
    }

    public void setCostCenterId(Long costCenterId) {
        this.costCenterId = costCenterId;
    }

    public String getCostCenterName() {
        return costCenterName;
    }

    public void setCostCenterName(String costCenterName) {
        this.costCenterName = costCenterName;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public String getCostCenterNumber() {
        return costCenterNumber;
    }

    public void setCostCenterNumber(String costCenterNumber) {
        this.costCenterNumber = costCenterNumber;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
