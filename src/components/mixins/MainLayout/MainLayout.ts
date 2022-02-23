import styled from 'styled-components';

export const MainLayout = styled.div`
  margin: 0 auto;
  max-width: 1440px;

  // TODO: create the media width for mobile, tab etc
  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;
