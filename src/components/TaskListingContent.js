import React from 'react'
import "../styles/custom.css"

const TaskListingContent = () => {
  const tasks = [
    { id: 1, project: 'Project A', task: 'Task 1', service: 'Service A', specificService: 'Specific A', startDate: '2023-12-01', dueDate: '2023-12-10', estimate: '5 days' },
    { id: 2, project: 'Project B', task: 'Task 2', service: 'Service B', specificService: 'Specific B', startDate: '2023-12-05', dueDate: '2023-12-15', estimate: '7 days' },
    { id: 3, project: 'Project C', task: 'Task 3', service: 'Service C', specificService: 'Specific C', startDate: '2023-12-10', dueDate: '2023-12-20', estimate: '3 days' },
    
    { id: 4, project: 'Project A', task: 'Task 4', service: 'Service A', specificService: 'Specific A', startDate: '2023-12-15', dueDate: '2023-12-25', estimate: '4 days' },
    { id: 5, project: 'Project B', task: 'Task 5', service: 'Service B', specificService: 'Specific B', startDate: '2023-12-20', dueDate: '2023-12-30', estimate: '6 days' },
  
    { id: 6, project: 'Project C', task: 'Task 6', service: 'Service C', specificService: 'Specific C', startDate: '2023-12-25', dueDate: '2024-01-05', estimate: '2 days' },
    { id: 7, project: 'Project A', task: 'Task 7', service: 'Service A', specificService: 'Specific A', startDate: '2023-12-30', dueDate: '2024-01-10', estimate: '8 days' },
   
    { id: 8, project: 'Project B', task: 'Task 8', service: 'Service B', specificService: 'Specific B', startDate: '2024-01-05', dueDate: '2024-01-15', estimate: '3 days' },
    { id: 9, project: 'Project C', task: 'Task 9', service: 'Service C', specificService: 'Specific C', startDate: '2024-01-10', dueDate: '2024-01-20', estimate: '5 days' },
  
    { id: 10, project: 'Project A', task: 'Task 10', service: 'Service A', specificService: 'Specific A', startDate: '2024-01-15', dueDate: '2024-01-25', estimate: '6 days' },
    { id: 11, project: 'Project B', task: 'Task 11', service: 'Service B', specificService: 'Specific B', startDate: '2024-01-20', dueDate: '2024-01-30', estimate: '4 days' },
   
    { id: 12, project: 'Project C', task: 'Task 12', service: 'Service C', specificService: 'Specific C', startDate: '2024-01-25', dueDate: '2024-02-05', estimate: '7 days' },
    { id: 13, project: 'Project A', task: 'Task 13', service: 'Service A', specificService: 'Specific A', startDate: '2024-01-30', dueDate: '2024-02-10', estimate: '2 days' },
    
    { id: 14, project: 'Project B', task: 'Task 14', service: 'Service B', specificService: 'Specific B', startDate: '2024-02-05', dueDate: '2024-02-15', estimate: '9 days' },
    { id: 15, project: 'Project C', task: 'Task 15', service: 'Service C', specificService: 'Specific C', startDate: '2024-02-10', dueDate: '2024-02-20', estimate: '3 days' },
    
    { id: 16, project: 'Project A', task: 'Task 16', service: 'Service A', specificService: 'Specific A', startDate: '2024-02-15', dueDate: '2024-02-25', estimate: '6 days' },
    { id: 17, project: 'Project B', task: 'Task 17', service: 'Service B', specificService: 'Specific B', startDate: '2024-02-20', dueDate: '2024-02-28', estimate: '4 days' },
    
    { id: 18, project: 'Project C', task: 'Task 18', service: 'Service C', specificService: 'Specific C', startDate: '2024-02-25', dueDate: '2024-03-05', estimate: '8 days' },
    { id: 19, project: 'Project A', task: 'Task 19', service: 'Service A', specificService: 'Specific A', startDate: '2024-03-01', dueDate: '2024-03-10', estimate: '5 days' },
   
    { id: 20, project: 'Project B', task: 'Task 20', service: 'Service B', specificService: 'Specific B', startDate: '2024-03-05', dueDate: '2024-03-15', estimate: '7 days' },
  
  ];
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='table-responsive1'>
          <div className='dataTables_wrapper dt-bootstrap4 no-footer'>
            <div className='row'>
            <div className='col-sm-12 col-md-6 d-flex align-items-center'>
              <div className='dataTables_length'>
                <label>

                  Show
                  <select name='myTable_length' className='custom-select custom-select-sm form-control form-control-sm'>
                    <option value="10">10</option>
                    <option value="10">25</option>
                    <option value="10">50</option>
                    <option value="10">100</option>
                  </select>
                  entries
                </label>

              </div>

            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='dataTables_filter'>
                <label>
                  Search
                  <input type='search' className='form-control from-control-sm'/>
                </label>

              </div>

            </div>
            <div className='table-responsive1'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Project</th>
                <th>Task</th>
                <th>Service</th>
                <th>Specific Service</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Estimate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.project}</td>
                  <td>{task.task}</td>
                  <td>{task.service}</td>
                  <td>{task.specificService}</td>
                  <td>{task.startDate}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.estimate}</td>
                  <td>
                    {/* Add your eye, edit, and delete icons here */}
                    <span style={{ marginRight: '10px', cursor: 'pointer' }}>👁️</span>
                    <span style={{ marginRight: '10px', cursor: 'pointer' }}>✏️</span>
                    <span style={{ cursor: 'pointer' }}>🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

            </div>

          </div>

        </div>

      </div>
      
      <div>

      </div>
    </div>
  )
}

export default TaskListingContent