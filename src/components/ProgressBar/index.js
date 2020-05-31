import React from 'react';
import { ProgressView, StyledLine, StyledCircle } from './styles';

export default function ProgressBar({ withdrawal, delivered }) {
  const withdrawaled = withdrawal !== null;
  const wasDelivered = delivered !== null;
  return (
    <ProgressView>
      <StyledCircle active />
      <StyledLine />
      <StyledCircle active={withdrawaled} />
      <StyledLine />
      <StyledCircle active={wasDelivered} />
    </ProgressView>
  );
}
