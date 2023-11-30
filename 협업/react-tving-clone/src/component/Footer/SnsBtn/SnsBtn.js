import styles from './SnsBtn.module.scss';

const SnsBtn = ({ type }) => {
    const snsTypeUrls = {
        youtube: 'https://www.youtube.com/c/TVING_official',
        instagram: 'https://www.instagram.com/tving.official/',
        twitter: 'https://twitter.com/tvingdotcom',
        facebook: 'https://www.facebook.com/CJTVING/',
    };

    const socialLink = snsTypeUrls[type];

    return (
        <a href={socialLink} className={`${styles.snsType} ${styles[`SnsBtn_${type}`]}`} target="_blank" rel="noopener noreferrer">
            {type}
        </a>
    );
}

export default SnsBtn;
