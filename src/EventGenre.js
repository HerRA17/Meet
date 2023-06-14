import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';


const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    
    const Colors = ['#0088FE', '#00C49F', '#ECF8F9', '#D80303', '#D4ADFC']

    useEffect(() => {setData(() => getData()); }, [events]); //have a look at eslint-- exhaustive-deps

    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
          const value = events.filter(({ summary }) => summary.split('').includes(genre)).length
          return {name: genre , value};
        })
        
        return data;
    };
        
    return (
        <ResponsiveContainer height={400}>
          <PieChart width={400} height={400}>
            <Legend />
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
            
           </Pie>
           </PieChart>
        </ResponsiveContainer>
    );
}
     export default EventGenre;