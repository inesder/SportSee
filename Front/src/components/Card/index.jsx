import styled from 'styled-components';


function CardInfos({icon, value, label}){
    const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  height: 125px;
  display: flex;
  gap: 100px;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Value = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const Label = styled.span`
  font-size: 14px;
  color: #777;
`;

    return (
<CardContainer>
      <IconContainer>
        <img src={icon} alt={`${label} icon`} />
      </IconContainer>
      <InfoContainer>
        <Value>{value}</Value>
        <Label>{label}</Label>
      </InfoContainer>
    </CardContainer>
    )
}

export default CardInfos
