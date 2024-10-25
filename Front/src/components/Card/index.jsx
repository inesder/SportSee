import styled from 'styled-components';

function CardInfos({ icon, value, label }) {
  // Container for the card, holding icon and information
  const CardContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #FBFBFB;
    padding-left: 30px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.0212);
    height: 125px;
    width: 260px;
    gap: 50px;
  `;

  // Icon styling for the card image
  const Icon = styled.img`
    width: 60px;
    height: 60px;
  `;

  // Container for value and label text
  const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  // Styling for the primary value text (e.g., calories, protein)
  const Value = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: #000;
  `;

  // Styling for the secondary label text (e.g., "Calories", "Proteins")
  const Label = styled.span`
    font-size: 14px;
    color: #777;
  `;

  return (
    <CardContainer>
      <Icon src={icon} alt={`${label} icon`} /> {/* Displays the icon */}
      <InfoContainer>
        <Value>{value}</Value> {/* Displays the main value */}
        <Label>{label}</Label> {/* Displays the label */}
      </InfoContainer>
    </CardContainer>
  );
}

export default CardInfos;
