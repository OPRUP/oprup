package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="hokome")
public class Hokome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="hokomeId",nullable = false, updatable = false)
    private Long hokomeId;
    private String visa;
    private LocalDate startVisaDate;
    private LocalDate endVisaDate;
    private String jobByVisa;
    private String typeVisa;
    private LocalDate enterVisaDate;
    private String medicalExaminationCode;
    private LocalDate procedureDate;
    private LocalDate medicalResultDate;
    private String medicalTestResult;
    private String insurancesCode;
    private String insurancesType;
    private LocalDate insurancesStartDate;
    private LocalDate insurancesEndDate;
    private String jobByResidence;
    private LocalDate warrantyDate;
    private String hijriWarrantyDate;
    private LocalDate exitDate;
    private LocalDate residenceIssue;
    private Integer deleteFlag;
    private String residenceNumber;
    private LocalDate residenceExpiry;

    public LocalDate getResidenceExpiry() {
        return residenceExpiry;
    }

    public void setResidenceExpiry(LocalDate residenceExpiry) {
        this.residenceExpiry = residenceExpiry.plusDays(1);
    }

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
    private HR02_E01_Employee employee;

    public Long getHokomeId() {
        return hokomeId;
    }

    public void setHokomeId(Long hokomeId) {
        this.hokomeId = hokomeId;
    }

    public String getVisa() {
        return visa;
    }

    public void setVisa(String visa) {
        this.visa = visa;
    }

    public LocalDate getStartVisaDate() {
        return startVisaDate;
    }

    public void setStartVisaDate(LocalDate startVisaDate) {
        this.startVisaDate = startVisaDate.plusDays(1);
    }

    public LocalDate getEndVisaDate() {
        return endVisaDate;
    }

    public void setEndVisaDate(LocalDate endVisaDate) {
        this.endVisaDate = endVisaDate.plusDays(1);
    }

    public String getJobByVisa() {
        return jobByVisa;
    }

    public void setJobByVisa(String jobByVisa) {
        this.jobByVisa = jobByVisa;
    }

    public String getTypeVisa() {
        return typeVisa;
    }

    public void setTypeVisa(String typeVisa) {
        this.typeVisa = typeVisa;
    }

    public LocalDate getEnterVisaDate() {
        return enterVisaDate;
    }

    public void setEnterVisaDate(LocalDate enterVisaDate) {
        this.enterVisaDate = enterVisaDate.plusDays(1);
    }

    public String getMedicalExaminationCode() {
        return medicalExaminationCode;
    }

    public void setMedicalExaminationCode(String medicalExaminationCode) {
        this.medicalExaminationCode = medicalExaminationCode;
    }

    public LocalDate getProcedureDate() {
        return procedureDate;
    }

    public void setProcedureDate(LocalDate procedureDate) {
        this.procedureDate = procedureDate.plusDays(1);
    }

    public LocalDate getMedicalResultDate() {
        return medicalResultDate;
    }

    public void setMedicalResultDate(LocalDate medicalResultDate) {
        this.medicalResultDate = medicalResultDate.plusDays(1);
    }

    public String getMedicalTestResult() {
        return medicalTestResult;
    }

    public void setMedicalTestResult(String medicalTestResult) {
        this.medicalTestResult = medicalTestResult;
    }

    public String getInsurancesCode() {
        return insurancesCode;
    }

    public void setInsurancesCode(String insurancesCode) {
        this.insurancesCode = insurancesCode;
    }

    public String getInsurancesType() {
        return insurancesType;
    }

    public void setInsurancesType(String insurancesType) {
        this.insurancesType = insurancesType;
    }

    public LocalDate getInsurancesStartDate() {
        return insurancesStartDate;
    }

    public void setInsurancesStartDate(LocalDate insurancesStartDate) {
        this.insurancesStartDate = insurancesStartDate.plusDays(1);
    }

    public LocalDate getInsurancesEndDate() {
        return insurancesEndDate;
    }

    public void setInsurancesEndDate(LocalDate insurancesEndDate) {
        this.insurancesEndDate = insurancesEndDate.plusDays(1);
    }

//    public String getResidencyCode() {
//        return residencyCode;
//    }
//
//    public void setResidencyCode(String residencyCode) {
//        this.residencyCode = residencyCode;
//    }
//
//    public LocalDate getResidenceStartDate() {
//        return residenceStartDate;
//    }
//
//    public void setResidenceStartDate(LocalDate residenceStartDate) {
//        this.residenceStartDate = residenceStartDate.plusDays(1);
//    }

    public String getJobByResidence() {
        return jobByResidence;
    }

    public void setJobByResidence(String jobByResidence) {
        this.jobByResidence = jobByResidence;
    }

    public LocalDate getWarrantyDate() {
        return warrantyDate;
    }

    public void setWarrantyDate(LocalDate warrantyDate) {
        this.warrantyDate = warrantyDate.plusDays(1);
    }

    public String getHijriWarrantyDate() {
        return hijriWarrantyDate;
    }

    public void setHijriWarrantyDate(String hijriWarrantyDate) {
        this.hijriWarrantyDate = hijriWarrantyDate;
    }

    public LocalDate getExitDate() {
        return exitDate;
    }

    public void setExitDate(LocalDate exitDate) {
        this.exitDate = exitDate.plusDays(1);
    }



    public String getResidenceNumber() {
        return residenceNumber;
    }

    public void setResidenceNumber(String residenceNumber) {
        this.residenceNumber = residenceNumber;
    }

    public LocalDate getResidenceIssue() {
        return residenceIssue;
    }

    public void setResidenceIssue(LocalDate residenceIssue) {
        this.residenceIssue = residenceIssue.plusDays(1);
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
