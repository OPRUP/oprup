package net.oprup.HumanResource.service;

import net.oprup.HumanResource.exception.UserNotFoundException;
import net.oprup.HumanResource.model.HR01_A01_TopManagement;
import net.oprup.HumanResource.model.HR09_Major;
import net.oprup.HumanResource.repo.HR01_A01_TopManagementRepo;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional

public class HR01_A01_TopManagementService {
    private final HR01_A01_TopManagementRepo HR01TopManagementRepo;


    public HR01_A01_TopManagementService(HR01_A01_TopManagementRepo HR01TopManagementRepo) {
        this.HR01TopManagementRepo = HR01TopManagementRepo;
    }

    public HR01_A01_TopManagement addTopManagement(HR01_A01_TopManagement topManagement) {
        topManagement.setDeleteFlag(1);
        return HR01TopManagementRepo.save(topManagement);


    }

    public List<HR01_A01_TopManagement> findAllTopManagements() {
        return HR01TopManagementRepo.findTopManagementsByDeleteFlag();
    }

    public HR01_A01_TopManagement updateTopManagement(HR01_A01_TopManagement topManagement) {
        topManagement.setDeleteFlag(1);
        return HR01TopManagementRepo.save(topManagement);
    }

    public HR01_A01_TopManagement findTopManagementById(Long topManagementId) {
        return HR01TopManagementRepo.findTopManagementByTopManagementId(topManagementId)
                .orElseThrow(() -> new UserNotFoundException("TopManagement by id: " + topManagementId + " not found"));
    }

    public HR01_A01_TopManagement deleteTopManagement(HR01_A01_TopManagement topManagement) {
        topManagement.setDeleteFlag(0);
        return HR01TopManagementRepo.save(topManagement);
    }

}
