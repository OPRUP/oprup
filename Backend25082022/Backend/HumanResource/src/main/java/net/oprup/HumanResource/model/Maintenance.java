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
@Table(name="Maintenance")
public class Maintenance implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maintenanceId", nullable = false, updatable = false)
    private Long maintenanceId;
    private String maintenanceType;
    private String numberOfKm;
    private LocalDate maintenanceDate;
    private LocalDate nextMaintenanceDate;
    private LocalDate licenseExpiryDate;
    private String technicalCheck;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = Transportation.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "transportationMeanId",referencedColumnName = "transportationMeanId", nullable = false, updatable = true)
    private Transportation transportations;

    public Long getMaintenanceId() {
        return maintenanceId;
    }

    public void setMaintenanceId(Long maintenanceId) {
        this.maintenanceId = maintenanceId;
    }

    public String getMaintenanceType() {
        return maintenanceType;
    }

    public void setMaintenanceType(String maintenanceType) {
        this.maintenanceType = maintenanceType;
    }

    public String getNumberOfKm() {
        return numberOfKm;
    }

    public void setNumberOfKm(String numberOfKm) {
        this.numberOfKm = numberOfKm;
    }

    public LocalDate getMaintenanceDate() {
        return maintenanceDate;
    }

    public void setMaintenanceDate(LocalDate maintenanceDate) {
        this.maintenanceDate = maintenanceDate.plusDays(1);
    }

    public LocalDate getNextMaintenanceDate() {
        return nextMaintenanceDate;
    }

    public void setNextMaintenanceDate(LocalDate nextMaintenanceDate) {
        this.nextMaintenanceDate = nextMaintenanceDate.plusDays(1);
    }

    public LocalDate getLicenseExpiryDate() {
        return licenseExpiryDate;
    }

    public void setLicenseExpiryDate(LocalDate licenseExpiryDate) {
        this.licenseExpiryDate = licenseExpiryDate.plusDays(1);
    }

    public String getTechnicalCheck() {
        return technicalCheck;
    }

    public void setTechnicalCheck(String technicalCheck) {
        this.technicalCheck = technicalCheck;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public Transportation getTransportations() {
        return transportations;
    }

    public void setTransportations(Transportation transportations) {
        this.transportations = transportations;
    }
}
