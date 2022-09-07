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
@Table(name="t05_employee_document")
public class HR02_E03_Document implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="documentId",nullable = false, updatable = false)
    private Long documentId;
    private String documentType;
    private String documentNumber;
    private LocalDate documentDateExpiry;
    private String documentFile;
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

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public Long getDocumentId() {
        return documentId;
    }

    public void setDocumentId(Long documentId) {
        this.documentId = documentId;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }


    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public LocalDate getDocumentDateExpiry() {
        return documentDateExpiry;
    }

    public void setDocumentDateExpiry(LocalDate documentDateExpiry) {
        this.documentDateExpiry = documentDateExpiry.plusDays(1);
    }

    public String getDocumentFile() {
        return documentFile;
    }

    public void setDocumentFile(String documentFile) {
        this.documentFile = documentFile;
    }
}
