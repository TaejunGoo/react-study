import styles from './PlayButton.module.scss';
import { ReactComponent as PlayImg } from 'assets/images/play.svg';

const PlayButton = ({frequency, lastPlayTime, duration}) => {

    const handleClick = () => {
        console.log('플레이')
    }

    const playedPercent = lastPlayTime > 0 && (
        (Math.ceil(lastPlayTime / duration * 100)) + '%'
    );
    
    return (
        <button
            type="button"
            onClick={() => {handleClick()}}
            className={styles.playButton}
        >
            <PlayImg className={styles.playIcon}/>
            {lastPlayTime > 0? (
                <>
                    <span>{frequency}화 이어보기</span>
                    <div className={styles.progress_wrap}>
                        <span className={styles.progress} style={{width:playedPercent}}></span>
                    </div>
                </>
            ) : (
                '시청하기'
            )}

        </button>
    );
};

export default PlayButton;