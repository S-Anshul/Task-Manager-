using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    // In-memory storage
    private static List<TaskItem> tasks = new();
    private static int nextId = 1;

    // GET: api/tasks
    [HttpGet]
    public ActionResult<List<TaskItem>> GetAllTasks()
    {
        return Ok(tasks);
    }

    // GET: api/tasks/5
    [HttpGet("{id}")]
    public ActionResult<TaskItem> GetTask(int id)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return NotFound();
        
        return Ok(task);
    }

    // POST: api/tasks
    [HttpPost]
    public ActionResult<TaskItem> CreateTask([FromBody] TaskItem newTask)
    {
        newTask.Id = nextId++;
        newTask.CreatedAt = DateTime.UtcNow;
        tasks.Add(newTask);
        
        return CreatedAtAction(nameof(GetTask), new { id = newTask.Id }, newTask);
    }

    // PUT: api/tasks/5
    [HttpPut("{id}")]
    public ActionResult<TaskItem> UpdateTask(int id, [FromBody] TaskItem updatedTask)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return NotFound();
        
        task.Description = updatedTask.Description;
        task.IsCompleted = updatedTask.IsCompleted;
        
        return Ok(task);
    }

    // DELETE: api/tasks/5
    [HttpDelete("{id}")]
    public ActionResult DeleteTask(int id)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return NotFound();
        
        tasks.Remove(task);
        return NoContent();
    }
}