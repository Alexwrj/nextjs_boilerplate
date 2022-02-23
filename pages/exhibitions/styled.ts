import styled from 'styled-components';

export const ExhibitionsGrid = styled.div`
  display: grid;
  column-gap: 40px;
  row-gap: 22px;
  grid-template-columns: repeat(auto-fill, 313px);
`;

export const InfiniteScrollWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 86px 0;
`;
