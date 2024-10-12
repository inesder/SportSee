import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';

function AverageScore({scoreData}){
    const score = [{score: scoreData * 100}]

    const RadialChartContainer = styled.div`
    width: 100%;
    height: 300px;
    `


    return (
        <RadialChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius='100%' barSize={10} startAngle={90} endAngle={450} data={score} > 
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}  // Limiter le domaine entre 0 et 100 pour correspondre aux pourcentages
            tick={false}       // Pas besoin d'afficher les étiquettes de l'axe
          /> 
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="score"
              fill='#FF0000'
              label={({ cx, cy, value }) => (
                <>
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  style={{ fontSize: '26px', fontWeight:'700' }}
                >
                  {`${value}%`}
                </text>
                <text
                  x={cx}
                  y={cy + 20} /* Place "de votre objectif" sous le pourcentage */
                  fill="#74798C"
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{ fontSize: '16px', fontWeight:'500' }}
                >
                  de votre objectif
                </text>
                </>
              )}
            /> 
            
          </RadialBarChart>
        </ResponsiveContainer>
        </RadialChartContainer>
      );
}

export default AverageScore
