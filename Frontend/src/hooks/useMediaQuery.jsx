import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SimpleMediaQuery(breakpoint) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint));
  return matches;
}
