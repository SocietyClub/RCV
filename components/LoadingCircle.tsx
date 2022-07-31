import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

type Props = {
  showCircle: boolean | undefined;
};

export function LoadingCircle({ showCircle }: Props) {
  if (!showCircle) {
    return null;
  }
  return (
    <Fade
      in={showCircle}
      style={{
        transitionDelay: showCircle ? '800ms' : '0ms',
      }}
      unmountOnExit
    >
      <div
        style={{
          // do your styles depending on your needs.
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </div>
    </Fade>
  );
}
