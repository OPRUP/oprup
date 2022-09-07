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
@Table(name="salesInvoice")

public class SalesInvoice implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "salesInvoiceId", nullable = false, updatable = false)
    private long salesInvoiceId;
    private String salesInvoiceNumber;
    private String salesInvoiceType;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "clientAccount",referencedColumnName = "accountId")
    private ChartAccount clientAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "cashAccount",referencedColumnName = "accountId")
    private ChartAccount cashAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "taxAccount",referencedColumnName = "accountId")
    private ChartAccount taxAccount;
    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "salesAccount",referencedColumnName = "accountId")
    private ChartAccount salesAccount;


    @ManyToOne(targetEntity = Project.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "projectId",referencedColumnName = "projectId")
    private Project project;
    private LocalDate date;
    private Integer deleteFlag;
    private double amount;
    private  double tax;
    private double total;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId",nullable = false)
    private HR02_E01_Employee employee;

    @ManyToOne(targetEntity = CostCenter.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "costCenterId",referencedColumnName = "costCenterId",nullable = false)
    private CostCenter costCenter;
    @ManyToOne(targetEntity = Customer.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId",referencedColumnName = "customerId",nullable = false)
    private Customer customer;
    private String taxNumber;

    public long getSalesInvoiceId() {
        return salesInvoiceId;
    }

    public void setSalesInvoiceId(long salesInvoiceId) {
        this.salesInvoiceId = salesInvoiceId;
    }

    public String getSalesInvoiceNumber() {
        return salesInvoiceNumber;
    }

    public void setSalesInvoiceNumber(String salesInvoiceNumber) {
        this.salesInvoiceNumber = salesInvoiceNumber;
    }

    public String getSalesInvoiceType() {
        return salesInvoiceType;
    }

    public void setSalesInvoiceType(String salesInvoiceType) {
        this.salesInvoiceType = salesInvoiceType;
    }

    public ChartAccount getClientAccount() {
        return clientAccount;
    }

    public void setClientAccount(ChartAccount clientAccount) {
        this.clientAccount = clientAccount;
    }

    public ChartAccount getCashAccount() {
        return cashAccount;
    }

    public void setCashAccount(ChartAccount cashAccount) {
        this.cashAccount = cashAccount;
    }

    public ChartAccount getTaxAccount() {
        return taxAccount;
    }

    public void setTaxAccount(ChartAccount taxAccount) {
        this.taxAccount = taxAccount;
    }

    public ChartAccount getSalesAccount() {
        return salesAccount;
    }

    public void setSalesAccount(ChartAccount salesAccount) {
        this.salesAccount = salesAccount;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public CostCenter getCostCenter() {
        return costCenter;
    }

    public void setCostCenter(CostCenter costCenter) {
        this.costCenter = costCenter;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getTaxNumber() {
        return taxNumber;
    }

    public void setTaxNumber(String taxNumber) {
        this.taxNumber = taxNumber;
    }
}
