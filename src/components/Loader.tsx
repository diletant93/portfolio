import { selectTheme } from '@/features/ThemeMode';
import { THEMES } from '@/features/ThemeMode/constants/themes';
import { Triangle } from 'react-loader-spinner'
import { useSelector } from 'react-redux';
type LoaderVariations = 'big' | 'base' | 'small'
type LoaderProps = {
  variation?: LoaderVariations
}
export default function Loader({ variation = 'big' }: LoaderProps) {
  const theme = useSelector(selectTheme)
  const stylesMap: Record<LoaderVariations, { height: number; width: number }> = {
    big: { height: 80, width: 80 },
    base: { height: 60, width: 60 },
    small: { height: 40, width: 40 },
  };
  const styles = stylesMap[variation] || {};

  if (theme === THEMES.LIGHT) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Triangle
          {...styles}
          visible={true}
          color='#000'
          ariaLabel='triangle-loading' />
      </div>
    );
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Triangle
        {...styles}
        visible={true}
        color='#fff'
        ariaLabel='triangle-loading' />
    </div>
  );
}
