import { useContext } from 'react';
import { ContentContext } from 'pages/Contents';
import styles from './EpisodeInfo.module.scss';

import { TvingOnlyLabel, TvingOriginalLabel, ParamountLabel } from 'components/common/Label/Label';
import Tags from './Tags/Tags';
import PlayButton from 'components/common/Button/PlayButton/PlayButton';
import InteractBtns from './InteractBtns/InteractBtns';
import Story from './Story/Story';

const EpisodeInfo = () => {
    const content = useContext(ContentContext);

    return (
        <div className={styles.episodeInfo}>
            <div className={styles.blurredBg}>
                <div>
                    <img src={content.thumbnail} alt={content.contentName} />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.grid}>
                    <div className={styles.poster}>
                        <img src={content.thumbnail} alt="" />
                        <div className={styles.label_wrapper}>
                            {content.isOriginal && <TvingOriginalLabel/>}
                            {content.isExclusive && <TvingOnlyLabel/>}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            <span className={styles.title_label}>
                                {content.isOriginal && <TvingOriginalLabel/>}
                                {content.isExclusive && <TvingOnlyLabel/>}
                                {content.isParamount && <ParamountLabel/>}
                            </span>
                            <div className={styles.title_wrap}>
                                {content.logoImage? (
                                        <img src={content.logoImage} alt={content.contentName} />
                                    ) : (
                                        <span>{content.contentName}</span>
                                    )
                                }
                            </div>
                        </h2>
                        <Tags content={content} />
                        <div className={styles.btns}>
                            <PlayButton 
                                frequency={content.frequency} 
                                lastPlayTime={content.lastPlayTime} 
                                duration={content.duration} 
                            />
                            <InteractBtns /> 
                        </div>
                        <div className={styles.person}>
                            <dl>
                                <dt>크리에이터</dt>
                                <dd>{content.directorsName}</dd>
                            </dl>
                            <dl>
                                <dt>출연</dt>
                                <dd>{content.actorsName}</dd>
                            </dl>
                        </div>
                        <div className={styles.story}>
                            <Story story={content.story} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeInfo;