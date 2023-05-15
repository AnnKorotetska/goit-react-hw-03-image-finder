import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.backdropLoader}>
      <ThreeDots
        height={100}
        width={100}
        radius={5}
        color="red"
        ariaLabel="three-dots-loading"
        wrapperClass={css.loader}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
}
