import { selectTheme } from '@/features/ThemeMode';
import { THEMES } from '@/features/ThemeMode/constants/themes';
import {Triangle} from 'react-loader-spinner'
import { useSelector } from 'react-redux';
export default function Loader() {
  const theme = useSelector(selectTheme)
  if(theme === THEMES.LIGHT){
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
       <Triangle
       visible={true}
       height={40}
       width={40}
       color='#000'
       ariaLabel='triangle-loading'/>
      </div>
    );
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
     <Triangle
     visible={true}
     height={40}
     width={40}
     color='#fff'
     ariaLabel='triangle-loading'/>
    </div>
  );
}
