import { ReactComponent as TvingOnlyImg } from 'assets/images/TvingOnlyLabel.svg'
import { ReactComponent as TvingOriginalImg } from 'assets/images/TvingOriginalLabel.svg'
import { ReactComponent as ParamountImg } from 'assets/images/paramountLabel.svg'
import styles from './Label.module.scss'

export const TvingOriginalLabel = () => {
    return (
        <div className={styles.label}>
            <TvingOriginalImg />
        </div>
    );
};

export const TvingOnlyLabel = () => {
    return (
        <div className={styles.label}>
            <TvingOnlyImg />
        </div>
    );
};

export const ParamountLabel = () => {
    return (
        <div className={styles.label}>
            <ParamountImg />
        </div>
    );
}