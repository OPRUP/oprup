package net.oprup.HumanResource.repo;


import net.oprup.HumanResource.model.HR02_E12_EmployeeLeave;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HR02_E12_EmployeeLeaveRepo extends JpaRepository<HR02_E12_EmployeeLeave, Long> {
    void deleteLeaveByLeaveId(Long leaveId);
    Optional<HR02_E12_EmployeeLeave> findLeaveByLeaveId(Long leaveId);
}
