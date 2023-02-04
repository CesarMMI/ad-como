package com.api.adcomo.task;

import com.api.adcomo.category.Category;
import com.api.adcomo.category.CategoryService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    TaskService taskService;
    @Autowired
    CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Task>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(this.taskService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable(value = "id") UUID id) {
        Optional<Task> taskOptional = this.taskService.findById(id);
        if (taskOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found");
        }

        return ResponseEntity.status(HttpStatus.OK).body(taskOptional.get());
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody TaskDto taskDto) {
        Task task = new Task();
        BeanUtils.copyProperties(taskDto, task);
        task.setState(0);
        task.setCreatedAt(LocalDateTime.now(ZoneId.of("UTC")));

        if(taskDto.getCategoryId() != null){
            try {
                BeanUtils.copyProperties(this.taskService.save(task, taskDto.getCategoryId()), task);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
            }
        }else BeanUtils.copyProperties(this.taskService.save(task), task);

        return ResponseEntity.status(HttpStatus.CREATED).body(this.taskService.save(task));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable(value = "id") UUID id, @RequestBody TaskDto taskDto) {
        Optional<Task> taskOptional = this.taskService.findById(id);
        if (taskOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found");
        }

        Task task = new Task();
        BeanUtils.copyProperties(taskDto, task);
        task.setId(taskOptional.get().getId());
        task.setCreatedAt(taskOptional.get().getCreatedAt());
        task.setUpdatedAt(LocalDateTime.now(ZoneId.of("UTC")));

        if(taskDto.getCategoryId() != null){
            try {
                BeanUtils.copyProperties(this.taskService.save(task, taskDto.getCategoryId()), task);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
            }
        }else BeanUtils.copyProperties(this.taskService.save(task), task);

        return ResponseEntity.status(HttpStatus.CREATED).body(task);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable(value = "id") UUID id) {
        Optional<Task> taskOptional = this.taskService.findById(id);
        if (taskOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found");
        }

        System.out.println(taskOptional.get());
        taskService.delete(taskOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Task deleted successfully");
    }
}
