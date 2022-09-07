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
@Table(name="contractItem")
public class ContractItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contractItemId", nullable = false, updatable = false)
    private long contractItemId;
    private Double contractItemValue;
    private Double contractItemTotalValue;
    private int contractExtension;
    private Double operationFee;
    private double monthlyOperationFee;

    public Double getOperationFee() {
        return operationFee;
    }

    public void setOperationFee(Double operationFee) {
        this.operationFee = operationFee;
    }

    public double getMonthlyOperationFee() {
        return monthlyOperationFee;
    }

    public void setMonthlyOperationFee(double monthlyOperationFee) {
        this.monthlyOperationFee = monthlyOperationFee;
    }

    public int getContractExtension() {
        return contractExtension;
    }

    public void setContractExtension(int contractExtension) {
        this.contractExtension = contractExtension;
    }

    public Double getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(Double employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

    private Double employeeNumber;
    private Integer deleteFlag;

    @ManyToOne(targetEntity = Item.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "itemId",referencedColumnName = "itemId", nullable = false)
    private Item item;

    @ManyToOne(targetEntity = Contract.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "contractId",referencedColumnName = "contractId", nullable = false)
    private Contract contract;


    public long getContractItemId() {
        return contractItemId;
    }

    public void setContractItemId(long contractItemId) {
        this.contractItemId = contractItemId;
    }

    public Double getContractItemValue() {
        return contractItemValue;
    }

    public void setContractItemValue(Double contractItemValue) {
        this.contractItemValue = contractItemValue;
    }

    public Double getContractItemTotalValue() {
        return contractItemTotalValue;
    }

    public void setContractItemTotalValue(Double contractItemTotalValue) {
        this.contractItemTotalValue = contractItemTotalValue;
    }



    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Contract getContract() {
        return contract;
    }

    public void setContract(Contract contract) {
        this.contract = contract;
    }

}
