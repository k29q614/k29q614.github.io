// pages/index.js
import styles from '../styles/Home.module.css'; 
import Counter from '../components/Counter';
import ProjectInfo from '../components/ProjectInfo';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className={styles.container}> {/* Use the imported styles */}
      <h1 className={styles.header}>Delaney Rubb Next.js App</h1> {/* Apply the header class */}
      <Counter increment={1} buttonColor="lightblue" />
      <Counter increment={2} buttonColor="lightcoral" />
      <ProjectInfo />
      <SearchBar />
    </div>
  );
}
