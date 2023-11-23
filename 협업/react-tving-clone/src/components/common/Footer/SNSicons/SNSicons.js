import { Link } from 'react-router-dom';
import styles from './SNSicons.module.scss';
import { ReactComponent as YoutubeIcon} from 'assets/images/share-youtube.svg';
import { ReactComponent as InstaIcon} from 'assets/images/share-instagram.svg';
import { ReactComponent as TwitterIcon} from 'assets/images/share-twitter.svg';
import { ReactComponent as FacebookIcon} from 'assets/images/share-facebook.svg';

const SNSicons = () => {
    return (
        <div className={styles.snsIcons}>
            <div className={styles.item}>
                <Link to={'https://www.youtube.com/c/TVING_official'}>
                    <YoutubeIcon />
                </Link>
            </div>
            <div className={styles.item}>
                <Link to={'https://www.instagram.com/tving.official/'}>
                    <InstaIcon />
                </Link>
            </div>
            <div className={styles.item}>
                <Link to={'https://twitter.com/tvingdotcom'}>
                    <TwitterIcon />
                </Link>
            </div>
            <div className={styles.item}>
                <Link to={'https://www.facebook.com/CJTVING/'}>
                    <FacebookIcon />
                </Link>
            </div>
        </div>
    )
};

export default SNSicons;