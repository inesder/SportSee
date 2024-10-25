import styled from 'styled-components';


function CardInfos({ icon, value, label }) {

  const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FBFBFB;
  padding-left: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.0212);
  height: 125px;
  width: 260px;
  display: flex;
  gap: 50px;
`;

  const Icon = styled.img`
  width: 60px;
  height: 60px;
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
      <Icon src={icon} alt={`${label} icon`} />
      <InfoContainer>
        <Value>{value}</Value>
        <Label>{label}</Label>
      </InfoContainer>
    </CardContainer>
  )
}

export default CardInfos
