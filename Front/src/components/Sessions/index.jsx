import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const LineChartContainer = styled.div`
width: 100%;
height: 300px;
background-color: #FF0000;
`

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', padding: '5px', borderRadius: '5px' }}>
        <p>{`${payload[0].value} min`}</p> {/* Affiche sessionLength avec "min" */}
      </div>
    );
  }
  return null;
};

const SessionDuration = ({userAverageSessions}) => {
    const data = userAverageSessions.sessions.map((session) => ({
       day: session.day, 
       sessionLength: session.sessionLength
   }))
   
    // Trouver la valeur maximale
  const maxValue = Math.max(...data.map(item => item.sessionLength));

  // Liste des initiales des jours
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return (
        <LineChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke='none' /> 
          <XAxis dataKey="day" stroke="#FFFFFF" axisLine={false} tickLine={false}  tickFormatter={(tick) => days[tick - 1]} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line type="monotone" dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={({ cx, cy, value }) => value === maxValue ? <circle cx={cx} cy={cy} r={8} fill="#FFFFFF" /> : null} />// Afficher un dot uniquement pour la valeur max
        </LineChart>
      </ResponsiveContainer>
      </LineChartContainer>
    );
  }

export default SessionDuration
