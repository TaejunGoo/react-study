import styles from './MainContainer.module.scss';

const MainContainer = ({children}) => {
    return <main className={styles.mainContainer}>{children}</main>;
};

export default MainContainer;