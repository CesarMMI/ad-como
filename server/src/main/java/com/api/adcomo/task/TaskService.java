package com.api.adcomo.task;

import com.api.adcomo.category.Category;
import com.api.adcomo.category.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TaskService {
    final TaskRepository taskRepository;
    final CategoryRepository categoryRepository;

    public TaskService(TaskRepository taskRepository, CategoryRepository categoryRepository) {
        this.taskRepository = taskRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Task> findAll() {
        return this.taskRepository.findAll();
    }

    public Optional<Task> findById(UUID id) {
        return this.taskRepository.findById(id);
    }

    @Transactional
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }
    @Transactional
    public Task save(Task task, UUID categoryId) throws Exception {
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);
        if (categoryOptional.isEmpty())
            throw new Exception("Category not found");
        task.setCategory(categoryOptional.get());

        return this.taskRepository.save(task);
    }

    @Transactional
    public void delete(Task task) {
        this.taskRepository.delete(task);
    }
}
