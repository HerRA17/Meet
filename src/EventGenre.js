import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({events}) => {
    const [data, setData] = useState([]);
    
    const Colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#D4ADFC']

    useEffect(() => {setData(() => getData()); }, [events]);

    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre, index) => {
          const value = events.filter(({ summary }) => summary.split('').includes(genre)).length
          return {name: genre , value};
        })
        return data;
    }
   
  console.log(data);
    return (
        <ResponsiveContainer >
          <PieChart width={400} height={400}>
            <Legend />
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label={({name, percent}) =>`${name} ${(percent * 100).toFixed(0)}%`}
            >
               {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={Colors[index]} /> 
            ))} 
           </Pie>
           <Legend verticalAlign="bottom" layout="horizontal"  formatter={(value, entry, index) => <span style={{ color: entry.color }}>{entry.payload.name}</span>}/>
           </PieChart>
        </ResponsiveContainer>
    );
}
     export default EventGenre;