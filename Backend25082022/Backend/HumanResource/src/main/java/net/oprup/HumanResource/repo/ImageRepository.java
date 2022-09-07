package net.oprup.HumanResource.repo;

import java.util.Optional;

import net.oprup.HumanResource.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);
}
