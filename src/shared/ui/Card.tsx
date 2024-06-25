import { Box } from '@mui/material';
import { memo, MouseEvent, ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface CardProps {
  remove: () => void;
  onClick: () => void;
  children: ReactNode;
  bgColor?: string;
}

export const Card = memo((props: CardProps) => {
  const { children, onClick, remove, bgColor } = props;

  const handleCrossButton = (event: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    event.stopPropagation();
    remove();
  };

  return (
    <Box
      onClick={onClick}
      display="flex"
      alignItems="center"
      flexDirection={'column'}
      minHeight={150}
      flexBasis="calc(25% - 32px)"
      flexShrink={1}
      gap={2}
      m={2}
      py={2}
      px={4}
      bgcolor={bgColor ?? '#92C2FF'}
      sx={{
        border: '2px solid grey',
        cursor: 'pointer',
        '@media (max-width: 1000px)': {
          flexBasis: 'calc(50% - 32px)',
        },
        '@media (max-width: 600px)': {
          flexBasis: '100%',
        },
      }}
      position="relative"
      borderRadius={4}>
      <CloseIcon
        style={{
          position: 'absolute',
          right: '5px',
          top: '5px',
          fill: '#b6d1db',
          stroke: 'black',
          cursor: 'pointer',
        }}
        onClick={handleCrossButton}
      />
      {children}
    </Box>
  );
});
