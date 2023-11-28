import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Story.module.scss';

const Story = ({story}) => {
    const cx = classNames.bind(styles);
    const contRef= useRef();
    const [ isFullStory, setIsFullStory ] = useState(false);
    const [ isOverflow, setIsOverflow ] = useState();

    useEffect(() => {
        const checkTextOveflow = () => {
            setIsOverflow(contRef.current.clientHeight < contRef.current.scrollHeight? true : false)
        }
        checkTextOveflow();
    },[story]);

    const handleStory = () => {
        setIsFullStory(!isFullStory);
    };

    return (
        <div className={styles.story}>
            <p 
                className={cx('cont', {'active' : isFullStory})}
                ref={contRef}
            >
                {story}
            </p>
            {
                isOverflow && (
                    <div className={styles.toggle_wrap}>
                        <button 
                            type="button"
                            className={cx('toggle_btn', {'close' : isFullStory})}
                            onClick={() => {
                                handleStory();
                            }}
                        >
                            {isFullStory? '닫기' : '더보기'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Story;