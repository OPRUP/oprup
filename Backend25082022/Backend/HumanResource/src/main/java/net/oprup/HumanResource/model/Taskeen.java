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
@Table(name="Taskeen")
public class Taskeen implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "habitationId", nullable = false, updatable = false)
    private Long habitationId;
    private String habitationCode;
    private String habitationName;
    private String habitationAddress;
    private String lessorName;
    private LocalDate rentContractStartingDate;
    private LocalDate rentContractEndingDate;
    private String 	rentCostPerMonth;
    private String 	capacity;
    private String 	numberOfKitchens;
    private String  numberOfBathrooms;
    private Integer deleteFlag;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId", nullable = false)
    private HR02_E01_Employee employees;

    public Long getHabitationId() {
        return habitationId;
    }

    public void setHabitationId(Long habitationId) {
        this.habitationId = habitationId;
    }

    public String getHabitationCode() {
        return habitationCode;
    }

    public void setHabitationCode(String habitationCode) {
        this.habitationCode = habitationCode;
    }

    public String getHabitationName() {
        return habitationName;
    }

    public void setHabitationName(String habitationName) {
        this.habitationName = habitationName;
    }

    public String getHabitationAddress() {
        return habitationAddress;
    }

    public void setHabitationAddress(String habitationAddress) {
        this.habitationAddress = habitationAddress;
    }

    public String getLessorName() {
        return lessorName;
    }

    public void setLessorName(String lessorName) {
        this.lessorName = lessorName;
    }

    public LocalDate getRentContractStartingDate() {
        return rentContractStartingDate;
    }

    public void setRentContractStartingDate(LocalDate rentContractStartingDate) {
        this.rentContractStartingDate = rentContractStartingDate.plusDays(1);
    }

    public LocalDate getRentContractEndingDate() {
        return rentContractEndingDate;
    }

    public void setRentContractEndingDate(LocalDate rentContractEndingDate) {
        this.rentContractEndingDate = rentContractEndingDate.plusDays(1);
    }

    public String getRentCostPerMonth() {
        return rentCostPerMonth;
    }

    public void setRentCostPerMonth(String rentCostPerMonth) {
        this.rentCostPerMonth = rentCostPerMonth;
    }

    public String getCapacity() {
        return capacity;
    }

    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }

    public String getNumberOfKitchens() {
        return numberOfKitchens;
    }

    public void setNumberOfKitchens(String numberOfKitchens) {
        this.numberOfKitchens = numberOfKitchens;
    }

    public String getNumberOfBathrooms() {
        return numberOfBathrooms;
    }

    public void setNumberOfBathrooms(String numberOfBathrooms) {
        this.numberOfBathrooms = numberOfBathrooms;
    }

    public HR02_E01_Employee getEmployees() {
        return employees;
    }

    public void setEmployees(HR02_E01_Employee employees) {
        this.employees = employees;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
