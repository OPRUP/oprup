package net.oprup.HumanResource;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E03_Document;
import net.oprup.HumanResource.service.HR02_E03_DocumentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeDetailsDocument")
@CrossOrigin(origins = "*")
public class HR02_E03_DocumentController {
    private final HR02_E03_DocumentService service;
    public HR02_E03_DocumentController(HR02_E03_DocumentService service) {
        this.service = service;
    }
    @GetMapping("/all")
    public ResponseEntity<List<HR02_E03_Document>> getAll(){
        List<HR02_E03_Document> records = service.findAll();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
    @GetMapping("/find/{documentId}")
    public ResponseEntity<HR02_E03_Document> getById(@PathVariable("documentId") Long documentId){
        HR02_E03_Document record = service.findById(documentId);
        return new ResponseEntity<>(record, HttpStatus.OK);
    }

    @GetMapping("/employee-document/{employeeId}")
    public ResponseEntity<?> getDocumentsOfEmployee(@PathVariable("employeeId") Long employeeId){
        HR02_E01_Employee emp =  new HR02_E01_Employee();
        emp.setEmployeeId(employeeId);
        List<HR02_E03_Document> employeeDocument = service.getDocumentsOfEmployee(emp);
        return new ResponseEntity<>(employeeDocument, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<HR02_E03_Document> add(@RequestBody HR02_E03_Document record){
        HR02_E03_Document newRecord = service.add(record);
        return new ResponseEntity<>(newRecord, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<HR02_E03_Document> update(@RequestBody HR02_E03_Document record){
        HR02_E03_Document updateRecord = service.update(record);
        return new ResponseEntity<>(updateRecord, HttpStatus.OK);
    }
    @PutMapping("/delete")
    public ResponseEntity<HR02_E03_Document> delete(@RequestBody HR02_E03_Document record){
        HR02_E03_Document deleteRecord = service.delete(record);
        return new ResponseEntity<>(deleteRecord, HttpStatus.OK);
    }

    @DeleteMapping("/{documentId}")
    public void deleteDocument(@PathVariable("documentId") Long documentId){
        this.service.deleteDocument(documentId);

    }
}

