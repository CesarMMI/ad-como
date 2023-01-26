package com.api.adcomo.task;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TaskService {
    final TaskRepository taskRepository;
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> findAll() {
        return this.taskRepository.findAll();
    }
    public Optional<Task> findById(UUID id) {return this.taskRepository.findById(id);}
    @Transactional
    public Task save(Task task){
        return this.taskRepository.save(task);
    }
    @Transactional
    public void delete(Task task) {this.taskRepository.delete(task);}
}
