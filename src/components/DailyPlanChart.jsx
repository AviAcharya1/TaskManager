// import React from 'react';
// import { Paper, Typography, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
// import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

// const DailyPlanChart = ({ tasks }) => {
//   return (
//     <Paper elevation={3} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
//       <Typography variant="h5" gutterBottom color="primary">
//         Today's Tasks
//       </Typography>
//       <List>
//         {tasks.map((task, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemIcon>
//               {task.completed ?
//                 <CheckCircle color="success" /> :
//                 <RadioButtonUnchecked color="action" />
//               }
//             </ListItemIcon>
//             <ListItemText
//               primary={task.title}
//               secondary={task.completed ? "Completed" : "Pending"}
//               primaryTypographyProps={{ color: task.completed ? 'text.secondary' : 'text.primary' }}
//             />
//           </ListItem>
//         ))}
//       </List>
//       <Box sx={{ mt: 2, textAlign: 'right' }}>
//         <Typography variant="subtitle2" color="text.secondary">
//           {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
//         </Typography>
//       </Box>
//     </Paper>
//   );
// };

// export default DailyPlanChart;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DailyPlanChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="tasks" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyPlanChart;