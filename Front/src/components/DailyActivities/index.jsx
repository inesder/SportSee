import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import blackdot from '../../assets/blackdot.png';
import reddot from '../../assets/reddot.png';

const BarChartContainer = styled.div`
width: 100%;
height:320px;
background-color: #FBFBFB;
border-radius: 5px;
`
const BarChartHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 25px 30px 65px 25px;

`
const BarChartLabel = styled.p`
font-size: 15px;
font-weight: 500;
margin:0;
`
const BarChartLegend = styled.div`
display: flex;
color: #74798C;
font-weight: 500;
font-size: 14px;
gap: 30px;

`

const LegendContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;

`

const DotLegend = styled.img`
width: 8px;
height: 8px;
`

const LegendText = styled.p`
margin:0;
`

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
      rx={radius} // Définir le border-radius horizontal
      ry={radius} // Définir le border-radius vertical
    />
  );
};

const DailyActivities = ({ userActivity }) => {
  const data = userActivity.sessions;

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
      <ResponsiveContainer width="100%" height="60%" >
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            stroke='#9B9EAC'
            dy={15}
          />
          {/* Axe des ordonnées pour les poids (à droite) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={['dataMin-3', 'dataMax+10']}
            tickCount="3"
          />

          {/* Axe des ordonnées pour les calories (à gauche) */}
          <YAxis
            yAxisId="left"
            orientation="left"
            tickLine={false}
            axisLine={false}
            hide={true} // Cache l'axe des calories pour n'afficher que celui des poids
            domain={['dataMin-30', 'dataMax+10']}
          />
          <Tooltip />
          {/* Barres pour le poids (lié à l'axe des poids) */}
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            name="Poids (kg)"
            shape={<CustomBar />}
          />

          {/* Barres pour les calories (lié à l'axe des calories) */}
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
