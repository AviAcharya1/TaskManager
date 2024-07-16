// import React, { useState } from 'react';
// import { Paper, TextField, Button, Box } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';

// const TaskForm = ({ onAddTask }) => {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim()) {
//       onAddTask(title);
//       setTitle('');
//     }
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter new task"
//           sx={{ flexGrow: 1 }}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           startIcon={<AddIcon />}
//         >
//           Add Task
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// export default TaskForm;

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new task"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;