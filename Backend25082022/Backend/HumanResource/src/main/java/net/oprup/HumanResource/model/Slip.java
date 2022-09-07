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
@Table(name="t17_slip")
public class Slip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="slipId",nullable = false, updatable = false)
    private Long slipId;
    private Long year;
    private String month;
    private String paymentWay;
    private LocalDate paymentDate;
    private double netSalary;
    private String status;



    @ManyToOne(targetEntity = HR02_E09_Contract.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "contractId",referencedColumnName = "contractId")
    private HR02_E09_Contract contract;








    public Long getSlipId() {
        return slipId;
    }

    public void setSlipId(Long slipId) {
        this.slipId = slipId;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getPaymentWay() {
        return paymentWay;
    }

    public void setPaymentWay(String paymentWay) {
        this.paymentWay = paymentWay;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate.plusDays(1);
    }

    public double getNetSalary() {
        return netSalary;
    }

    public void setNetSalary(double netSalary) {
        this.netSalary = netSalary;
    }

    public HR02_E09_Contract getContract() {
        return contract;
    }

    public void setContract(HR02_E09_Contract contract) {
        this.contract = contract;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
