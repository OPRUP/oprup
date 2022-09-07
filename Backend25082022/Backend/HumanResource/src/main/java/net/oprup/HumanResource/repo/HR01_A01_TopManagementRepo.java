package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.HR01_A01_TopManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;
import java.util.Optional;

public interface HR01_A01_TopManagementRepo extends JpaRepository<HR01_A01_TopManagement, Long> {

    Optional<HR01_A01_TopManagement> findTopManagementByTopManagementId(Long topManagementId);

    @Query("select t from HR01_A01_TopManagement t where t.deleteFlag = 1")
    List<HR01_A01_TopManagement> findTopManagementsByDeleteFlag();


}
