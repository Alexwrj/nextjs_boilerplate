import { DefaultWrapper } from '@common/InfiniteScroll/styled';
import { FontStyle, Text } from '@common/Text';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollProps {
  onOverlap: () => void;
  customWrapper?: React.FC;
  threshold?: number;
}

const DEFAULT_THRESHOLD = 0.3;

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onOverlap,
  customWrapper,
  threshold,
}) => {
  const { ref, inView } = useInView({ threshold: threshold || DEFAULT_THRESHOLD });

  useEffect(() => {
    if (inView) {
      onOverlap();
    }
  }, [inView]);

  const Wrapper = customWrapper || DefaultWrapper;

  return (
    <Wrapper ref={ref}>
      <Text fontStyle={FontStyle.ItalicTitle}>Loading more exhibitions...</Text>
    </Wrapper>
  );
};
