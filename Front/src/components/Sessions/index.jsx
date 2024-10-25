import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { useState } from 'react';


const LineChartContainer = styled.div`
width: 260px;
height: 260px;
background-color: #FF0000;
border-radius: 5px;
position: relative;
`

const LineChartLabel = styled.p`
color: #FFFF;
opacity: 0.5;
margin: 30px 75px 0 35px;
font-size: 15px;
`
const CursorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.x}px; /* Utilise la position de la souris */
  width: ${(props) => `calc(100% - ${props.x}px)`}; /* Étendre à droite depuis le curseur */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); /* Couleur sombre */
  pointer-events: none; /* Laisse les interactions avec le graphique fonctionner normalement */
  transition: all 0.1s ease;
`;


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

const SessionDuration = ({ userAverageSessions }) => {
  const [cursorX, setCursorX] = useState(0);

  const data = userAverageSessions.sessions;

  const handleMouseMove = (e) => {
    if (e && e.activeLabel) {
      setCursorX(e.chartX); // Capture la position X de la souris
    }
  };

  const handleMouseLeave = () => {
    setCursorX(0); // Réinitialise le curseur quand la souris quitte le graphique
  };


  // Liste des initiales des jours

  return (
    <LineChartContainer>
      <LineChartLabel>Durée moyenne des sessions</LineChartLabel>
      <CursorOverlay x={cursorX} />
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 40,
          }}
          onMouseMove={handleMouseMove} // Surveille les mouvements de la souris
          onMouseLeave={handleMouseLeave} // Réinitialise à la sortie
        >
          <defs>
            {/* Définition du gradient */}
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke='none' />
          <XAxis dataKey="day" stroke="#FFFFFF" opacity={0.4} axisLine={false} tickLine={false} />

          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line type="monotone" dataKey="sessionLength" stroke="url(#colorGradient)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </LineChartContainer>
  );
}

export default SessionDuration
