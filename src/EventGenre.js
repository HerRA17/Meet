import { render } from 'nprogress';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer,Legend } from 'recharts';

const EventGenre = ({events}) => {
    const [data, setData] = useState([]);
    
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const data = genres.map((genre) => {
          const value = events.filter(({ summary }) => summary.split('').includes(genre)).length
          return {name: genre , value};
        })
        return data;
    }
    useEffect(() => {setData(() => getData()); }, [events]);

    const Colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#D4ADFC']

    const Radian = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Radian);
    const y = cy + radius * Math.sin(-midAngle * Radian);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Legend />
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
           </Pie>
           {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
            ))}
          </PieChart>
        </ResponsiveContainer>
    );
}
     export default EventGenre;