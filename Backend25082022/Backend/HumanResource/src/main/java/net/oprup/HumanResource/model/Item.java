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

@Table(name="item")
public class Item implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ItemId", nullable = false, updatable = false)
    private long itemId;

    private String itemCode;
    private String itemNameAr;
    private String itemNameEn;
    private String nationality;
    private String taxRate;
    private String profession;
    private Integer deleteFlag;

    private String gender;


    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }




    public String getFoodAllowance() {
        return foodAllowance;
    }

    public void setFoodAllowance(String foodAllowance) {
        this.foodAllowance = foodAllowance;
    }

    public String getHousingAllowance() {
        return housingAllowance;
    }

    public void setHousingAllowance(String housingAllowance) {
        this.housingAllowance = housingAllowance;
    }

    public String getOtherAllowance() {
        return OtherAllowance;
    }

    public void setOtherAllowance(String otherAllowance) {
        OtherAllowance = otherAllowance;
    }

    private String salary;
    private String foodAllowance;
    private String housingAllowance;
    private String OtherAllowance;

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemNameAr() {
        return itemNameAr;
    }

    public void setItemNameAr(String itemNameAr) {
        this.itemNameAr = itemNameAr;
    }

    public String getItemNameEn() {
        return itemNameEn;
    }

    public void setItemNameEn(String itemNameEn) {
        this.itemNameEn = itemNameEn;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }


    public String getTaxRate() {
        return taxRate;
    }

    public void setTaxRate(String taxRate) {
        this.taxRate = taxRate;
    }



    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }
}