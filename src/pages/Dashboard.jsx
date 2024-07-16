import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import DailyPlanChart from '../components/DailyPlanChart';
import ProductivityChart from '../components/ProductivityChart';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project', completed: false },
    { id: 2, title: 'Review code', completed: true },
    // Add more initial tasks as needed
  ]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  // Sample data for charts
  const dailyPlanData = [
    { time: '9AM', tasks: 2 },
    { time: '12PM', tasks: 3 },
    { time: '3PM', tasks: 1 },
    { time: '6PM', tasks: 4 },
  ];

  const productivityData = [
    { day: 'Mon', completed: 5 },
    { day: 'Tue', completed: 7 },
    { day: 'Wed', completed: 3 },
    { day: 'Thu', completed: 6 },
    { day: 'Fri', completed: 4 },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Task Management Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Task Management Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Task Management
            </Typography>
            <TaskForm onAddTask={addTask} />
            <Box sx={{ mt: 2 }}>
              <TaskList tasks={tasks} onCompleteTask={completeTask} />
            </Box>
          </Paper>
        </Grid>
        
        {/* Charts Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Daily Plan
                </Typography>
                <DailyPlanChart data={dailyPlanData} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Productivity Overview
                </Typography>
                <ProductivityChart data={productivityData} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;