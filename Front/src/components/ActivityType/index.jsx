import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ActivityType = ({userPerformance}) => {
 // Transformer les données pour qu'elles soient prêtes pour le RadarChart
 const dataType = userPerformance.data.map((item) => ({
    subject: userPerformance.kind[item.kind], // Récupérer le nom de l'activité à partir de 'kind'
    value: item.value, // La valeur associée à cette activité
}));

const RadarChartContainer = styled.div`
width: 100%;
height: 300px;
background-color: #282D30;
`

    return (
        <RadarChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataType} >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tickLine={false} />
          <Radar name="Performance" dataKey="value"  fill="#FF0101" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>
      </RadarChartContainer>
    );
  }

export default ActivityType