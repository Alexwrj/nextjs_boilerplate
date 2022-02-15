import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React from 'react';

const { BASE_URL } = getConfig().publicRuntimeConfig;

export const Head: React.FC = () => {
  const router = useRouter();

  // clear all query params
  const hrefLinkCanonical = router.asPath.split('?')[0];

  return (
    <Head>
      <title>Exhibitions</title>
      <meta name="description" content="This is an exhibition page, welcome!" />
      {/*  TODO: add other meta tags */}
      <link rel="canonical" href={`${BASE_URL}${hrefLinkCanonical}`} />
    </Head>
  );
};
