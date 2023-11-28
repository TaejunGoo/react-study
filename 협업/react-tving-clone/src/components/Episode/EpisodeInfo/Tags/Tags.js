import classNames from 'classnames/bind';
import styles from './Tags.module.scss';

const Tags = ({content}) => {
    const cx = classNames.bind(styles);
    const getGradeClass = (gradeCode) => {
        switch(gradeCode){
            case 'CMMG0200' : {
                return 'cmmg-12'
            }
            case 'CMMG0400' : {
                return 'cmmg-19';
            }
            case 'CPTG0400' : {
                return 'cptg-15'
            }
            default : {
                return ''
            }
        }
    }

    return (
        <div className={styles.tag_wrap}>
            <div className={cx('tag', 'tag-age', `tag-age-${getGradeClass(content.gradeCode)}`)}></div>
            {content.type === "program"  && (
                <>
                    <div className={cx('tag', 'tag-blank')}>{content.broadInfo}</div>
                    <div className={cx('tag', 'tag-blank')}>{content.genre}</div>
                    <div className={cx('tag', 'tag-blank')}>{content.channelName}</div>
                    <div className={cx('tag', 'tag-blank')}>시즌 {content.seasonPgmNo}개</div>
                </>
            )}
            {content.type === "movie"  && (
                <>
                    <div className={cx('tag', 'tag-blank')}>{content.releaseDate.slice(0,4)}</div>
                    <div className={cx('tag', 'tag-blank')}>{content.genre}</div>
                    <div className={cx('tag', 'tag-blank')}>{Math.floor((content.duration) / 60) + '분'}</div>
                    {content.isDrm && <div className={cx('tag', 'tag-blank')}>DRM</div>}
                </>
            )}
        </div>
    );
};

export default Tags;