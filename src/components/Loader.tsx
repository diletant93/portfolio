import {Triangle} from 'react-loader-spinner'
export default function Loader() {
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
