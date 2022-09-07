
package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.FinalExit;

import net.oprup.HumanResource.model.Vacation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FinalExitRepo  extends JpaRepository<FinalExit, Long> {
    Optional<FinalExit> findByFinalExitId(Long finalExitId);

    void deleteByFinalExitId(Long finalExitId);

    @Query("select f from FinalExit f where f.approve = 1")
    List<FinalExit> findFinalExitByApprove();

    @Query("select f from FinalExit f where f.approve =2")
    List<FinalExit> findFinalByApprove();

    @Query("select f from FinalExit f where f.approve = 3")
    List<FinalExit> findFinalExitReject();

//    @Query("select f from FinalExit f where f.reject = 3")
//    List<FinalExit> findFinalExitByReject();
//    @Query("select f from FinalExit f where f.approve = 1")
//    List<FinalExit> findFinalExitByReject();

}
