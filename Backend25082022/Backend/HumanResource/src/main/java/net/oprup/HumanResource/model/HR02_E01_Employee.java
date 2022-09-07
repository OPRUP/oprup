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
@Table(name="t03_employee")
public class HR02_E01_Employee  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="employeeId",nullable = false, updatable = false)
    private Long employeeId;
    private String employeeName;
    private String employeeNameAr;
    private String employeeCompanyId;
    private String employeePartCompanyId;
    private String placeOfBirth;
    private LocalDate dateOfBirth;
    private LocalDate dateOfJoin;
    private String hijriDateOfJoin;
    private String gender;
    private String maritalStatus;
    private String nationality;
    private String religion;


    public String getHijriDateOfJoin() {
        return hijriDateOfJoin;
    }

    public void setHijriDateOfJoin(String hijriDateOfJoin) {
        this.hijriDateOfJoin = hijriDateOfJoin;
    }



    private Integer deleteFlag;


    @ManyToOne(targetEntity = A02_InternalCompany.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "companyId",referencedColumnName = "companyId")
    private A02_InternalCompany companies;

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmployeeNameAr() {
        return employeeNameAr;
    }

    public void setEmployeeNameAr(String employeeNameAr) {
        this.employeeNameAr = employeeNameAr;
    }

    public String getEmployeeCompanyId() {
        return employeeCompanyId;
    }

    public void setEmployeeCompanyId(String employeeCompanyId) {
        this.employeeCompanyId = employeeCompanyId;
    }

    public String getEmployeePartCompanyId() {
        return employeePartCompanyId;
    }

    public void setEmployeePartCompanyId(String employeePartCompanyId) {
        this.employeePartCompanyId = employeePartCompanyId;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public void setPlaceOfBirth(String placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public LocalDate getDateOfJoin() {
        return dateOfJoin;
    }

    public void setDateOfJoin(LocalDate dateOfJoin) {
        this.dateOfJoin = dateOfJoin;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public A02_InternalCompany getCompanies() {
        return companies;
    }

    public void setCompanies(A02_InternalCompany companies) {
        this.companies = companies;
    }


}
