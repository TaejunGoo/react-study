import styles from './Episode.module.scss';
import EpisodeInfo from './EpisodeInfo/EpisodeInfo';

const Content = () => {
    return (
        <div className={styles.content}>
            <EpisodeInfo/>
        </div>
    );
};

export default Content;