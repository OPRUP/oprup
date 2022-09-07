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
@Table(name="recruitmentCompany")
public class RecruitmentCompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="recruitmentCompanyId",nullable = false, updatable = false)
    private Long recruitmentCompanyId;
    private String companyName;
    private String numberOfProvidedVisas;
    private String country;
    private String commercialRegister;
    private String contactNumber;
    private String ownerName;
    private String focalPointName;
    private String documents;
    private Integer deleteFlag;

    public Long getRecruitmentCompanyId() {
        return recruitmentCompanyId;
    }

    public void setRecruitmentCompanyId(Long recruitmentCompanyId) {
        this.recruitmentCompanyId = recruitmentCompanyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getNumberOfProvidedVisas() {
        return numberOfProvidedVisas;
    }

    public void setNumberOfProvidedVisas(String numberOfProvidedVisas) {
        this.numberOfProvidedVisas = numberOfProvidedVisas;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCommercialRegister() {
        return commercialRegister;
    }

    public void setCommercialRegister(String commercialRegister) {
        this.commercialRegister = commercialRegister;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getFocalPointName() {
        return focalPointName;
    }

    public void setFocalPointName(String focalPointName) {
        this.focalPointName = focalPointName;
    }

    public String getDocuments() {
        return documents;
    }

    public void setDocuments(String documents) {
        this.documents = documents;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
