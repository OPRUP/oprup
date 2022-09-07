package net.oprup.HumanResource;

import net.oprup.HumanResource.model.A01_Department;
import net.oprup.HumanResource.service.A01_DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/department")
@CrossOrigin(origins = "*")
public class A01_DepartmentController {

    private final A01_DepartmentService departmentService;

    public A01_DepartmentController(A01_DepartmentService departmentService) {
        this.departmentService = departmentService;
    }



    @GetMapping("/all")
    public ResponseEntity<List<A01_Department>> getAllDepartments(){
        List<A01_Department> departments = departmentService.findAllDepartments();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

    @GetMapping("/find/{departmentId}")
    public ResponseEntity<A01_Department> getDepartmentById(@PathVariable("departmentId") Long departmentId){
        A01_Department department = departmentService.findDepartmentById(departmentId);
        return new ResponseEntity<>(department, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<A01_Department> addDepartment(@RequestBody A01_Department department){
        A01_Department newDepartment = departmentService.addDepartment(department);
        return new ResponseEntity<>(newDepartment, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<A01_Department> updateDepartment(@RequestBody A01_Department department){
        A01_Department updateDepartment = departmentService.updateDepartment(department);
        return new ResponseEntity<>(updateDepartment, HttpStatus.OK);
    }

    @PutMapping("/delete")
    public ResponseEntity<A01_Department> deleteDepartment(@RequestBody A01_Department department){
        A01_Department deleteDepartment = departmentService.deleteDepartment(department);
        return new ResponseEntity<>(deleteDepartment, HttpStatus.OK);
    }


}
