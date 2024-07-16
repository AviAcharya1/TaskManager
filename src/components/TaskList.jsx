// import React from 'react';
// import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const TaskList = ({ tasks, onCompleteTask }) => {
//   return (
//     <List>
//       {tasks.map((task) => (
//         <ListItem
//           key={task.id}
//           secondaryAction={
//             !task.completed && (
//               <IconButton edge="end" onClick={() => onCompleteTask(task.id)}>
//                 <CheckCircleOutlineIcon />
//               </IconButton>
//             )
//           }
//         >
//           <ListItemText
//             primary={task.title}
//             secondary={
//               <Typography
//                 component="span"
//                 variant="body2"
//                 color={task.completed ? "success.main" : "text.secondary"}
//               >
//                 {task.completed ? 'Completed' : 'Pending'}
//               </Typography>
//             }
//           />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default TaskList;

import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const TaskList = ({ tasks, onCompleteTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} disablePadding>
          <ListItemText 
            primary={task.title}
            secondary={task.completed ? "Completed" : "Pending"}
          />
          <ListItemSecondaryAction>
            {!task.completed && (
              <IconButton edge="end" onClick={() => onCompleteTask(task.id)}>
                <CheckCircleOutlineIcon />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;