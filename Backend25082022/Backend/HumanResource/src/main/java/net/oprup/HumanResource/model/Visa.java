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
@Table(name="visa")
public class Visa implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "visaInformationId", nullable = false, updatable = false) 
    private long 	visaInformationId ;

    private String approvalNumber   ;
    private String numberOfProvidedVisas;

    public long getVisaInformationId() {
        return visaInformationId;
    }

    public void setVisaInformationId(long visaInformationId) {
        this.visaInformationId = visaInformationId;
    }

    public String getApprovalNumber() {
        return approvalNumber;
    }

    public void setApprovalNumber(String approvalNumber) {
        this.approvalNumber = approvalNumber;
    }

    public String getNumberOfProvidedVisas() {
        return numberOfProvidedVisas;
    }

    public void setNumberOfProvidedVisas(String numberOfProvidedVisas) {
        this.numberOfProvidedVisas = numberOfProvidedVisas;
    }

    public String getJobs() {
        return jobs;
    }

    public void setJobs(String jobs) {
        this.jobs = jobs;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(LocalDate approvalDate) {
        this.approvalDate = approvalDate;
    }

    public String getCopy() {
        return copy;
    }

    public void setCopy(String copy) {
        this.copy = copy;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    private String jobs ;
    private String nationality  ;
    private String gender;
    private LocalDate approvalDate ;
    private String copy;
    private Integer deleteFlag;
}
