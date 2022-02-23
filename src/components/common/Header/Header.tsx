import { MainLayout } from '../../mixins/MainLayout';
import { HeaderWrapper } from './styled';
import React from 'react';

// @readme: very basic layout for header, later we should add nav links, search bar and other
export interface HeaderProps {
  logo: React.ReactNode | string;
}

export const Header: React.FC<HeaderProps> = ({ logo }) => (
  <HeaderWrapper>
    <MainLayout>{logo}</MainLayout>
  </HeaderWrapper>
);
