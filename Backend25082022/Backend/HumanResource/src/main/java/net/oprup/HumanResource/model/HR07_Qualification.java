package net.oprup.HumanResource.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="t22_qualification")
public class HR07_Qualification implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="qualificationId",nullable = false, updatable = false)
    private Long qualificationId;
    private String qualificationName;
    private String description;
    private Integer deleteFlag;
    
//    public HR07_Qualification() {}
//
//	public HR07_Qualification(Long qualificationId, String qualificationName, String description, Integer deleteFlag) {
//		super();
//		this.qualificationId = qualificationId;
//		this.qualificationName = qualificationName;
//		this.description = description;
//		this.deleteFlag = deleteFlag;
//	}
	
	public Long getQualificationId() {
		return qualificationId;
	}

	public void setQualificationId(Long qualificationId) {
		this.qualificationId = qualificationId;
	}

	public String getQualificationName() {
		return qualificationName;
	}

	public void setQualificationName(String qualificationName) {
		this.qualificationName = qualificationName;
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

	@Override
	public String toString() {
		return "Qualification [qualificationId=" + qualificationId + ", qualificationName=" + qualificationName
				+ ", description=" + description + "]";
	}
    

}
