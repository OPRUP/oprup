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
@Table(name="quotation")
public class Quotation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quotationId", nullable = false, updatable = false)
    private Long quotationId;

    private String quotationAutoNum ;
    private String description;
    private String advancedPayment;

    public String getAdvancedPayment() {
        return advancedPayment;
    }

    public void setAdvancedPayment(String advancedPayment) {
        this.advancedPayment = advancedPayment;
    }

    public String getGeneralTerms() {
        return GeneralTerms;
    }

    public void setGeneralTerms(String generalTerms) {
        GeneralTerms = generalTerms;
    }

    private String GeneralTerms;
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getQuotationStatus() {
        return quotationStatus;
    }

    public void setQuotationStatus(String quotationStatus) {
        this.quotationStatus = quotationStatus;
    }

    private String quotationStatus;
    private LocalDate date;


    public String getQuotationAutoNum() {
        return quotationAutoNum;
    }

    public void setQuotationAutoNum(String quotationAutoNum) {
        this.quotationAutoNum = quotationAutoNum;
    }

    private Integer deleteFlag;
//    private Integer approve;

    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId",nullable = false ,updatable = true )
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = Customer.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId",referencedColumnName = "customerId",nullable = false, updatable = true )
    private Customer customer;

    public Customer getCustomer() {
        return customer;
    }



    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Long getQuotationId() {
        return quotationId;
    }

    public void setQuotationId(Long quotationId) {
        this.quotationId = quotationId;
    }




    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

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
//    public Integer getApprove() {
//        return approve;
//    }
//
//    public void setApprove(Integer approve) {
//        this.approve = approve;
//    }
}

