// pages/page.js

import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Page.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import FooterSection from '../components/FooterSection';

export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Landing Page</title>
        <meta name="description" content="Modern gym landing page with fitness tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.13.0/dist/tf.min.js"
        strategy="afterInteractive"
      />

      <Header />
      <Hero />
      <Benefits />
      <Features />
      <CallToAction />
      <FooterSection />
      <Footer />

      <style jsx global>
        {`
          :root {
            --primary-color: #3B2D70;
            --secondary-color: #7E22CE;
            --accent-color: #06B6D4;
            --dark-color: #0F172A;
            --light-color: #F8FAFC;
          }

          body {
            font-family: 'Inter', sans-serif;
            background-color: var(--light-color);
            color: #333;
          }

          h1 {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            line-height: 60px;
            color: var(--primary-color);
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 36px;
              line-height: 48px;
            }
          }
        `}
      </style>
    </div>
  );
}
// components/Hero.js

import styles from '../styles/Hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to Gym Land!</h1>
        <p>Reach your fitness goals with our expert trainers and state-of-the-art equipment.</p>
        <Link href="/training-plan">
          <a className={styles.button}>Start Your Fitness Journey</a>
        </Link>
      </div>
      <div className={styles.heroImage}>
        <Image src="/fitness-tracker.png" width={300} height={300} />
      </div>
    </div>
  );
};

export default Hero;
// components/Benefits.js

import styles from '../styles/Benefits.module.scss';
import { FaDumbbell, FaUserCheck, FaLock } from 'react-icons/fa';

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <h2>Our Benefits</h2>
      <div className={styles.benefit}>
        <div className={styles.benefitIcon}>
          <FaDumbbell />
        </div>
        <div className={styles.benefitContent}>
          <h3>State-of-the-Art Equipment</h3>
          <p>Our gym is equipped with the latest fitness equipment to help you reach your goals.</p>
        </div>
      </div>
      <div className={styles.benefit}>
        <div className={styles.benefitIcon}>
          <FaUserCheck />
        </div>
        <div className={styles.benefitContent}>
          <h3>Expert Trainers</h3>
          <p>Our trainers are experienced and certified to help you achieve your fitness goals.</p>
        </div>
      </div>
      <div className={styles.benefit}>
        <div className={styles.benefitIcon}>
          <FaLock />
        </div>
        <div className={styles.benefitContent}>
          <h3>Secure and Clean Environment</h3>
          <p>Our gym is clean and secure, providing a comfortable environment for your workouts.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;