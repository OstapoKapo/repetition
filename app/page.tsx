import styles from './page.module.scss';
import HeroPng from '../public/hero.png';
import Image from 'next/image';

const Home = () => {
  return (
   <div className={styles.container}>
    <div className={styles.text}>
      <h1 className={styles.tittle}>Better design fro your digigtal products</h1>
      <p className={styles.desc}>
        Turning your Idea into Reality. We bring together the teams from the
         global tech industry
      </p>
      <button className={styles.button}>See Our Works</button>
    </div>
    <div className={styles.item}>
      <Image src={HeroPng} width={15} height={15} alt="" className={styles.img}/>
    </div>
   </div>
  )
}

export default Home