import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { useState } from 'react';

// Container for the line chart with background and styling
const LineChartContainer = styled.div`
  width: 260px;
  height: 260px;
  background-color: #FF0000;
  border-radius: 5px;
  position: relative;
`;

// Label for the chart, positioned at the top
const LineChartLabel = styled.p`
  color: #FFFF;
  opacity: 0.5;
  margin: 30px 75px 0 35px;
  font-size: 15px;
`;

// Overlay that follows the cursor across the chart, darkening the area to the right of the cursor
const CursorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.x}px; // Position based on cursor
  width: ${(props) => `calc(100% - ${props.x}px)`};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  pointer-events: none;
  transition: all 0.1s ease;
`;

// Custom tooltip to display session length in minutes
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', padding: '5px', borderRadius: '5px' }}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

const SessionDuration = ({ userAverageSessions }) => {
  const [cursorX, setCursorX] = useState(0); // Tracks cursor position

  const data = userAverageSessions.sessions; // Data for the chart

  // Updates cursor position when the mouse moves within the chart area
  const handleMouseMove = (e) => {
    if (e && e.activeLabel) {
      setCursorX(e.chartX);
    }
  };

  // Resets cursor overlay when the mouse leaves the chart area
  const handleMouseLeave = () => {
    setCursorX(0);
  };

  return (
    <LineChartContainer>
      <LineChartLabel>Durée moyenne des sessions</LineChartLabel>
      <CursorOverlay x={cursorX} /> {/* Overlay follows cursor along the x-axis */}
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 40 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            {/* Gradient definition for the line color */}
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="none" /> {/* Removes grid lines for a clean look */}
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            opacity={0.4}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} /> {/* Tooltip on hover */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#colorGradient)"
            strokeWidth={2}
            dot={false}
          /> {/* Line representing session duration */}
        </LineChart>
      </ResponsiveContainer>
    </LineChartContainer>
  );
}

export default SessionDuration;
