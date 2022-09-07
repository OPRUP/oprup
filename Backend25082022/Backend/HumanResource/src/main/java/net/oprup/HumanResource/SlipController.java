package net.oprup.HumanResource;


import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E09_Contract;
import net.oprup.HumanResource.model.Slip;
import net.oprup.HumanResource.service.SlipService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/slip")
@CrossOrigin(origins = "*")
public class SlipController {

    private final SlipService slipService;

    public SlipController(SlipService slipService) {
        this.slipService = slipService;
    }

    @PostMapping("/add")
    public ResponseEntity<Slip> addSlip(@RequestBody Slip slip){
        Slip newSlip = slipService.addSlip(slip);
        return new ResponseEntity<>(newSlip, HttpStatus.CREATED);
    }

    @GetMapping("/employee-contract-slip/{contractId}")
    public ResponseEntity<?> getSlipsOfContract(@PathVariable("contractId") Long contractId){
        HR02_E09_Contract contract =  new HR02_E09_Contract();
        contract.setContractId(contractId);
        List<Slip> contractSlip = slipService.getSlipsOfContract(contract);
        return new ResponseEntity<>(contractSlip, HttpStatus.OK);
    }


    @GetMapping("/pay-slip/{slipId}")
    public ResponseEntity<?> getSlipBySlip(@PathVariable("slipId") Long slipId){
//        Slip slip =  new Slip();
//        slip.setSlipId(slipId);
        Optional<Slip> slipList = slipService.getSlipBySlipId(slipId);
        return new ResponseEntity<>(slipList, HttpStatus.OK);
    }

//    @GetMapping("/pay-slip/{slipId}")
//    public ResponseEntity<?> getSlipById(@PathVariable("slipId") Long slipId){
////        Slip slip =  new Slip();
////        slip.setSlipId(slipId);
//        List<Slip> slipList = slipService.getSlipById(slipId);
//        return new ResponseEntity<>(slipList, HttpStatus.OK);
//    }
}
