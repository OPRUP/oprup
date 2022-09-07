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
@Table(name="t07_employee_address")
public class HR02_E05_Address implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="addressId",nullable = false, updatable = false)
    private Long addressId;
    private String email;

    private String email2;
    private String number;

    public String getEmail2() {
        return email2;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getNumber2() {
        return number2;
    }

    public void setNumber2(String number2) {
        this.number2 = number2;
    }

    private String number2;
    private String countryAddress;
    private String countryContactNumber;
    private String residenceAddress;
    private String residenceContactNumber;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountryAddress() {
        return countryAddress;
    }

    public void setCountryAddress(String countryAddress) {
        this.countryAddress = countryAddress;
    }

    public String getCountryContactNumber() {
        return countryContactNumber;
    }

    public void setCountryContactNumber(String countryContactNumber) {
        this.countryContactNumber = countryContactNumber;
    }

    public String getResidenceAddress() {
        return residenceAddress;
    }

    public void setResidenceAddress(String residenceAddress) {
        this.residenceAddress = residenceAddress;
    }

    public String getResidenceContactNumber() {
        return residenceContactNumber;
    }

    public void setResidenceContactNumber(String residenceContactNumber) {
        this.residenceContactNumber = residenceContactNumber;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

}
