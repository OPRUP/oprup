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
@Table(name="TimeSheet")
public class TimeSheet implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timeSheetId", nullable = false, updatable = false)
    private Long timeSheetId;
    private String attWeekDay;
    private Integer attDay;
    private Integer attMonth;
    private Integer attYear;
    private Integer overTimeHour;
    private Double otValue;
    private Double attValue;
    private Integer attHour;
    private Integer saveFlag;
    private Double attTotalValue;
    @ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId",referencedColumnName = "employeeId", insertable = true, updatable = false)
    private HR02_E01_Employee employee;

    public Long getTimeSheetId() {
        return timeSheetId;
    }

    public void setTimeSheetId(Long timeSheetId) {
        this.timeSheetId = timeSheetId;
    }

    public String getAttWeekDay() {
        return attWeekDay;
    }

    public void setAttWeekDay(String attWeekDay) {
        this.attWeekDay = attWeekDay;
    }

    public Integer getAttDay() {
        return attDay;
    }

    public void setAttDay(Integer attDay) {
        this.attDay = attDay;
    }

    public Integer getAttMonth() {
        return attMonth;
    }

    public void setAttMonth(Integer attMonth) {
        this.attMonth = attMonth;
    }

    public Integer getAttYear() {
        return attYear;
    }

    public void setAttYear(Integer attYear) {
        this.attYear = attYear;
    }

    public Double getOtValue() {
        return otValue;
    }

    public void setOtValue(Double otValue) {
        this.otValue = otValue;
    }

    public Double getAttValue() {
        return attValue;
    }

    public void setAttValue(Double attValue) {
        this.attValue = attValue;
    }


    public Integer getSaveFlag() {
        return saveFlag;
    }

    public void setSaveFlag(Integer saveFlag) {
        this.saveFlag = saveFlag;
    }

    public HR02_E01_Employee getEmployee() {
        return employee;
    }

    public Integer getAttHour() {
        return attHour;
    }

    public void setAttHour(Integer attHour) {
        this.attHour = attHour;
    }

    public void setEmployee(HR02_E01_Employee employee) {
        this.employee = employee;
    }

    public Double getAttTotalValue() {
        return attTotalValue;
    }

    public void setAttTotalValue(Double attTotalValue) {
        this.attTotalValue = attTotalValue;
    }

    public Integer getOverTimeHour() {
        return overTimeHour;
    }

    public void setOverTimeHour(Integer overTimeHour) {
        this.overTimeHour = overTimeHour;
    }
}

