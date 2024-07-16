import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTasks } from '../context/TaskContext';

const Dashboard = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  const data = [
    { name: 'Completed', tasks: completedTasks },
    { name: 'Pending', tasks: pendingTasks },
    // { name: 'Upcoming', tasks: pendingTasks },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        TaskList
      </Typography>
      <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
        <Typography variant="h6" gutterBottom>
          Task Overview
        </Typography>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Tasks" fill="#ff0000" />
        </BarChart>
      </Paper>
    </Container>
  );
};

export default Dashboard;