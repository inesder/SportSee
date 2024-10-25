import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

// Container styling for the radar chart
const RadarChartContainer = styled.div`
width: 260px;
height: 260px;
background-color: #282D30;
border-radius: 5px;
`

// ActivityType component displays a radar chart showing user's performance by activity type
const ActivityType = ({ userPerformance }) => {
  const data = userPerformance.data;

  return (
    <RadarChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tickLine={false} fontSize={12} />
          <Radar name="Performance" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </RadarChartContainer>
  );
}

export default ActivityType
