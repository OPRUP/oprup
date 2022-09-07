package net.oprup.HumanResource.repo;

import net.oprup.HumanResource.model.TravelingEmployee;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TravelingEmployeeRepo extends JpaRepository<TravelingEmployee, Long> {

    @Query("select p from TravelingEmployee p where p.deleteFlag =1")
    List<TravelingEmployee> deleteTravelingEmployeeByDeleteFlag();

    Optional<TravelingEmployee> findByTravelingEmployeeId(Long travelingEmployeeId);

    //new

    @Query(value="select count(*) from travelingemployee p INNER JOIN t03_employee e ON p.employee_id = e.employee_id WHERE e.delete_flag=1 and p.delete_flag=1",nativeQuery = true)
    long countByTravelingEmployee();

    @Query(value="select * from travelingemployee p INNER JOIN t03_employee e ON p.employee_id = e.employee_id WHERE e.delete_flag=1 and p.delete_flag=1",nativeQuery = true)
    List<TravelingEmployee> getTravelingEmployeeByDeleteFlag();
}