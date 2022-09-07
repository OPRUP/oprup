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
@Table(name="Project")
public class Project implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "projectId", nullable = false, updatable = false)
    private long projectId;
    private String projectCode;
    private String projectName;
    private String projectValue;
    private String projectAddress;
    private String projectDuration;
    private LocalDate startingDate;
    private LocalDate endingDate;
    private String projectNumber;
    private String workingTime;
    private String employeeNumber;
    private String projectDescription;
    private String expectedExpense;

    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId", nullable = false, updatable = true)
    private HR02_E01_Employee employees;

    @ManyToOne(targetEntity = ChartAccount.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "accountId",referencedColumnName = "accountId", nullable = false, updatable = true)
    private ChartAccount chartAccounts;

    public String getProjectNumber() {
        return projectNumber;
    }

    public void setProjectNumber(String projectNumber) {
        this.projectNumber = projectNumber;
    }

    public ChartAccount getChartAccounts() {
        return chartAccounts;
    }

    public void setChartAccounts(ChartAccount chartAccounts) {
        this.chartAccounts = chartAccounts;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @ManyToOne(targetEntity = Customer.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId",referencedColumnName = "customerId")
    private Customer customer;


//    @ManyToOne(targetEntity = User.class,fetch = FetchType.EAGER)
//    @JoinColumn(name = "userId",referencedColumnName = "userId", nullable = false, updatable = false)
//    private User user;

//    @ManyToOne(targetEntity = User.class,fetch = FetchType.EAGER)
//    @JoinColumn(name = "userID",referencedColumnName = "id", nullable = false, updatable = false)
//    private User users;



    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectValue() {
        return projectValue;
    }

    public void setProjectValue(String projectValue) {
        this.projectValue = projectValue;
    }

    public String getProjectAddress() {
        return projectAddress;
    }

    public void setProjectAddress(String projectAddress) {
        this.projectAddress = projectAddress;
    }


    public String getProjectDuration() {
        return projectDuration;
    }

    public void setProjectDuration(String projectDuration) {
        this.projectDuration = projectDuration;
    }

    public LocalDate getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(LocalDate startingDate) {
        this.startingDate = startingDate.plusDays(1);
    }

    public LocalDate getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(LocalDate endingDate) {
        this.endingDate = endingDate.plusDays(1);
    }

//    public String getManagerName() {
//        return managerName;
//    }
//
//    public void setManagerName(String managerName) {
//        this.managerName = managerName;
//    }

    public String getWorkingTime() {
        return workingTime;
    }

    public void setWorkingTime(String workingTime) {
        this.workingTime = workingTime;
    }

    public String getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getExpectedExpense() {
        return expectedExpense;
    }

    public void setExpectedExpense(String expectedExpense) {
        this.expectedExpense = expectedExpense;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public HR02_E01_Employee getEmployees() {
        return employees;
    }

    public void setEmployees(HR02_E01_Employee employees) {
        this.employees = employees;
    }

}
