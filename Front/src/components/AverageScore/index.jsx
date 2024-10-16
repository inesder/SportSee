import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';

function AverageScore({scoreData}){
    const score = [{score: scoreData * 100}]

    const RadialChartContainer = styled.div`
    width: 260px;
    height: 260px;
    border-radius: 5px;
    background-color: #FBFBFB;
    `

    const RadialChartLabel = styled.p`
    margin:0;
    padding: 24px 0 0 30px;
    font-size: 15px;
    font-weight: 500;
    `


    return (
        <RadialChartContainer>
          <RadialChartLabel>Score</RadialChartLabel>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="40%" innerRadius="70%" outerRadius='100%' barSize={10} startAngle={90} endAngle={450} data={score} > 
          <PolarAngleAxis
            type="number"
            domain={[0, 100]} 
            tick={false}       
          /> 
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="score"
              fill='#FF0000'
              cornerRadius={10}
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
                  y={cy + 20} 
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
