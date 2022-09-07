package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR02_E01_Employee;
import net.oprup.HumanResource.model.HR02_E03_Document;
import net.oprup.HumanResource.repo.HR02_E03_DocumentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class HR02_E03_DocumentService {
    private final HR02_E03_DocumentRepo repo;
    @Autowired
    public HR02_E03_DocumentService(HR02_E03_DocumentRepo repo) {
        this.repo = repo;
    }
    public List<HR02_E03_Document> findAll(){
        return  repo.findByDeleteFlag();
    }
    public HR02_E03_Document findById(Long documentId){
        return repo.findById(documentId)
                .orElseThrow(() -> new UserNotFoundException("Employee by id: " + documentId + " not found"));
    }

    public List<HR02_E03_Document> getDocumentsOfEmployee(HR02_E01_Employee employee) {
        return repo.findDocumentsByEmployee(employee);

    }


    public HR02_E03_Document add(HR02_E03_Document record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E03_Document update(HR02_E03_Document record){
        record.setDeleteFlag(1);
        return repo.save(record);
    }
    public HR02_E03_Document delete(HR02_E03_Document record){
        record.setDeleteFlag(0);
        return repo.save(record);
    }

    public void deleteDocument(Long documentId){

        this.repo.deleteById(documentId);
    }
}

