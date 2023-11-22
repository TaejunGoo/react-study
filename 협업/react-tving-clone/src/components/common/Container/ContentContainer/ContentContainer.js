import styles from './ContentContainer.module.scss';

const ContentContainer = ({children}) => {
    return <div className={styles.ContentContainer}>{children}</div>;
};

export default ContentContainer;