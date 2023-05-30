import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent > 0) {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  } else {
    return null;
  }
};

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    
    const Colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#D4ADFC']

    useEffect(() => {setData(() => getData()); }, [events]);

    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
          const value = events.filter(({ summary }) => summary.split('').includes(genre)).length
          return {name: genre , value};
        })
        
        return data;
    }
    console.log(data);
    console.log(events);
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
              label={renderCustomizedLabel}
            >
               {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={Colors[index]} /> 
            ))} 
           </Pie>
           <Legend />
           </PieChart>
        </ResponsiveContainer>
    );
}
     export default EventGenre;