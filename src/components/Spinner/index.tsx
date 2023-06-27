// -> Import da lib externa de Icons
import { CirclesWithBar } from 'react-loader-spinner';

// -> Tipando as props do component
interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 250 }: SpinnerProps) {

  return (
    <CirclesWithBar
      height={size}
      width={size}
      color="#5061FC"
      ariaLabel="revolving-dot-loading"
      visible={true}
    />
  );
}
