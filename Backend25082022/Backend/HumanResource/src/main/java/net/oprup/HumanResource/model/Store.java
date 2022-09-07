package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="Store")

public class Store implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="storeId",nullable = false, updatable = false)
    private Long storeId;
    private String stroeCode;
    private String storePlace;
    private String storeContact;
    private String storeKeeper;
    private Integer deleteFlag;

    public Long getStoreId() {
        return storeId;
    }

    public void setStoreId(Long storeId) {
        this.storeId = storeId;
    }

    public String getStroeCode() {
        return stroeCode;
    }

    public void setStroeCode(String stroeCode) {
        this.stroeCode = stroeCode;
    }

    public String getStorePlace() {
        return storePlace;
    }

    public void setStorePlace(String storePlace) {
        this.storePlace = storePlace;
    }

    public String getStoreContact() {
        return storeContact;
    }

    public void setStoreContact(String storeContact) {
        this.storeContact = storeContact;
    }

    public String getStoreKeeper() {
        return storeKeeper;
    }

    public void setStoreKeeper(String storeKeeper) {
        this.storeKeeper = storeKeeper;
    }

    public Integer getDeleteFlag() {
        return (Integer) deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {

        this.deleteFlag = deleteFlag;
    }


}
