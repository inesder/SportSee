import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const DailyActivities = ({userActivity}) => {
    const data = userActivity.sessions.map((session, index) => ({
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories
    }))

return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
          dataKey="day"
          tickLine={false}
          stroke='#9B9EAC'
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
           <Tooltip/>
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
    </div>
  );
};

export default DailyActivities;
