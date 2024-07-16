import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useTasks } from '../context/TaskContext';


const Reports = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  const taskStatusData = [
    { name: 'Completed', value: completedTasks.length },
    { name: 'Pending', value: pendingTasks.length },
  ];

  const COLORS = ['#00C49F', '#FFBB28'];

  const tasksByDay = tasks.reduce((acc, task) => {
    const date = new Date(task.id).toLocaleDateString('en-US', { weekday: 'short' });
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const tasksByDayData = Object.entries(tasksByDay).map(([name, value]) => ({ name, value }));

  const generateReport = () => {
    const report = `
      Task Management Report
      ----------------------
      Total Tasks: ${tasks.length}
      Completed Tasks: ${completedTasks.length}
      Pending Tasks: ${pendingTasks.length}
      
      Tasks by Day:
      ${Object.entries(tasksByDay).map(([day, count]) => `${day}: ${count}`).join('\n')}
    `;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'task_report.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>
      <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
        <Typography variant="h6" gutterBottom>
          Task Status
        </Typography>
        <PieChart width={400} height={300}>
          <Pie
            data={taskStatusData}
            cx={200}
            cy={150}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {taskStatusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Paper>
      <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
        <Typography variant="h6" gutterBottom>
          Tasks by Day
        </Typography>
        <BarChart width={600} height={300} data={tasksByDayData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Paper>
      <Button variant="contained" color="primary" onClick={generateReport}>
        Generate and Download Report
      </Button>
    </Container>

  );
};

export default Reports;