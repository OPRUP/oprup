package net.oprup.HumanResource;


import net.oprup.HumanResource.model.*;
import net.oprup.HumanResource.service.ContractDetailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contractDetail")
@CrossOrigin(origins = "*")
public class ContractDetailController {

    private final ContractDetailService contractDetailService;

    public ContractDetailController(ContractDetailService contractDetailService) {
        this.contractDetailService = contractDetailService;
    }


    @GetMapping("/contract-details/{contractId}")
    public ResponseEntity<?> getContractDetailsByContractId(@PathVariable("contractId") Long contractId){
        HR02_E09_Contract contract =  new HR02_E09_Contract();
        contract.setContractId(contractId);
        List<ContractDetail> contractDetailList = contractDetailService.getContractDetailsByContractId(contract);
        return new ResponseEntity<>(contractDetailList, HttpStatus.OK);
    }

    @GetMapping("/employee-contract-details/{employeeId}")
    public ResponseEntity<?> getContractDetailsByEmployeeId(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee employee =  new HR02_E01_Employee();
        employee.setEmployeeId(employeeId);
        List<ContractDetail> contractDetailList = contractDetailService.getContractDetailsByEmployeeId(employee);
        return new ResponseEntity<>(contractDetailList, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<ContractDetail> add(@RequestBody ContractDetail contractDetail){
        ContractDetail newContractDetail = contractDetailService.add(contractDetail);
        return new ResponseEntity<>(newContractDetail, HttpStatus.CREATED);
    }
    @PutMapping("/delete")
    public ResponseEntity<ContractDetail> delete(@RequestBody ContractDetail record){
        ContractDetail deleteRecord = contractDetailService.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }
}
