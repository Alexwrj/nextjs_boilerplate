import { ButtonComponent } from './ButtonComponent';
import Link from 'next/link';
import React from 'react';

interface BackButtonAsLinkProps {
  link: string;
  onClick?: never;
}

interface BackButtonAsRouterProps {
  link?: never;
  onClick: () => void;
}

type BackButtonProps = BackButtonAsLinkProps | BackButtonAsRouterProps;

export const BackButton: React.FC<BackButtonProps> = ({ link, onClick }) => {
  return (
    <>
      {link && (
        <Link href={link}>
          <ButtonComponent />
        </Link>
      )}
      {onClick && <ButtonComponent onClick={onClick} />}
    </>
  );
};
