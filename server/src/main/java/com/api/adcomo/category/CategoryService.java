package com.api.adcomo.category;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryService {
    final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> findAll() {
        return this.categoryRepository.findAll();
    }

    public Optional<Category> findById(UUID id) {
        return this.categoryRepository.findById(id);
    }

    @Transactional
    public Category save(Category category) {
        return this.categoryRepository.save(category);
    }

    @Transactional
    public void delete(Category category) {
        this.categoryRepository.delete(category);
    }
}
