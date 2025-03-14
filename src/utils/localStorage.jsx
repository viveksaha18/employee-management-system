
const employees = [
    {
      "id": 1, "email": "employee1@example.com", "password": "123",
      "tasks": [
        { "taskTitle": "Updating website", "taskDescription": "Complete the report", "taskDate": "2025-03-14", "category": "Report", "active": true, "newTask": true, "completed": false, "failed": false },
        { "taskTitle": "Task 2", "taskDescription": "Attend team meeting", "taskDate": "2025-03-15", "category": "Meeting", "active": true, "newTask": false, "completed": false, "failed": false }
      ]
    },
    {
      "id": 2, "email": "employee2@example.com", "password": "123",
      "tasks": [
        { "taskTitle": "Client Meeting", "taskDescription": "Fix website bugs", "taskDate": "2025-03-14", "category": "Development", "active": true, "newTask": false, "completed": false, "failed": false },
        { "taskTitle": "Task 2", "taskDescription": "Update database", "taskDate": "2025-03-16", "category": "Database", "active": true, "newTask": true, "completed": false, "failed": false }
      ]
    },
    {
      "id": 3, "email": "employee3@example.com", "password": "123",
      "tasks": [
        { "taskTitle": "Task 1", "taskDescription": "Design new UI", "taskDate": "2025-03-14", "category": "Design", "active": true, "newTask": true, "completed": false, "failed": false },
        { "taskTitle": "Task 2", "taskDescription": "Review wireframes", "taskDate": "2025-03-17", "category": "Review", "active": false, "newTask": false, "completed": true, "failed": false }
      ]
    },
    {
      "id": 4, "email": "employee4@example.com", "password": "123",
      "tasks": [
        { "taskTitle": "Task 1", "taskDescription": "Client presentation", "taskDate": "2025-03-15", "category": "Presentation", "active": true, "newTask": true, "completed": false, "failed": false },
        { "taskTitle": "Task 2", "taskDescription": "Prepare sales report", "taskDate": "2025-03-18", "category": "Sales", "active": false, "newTask": false, "completed": true, "failed": false }
      ]
    },
    {
      "id": 5, "email": "employee5@example.com", "password": "123",
      "tasks": [
        { "taskTitle": "Task 1", "taskDescription": "Code review", "taskDate": "2025-03-16", "category": "Code", "active": true, "newTask": false, "completed": false, "failed": false },
        { "taskTitle": "Task 2", "taskDescription": "Write documentation", "taskDate": "2025-03-19", "category": "Documentation", "active": true, "newTask": true, "completed": false, "failed": false }
      ]
    }
  ]
  
  
    
const admin = [{
    "id" : 1,
    "email" : "admin@example.com",
    "password" : "123"
}]
      


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees , admin)
}