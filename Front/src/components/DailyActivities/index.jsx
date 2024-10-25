import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import blackdot from '../../assets/blackdot.png';
import reddot from '../../assets/reddot.png';

// Container for the entire bar chart
const BarChartContainer = styled.div`
  width: 100%;
  height: 320px;
  background-color: #FBFBFB;
  border-radius: 5px;
`;

// Header section for the chart title and legend
const BarChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 30px 65px 25px;
`;

// Chart title styling
const BarChartLabel = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`;

// Container for the chart legend items
const BarChartLegend = styled.div`
  display: flex;
  color: #74798C;
  font-weight: 500;
  font-size: 14px;
  gap: 30px;
`;

// Wrapper for each individual legend item
const LegendContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

// Dot icon used in the legend
const DotLegend = styled.img`
  width: 8px;
  height: 8px;
`;

// Text for each legend item
const LegendText = styled.p`
  margin: 0;
`;

// Custom bar shape component to apply rounded corners to bars
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 3;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius} // Horizontal border-radius
      ry={radius} // Vertical border-radius
    />
  );
};

// DailyActivities component displaying user's daily weight and calorie data
const DailyActivities = ({ userActivity }) => {
  const data = userActivity.sessions; // Data for the chart

  return (
    <BarChartContainer>
      <BarChartHeader>
        <BarChartLabel>Activité quotidienne</BarChartLabel>
        <BarChartLegend>
          <LegendContainer>
            <DotLegend src={blackdot} alt="blackdot" />
            <LegendText>Poids (kg)</LegendText>
          </LegendContainer>
          <LegendContainer>
            <DotLegend src={reddot} alt="blackdot" />
            <LegendText>Calories brûlées (kCal)</LegendText>
          </LegendContainer>
        </BarChartLegend>
      </BarChartHeader>
      <ResponsiveContainer width="100%" height="60%">
        <BarChart data={data} margin={{ top: 20, right: 0, left: 30, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} /> {/* Horizontal grid lines */}
          <XAxis dataKey="day" tickLine={false} stroke="#9B9EAC" dy={15} /> {/* X-axis for days */}

          {/* Right Y-axis for weight in kg */}
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={['dataMin-3', 'dataMax+10']}
            tickCount="3"
          />

          {/* Hidden left Y-axis for calories */}
          <YAxis
            yAxisId="left"
            orientation="left"
            tickLine={false}
            axisLine={false}
            hide={true}
            domain={['dataMin-30', 'dataMax+10']}
          />
          <Tooltip /> {/* Default tooltip for the chart */}

          {/* Bar for displaying weight data, aligned to the right Y-axis */}
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            name="Poids (kg)"
            shape={<CustomBar />}
          />

          {/* Bar for displaying calorie data, aligned to the left Y-axis */}
          <Bar
            yAxisId="left"
            dataKey="calories"
            barSize={7}
            fill="#E60000"
            name="Calories brûlées"
            shape={<CustomBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </BarChartContainer>
  );
};

export default DailyActivities;
