package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="t19_section")
public class HR04_Section implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="sectionId",nullable = false, updatable = false)
	private Long sectionId;
	private String sectionName;
	private LocalDate managerStartingDate;
	private String contactNumber;
	private String description;
	private Integer deleteFlag;

	@ManyToOne(targetEntity = A01_Department.class,fetch = FetchType.EAGER)
	@JoinColumn(name = "departmentId",referencedColumnName = "departmentId")
	private A01_Department department;

	@ManyToOne(targetEntity = HR02_E01_Employee.class,fetch = FetchType.EAGER)
	@JoinColumn(name = "employeeId",referencedColumnName = "employeeId")
	private HR02_E01_Employee employee;

	public HR02_E01_Employee getEmployee() {
		return employee;
	}

	public void setEmployee(HR02_E01_Employee employee) {
		this.employee = employee;
	}

	public A01_Department getDepartment() {
		return department;
	}

	public void setDepartment(A01_Department department) {
		this.department = department;
	}

	public Long getSectionId() {
		return sectionId;
	}

	public void setSectionId(Long sectionId) {
		this.sectionId = sectionId;
	}

	public String getSectionName() {
		return sectionName;
	}

	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
	}

	public LocalDate getManagerStartingDate() {
		return managerStartingDate;
	}

	public void setManagerStartingDate(LocalDate managerStartingDate) {
		this.managerStartingDate = managerStartingDate.plusDays(1);
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
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




