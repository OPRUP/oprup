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
@Table(name="Transportation")
public class Transportation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transportationMeanId", nullable = false)
    private Long transportationMeanId;
    private String transportationMeanCode;
    private String transportationMeanType;
    private String transportationMeanNumber;
    private LocalDate transportationMeanBuyingDate;
    private LocalDate licenseReleaseDate;
    private LocalDate licenseExpiryDate;
    private String licensePhoto;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId" , nullable = false)
    private HR02_E01_Employee employees;

    public Long getTransportationMeanId() {
        return transportationMeanId;
    }

    public void setTransportationMeanId(Long transportationMeanId) {
        this.transportationMeanId = transportationMeanId;
    }

    public String getTransportationMeanCode() {
        return transportationMeanCode;
    }

    public void setTransportationMeanCode(String transportationMeanCode) {
        this.transportationMeanCode = transportationMeanCode;
    }

    public String getTransportationMeanType() {
        return transportationMeanType;
    }

    public void setTransportationMeanType(String transportationMeanType) {
        this.transportationMeanType = transportationMeanType;
    }

    public String getTransportationMeanNumber() {
        return transportationMeanNumber;
    }

    public void setTransportationMeanNumber(String transportationMeanNumber) {
        this.transportationMeanNumber = transportationMeanNumber;
    }

    public LocalDate getTransportationMeanBuyingDate() {
        return transportationMeanBuyingDate;
    }

    public void setTransportationMeanBuyingDate(LocalDate transportationMeanBuyingDate) {
        this.transportationMeanBuyingDate = transportationMeanBuyingDate.plusDays(1);
    }

    public LocalDate getLicenseReleaseDate() {
        return licenseReleaseDate;
    }

    public void setLicenseReleaseDate(LocalDate licenseReleaseDate) {
        this.licenseReleaseDate = licenseReleaseDate.plusDays(1);
    }

    public LocalDate getLicenseExpiryDate() {
        return licenseExpiryDate;
    }

    public void setLicenseExpiryDate(LocalDate licenseExpiryDate) {
        this.licenseExpiryDate = licenseExpiryDate.plusDays(1);
    }

    public String getLicensePhoto() {
        return licensePhoto;
    }

    public void setLicensePhoto(String licensePhoto) {
        this.licensePhoto = licensePhoto;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public HR02_E01_Employee getEmployees() {
        return employees;
    }

    public void setEmployees(HR02_E01_Employee employees) {
        this.employees = employees;
    }
}
