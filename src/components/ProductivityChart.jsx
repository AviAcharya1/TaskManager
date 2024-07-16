// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const ProductivityChart = ({ data }) => {
//   return (
//     <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
//       <CardContent>
//         <Typography variant="h6" gutterBottom color="primary">
//           Productivity Overview
//         </Typography>
//         <ResponsiveContainer width="100%" height={300}>
//           <AreaChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Area type="monotone" dataKey="tasks" stroke="#8884d8" fill="#8884d8" />
//           </AreaChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductivityChart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProductivityChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="completed" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProductivityChart;