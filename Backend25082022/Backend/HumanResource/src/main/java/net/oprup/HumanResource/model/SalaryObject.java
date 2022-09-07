package net.oprup.HumanResource.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="t16_salary_object")
public class SalaryObject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="salaryObjectId",nullable = false, updatable = false)
    private Long salaryObjectId;
    private String salaryObjectName;
    private String description;
    private Integer deleteFlag;

//    //salary object has many employee salary object
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "salaryObject")
////    @JsonIgnore
//    private Set<EmployeeSalaryObject> employeeSalaryObjects =new HashSet<>();





    public Long getSalaryObjectId() {
        return salaryObjectId;
    }

    public void setSalaryObjectId(Long salaryObjectId) {
        this.salaryObjectId = salaryObjectId;
    }

    public String getSalaryObjectName() {
        return salaryObjectName;
    }

    public void setSalaryObjectName(String salaryObjectName) {
        this.salaryObjectName = salaryObjectName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }


}
