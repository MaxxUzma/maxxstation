import React from 'react';

const TodoList = () => {
  const tasks = [
    { id: 1, description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus fermentum ', dueDate: '2023-12-01', status: 'inProgress' },
    { id: 2, description: 'Task 2', dueDate: '2023-12-15', status: 'onHold' },
    { id: 3, description: 'Task 3', dueDate: '2023-12-20', status: 'inProgress' },
    { id: 4, description: 'Task 4', dueDate: '2023-12-25', status: 'onHold' },
  ];

  return (
    <div className="container mt-4">
      {tasks.map((task) => (
        <div key={task.id} className="mb-3" style={{ width: '100%' }}>
          <div className="card" style={{ width: '100%', backgroundColor: 'white' }}>
            <div className="card-body d-flex align-items-center">
              <div style={{ display: "flex", flexDirection: "row", gap: "419px" }}>
                <div className="card-title">{task.description}</div>
                <div className="card-text">Due Date: {task.dueDate}</div>
                <div className={`card-text ${task.status === 'inProgress' ? 'text-success' : 'text-warning'}`}>
                  Status: {task.status === 'inProgress' ? 'In Progress' : 'On Hold'}
                </div>
              </div>
              <button className="btn btn-primary mr-2">Start Timer</button>
              
              <input type="checkbox" className="form-check-input" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
