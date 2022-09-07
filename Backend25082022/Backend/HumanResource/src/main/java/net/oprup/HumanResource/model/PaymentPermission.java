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
@Table(name="paymentPermission")

public class PaymentPermission implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentPermissionId", nullable = false, updatable = false)
    private Long paymentPermissionId;
    private String description;
    private Long  checksAmount;
    private String cashAmount;
    private String clientName;
    private LocalDate voucherDate;
    private Integer deleteFlag;

    public Long getPaymentPermissionId() {
        return paymentPermissionId;
    }

    public void setPaymentPermissionId(Long paymentPermissionId) {
        this.paymentPermissionId = paymentPermissionId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getChecksAmount() {
        return checksAmount;
    }

    public void setChecksAmount(Long checksAmount) {
        this.checksAmount = checksAmount;
    }

    public String getCashAmount() {
        return cashAmount;
    }

    public void setCashAmount(String cashAmount) {
        this.cashAmount = cashAmount;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public LocalDate getVoucherDate() {
        return voucherDate;
    }

    public void setVoucherDate(LocalDate voucherDate) {
        this.voucherDate = voucherDate;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
