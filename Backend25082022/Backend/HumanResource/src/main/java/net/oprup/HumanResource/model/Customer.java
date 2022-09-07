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
@Table(name="customer")

public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerId", nullable = false, updatable = false)
    private long customerId;
    private LocalDate date;
    private String numberCR;
    private  String customerAccountNumber;
    private String nameAr;
    private String nameEn;
    private String countryAr;
    private String contractSignerNameAr;
    private String contractSignerNameEn;

    public String getContractSignerIdNumber() {
        return contractSignerIdNumber;
    }

    public void setContractSignerIdNumber(String contractSignerIdNumber) {
        this.contractSignerIdNumber = contractSignerIdNumber;
    }

    public String getContractSignerPhoneNumber() {
        return contractSignerPhoneNumber;
    }

    public void setContractSignerPhoneNumber(String contractSignerPhoneNumber) {
        this.contractSignerPhoneNumber = contractSignerPhoneNumber;
    }

    public String getContractSignerEmail() {
        return contractSignerEmail;
    }

    public void setContractSignerEmail(String contractSignerEmail) {
        this.contractSignerEmail = contractSignerEmail;
    }

    private String contractSignerIdNumber;
    private String contractSignerPhoneNumber;
    private String contractSignerEmail;
    private String designation;
    private String nationality;
    private  String countryEn;
    private String followerNameAr;
    private String followerNameEn;
    private String followerContactNumber;
    private String followerEmail;
    private String customerStatus;
    private String notesAndUpdates;


    public String getContractDuration() {
        return contractDuration;
    }

    public void setContractDuration(String contractDuration) {
        this.contractDuration = contractDuration;
    }

    private String contractDuration;
    private  String contactPerson;
    private  String contactNumber ;
    private  String email ;
    private  String details ;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "accountId",referencedColumnName = "accountId", nullable = true)
    private ChartAccount chartAccounts;

    public ChartAccount getChartAccounts() {
        return chartAccounts;
    }

    public void setChartAccounts(ChartAccount chartAccounts) {
        this.chartAccounts = chartAccounts;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    private Integer deleteFlag;
    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public String getCustomerAccountNumber() {
        return customerAccountNumber;
    }

    public void setCustomerAccountNumber(String customerAccountNumber) {
        this.customerAccountNumber = customerAccountNumber;
    }

    public String getNameEn() {
        return nameEn;
    }

    public void setNameEn(String nameEn) {
        this.nameEn = nameEn;
    }

    public String getCountryAr() {
        return countryAr;
    }

    public void setCountryAr(String countryAr) {
        this.countryAr = countryAr;
    }

    public LocalDate getDate() {
        return date;
    }

    public String getNumberCR() {
        return numberCR;
    }

    public void setNumberCR(String numberCR) {
        this.numberCR = numberCR;
    }

    public void setDate(LocalDate date) {
        this.date = date.plusDays(1);
    }

    public String getContractSignerNameAr() {
        return contractSignerNameAr;
    }

    public void setContractSignerNameAr(String contractSignerNameAr) {
        this.contractSignerNameAr = contractSignerNameAr;
    }

    public String getContractSignerNameEn() {
        return contractSignerNameEn;
    }

    public void setContractSignerNameEn(String contractSignerNameEn) {
        this.contractSignerNameEn = contractSignerNameEn;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getCountryEn() {
        return countryEn;
    }

    public void setCountryEn(String countryEn) {
        this.countryEn = countryEn;
    }

    public String getFollowerNameAr() {
        return followerNameAr;
    }

    public void setFollowerNameAr(String followerNameAr) {
        this.followerNameAr = followerNameAr;
    }

    public String getFollowerNameEn() {
        return followerNameEn;
    }

    public void setFollowerNameEn(String followerNameEn) {
        this.followerNameEn = followerNameEn;
    }

    public String getFollowerContactNumber() {
        return followerContactNumber;
    }

    public void setFollowerContactNumber(String followerContactNumber) {
        this.followerContactNumber = followerContactNumber;
    }

    public String getFollowerEmail() {
        return followerEmail;
    }

    public void setFollowerEmail(String followerEmail) {
        this.followerEmail = followerEmail;
    }

    public String getCustomerStatus() {
        return customerStatus;
    }

    public void setCustomerStatus(String customerStatus) {
        this.customerStatus = customerStatus;
    }

    public String getNotesAndUpdates() {
        return notesAndUpdates;
    }

    public void setNotesAndUpdates(String notesAndUpdates) {
        this.notesAndUpdates = notesAndUpdates;
    }


    public String getNameAr() {
        return nameAr;
    }

    public void setNameAr(String nameAr) {
        this.nameAr = nameAr;
    }




    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }




}
