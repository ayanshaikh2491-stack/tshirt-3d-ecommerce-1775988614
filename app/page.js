// pages/index.js
import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero
        title="Get Fit with Us"
        subtitle="Join our gym today and start your fitness journey"
        cta="Join Now"
      />

      <About
        title="Our Story"
        text="We are a community-driven gym that helps people achieve their fitness goals"
        image="/about.jpg"
      />

      <Services
        title="Our Services"
        services={[
          {
            title: 'Personal Training',
            description: 'Get personalized training sessions with our experienced trainers',
          },
          {
            title: 'Group Classes',
            description: 'Join our group classes for a fun and challenging workout',
          },
          {
            title: 'Equipment Room',
            description: 'Access our state-of-the-art equipment room for a great workout',
          },
        ]}
      />

      <Testimonials
        title="What Our Members Say"
        testimonials={[
          {
            text:
              'I have been a member of this gym for a year now and I can see the progress I have made',
            name: 'John Doe',
          },
          {
            text:
              'The trainers here are very knowledgeable and helpful, they really know what they are doing',
            name: 'Jane Doe',
          },
        ]}
      />

      <Contact
        title="Get in Touch"
        formFields={[
          {
            label: 'Name',
            name: 'name',
            type: 'text',
          },
          {
            label: 'Email',
            name: 'email',
            type: 'email',
          },
          {
            label: 'Message',
            name: 'message',
            type: 'textarea',
          },
        ]}
      />

      <Footer />
    </Fragment>
  );
}
// components/navbar.js
import Link from 'next/link';
import { Nav } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Nav
      bg="#333333"
      color="#ffffff"
      justify="space-between"
      padding="1rem"
      display="flex"
      alignItems="center"
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/classes">
        <a>Classes</a>
      </Link>
      <Link href="/training-plans">
        <a>Training Plans</a>
      </Link>
      <Link href="/workouts">
        <a>Workouts</a>
      </Link>
      <Link href="/join">
        <a>Join</a>
      </Link>
    </Nav>
  );
};

export default Navbar;
// components/hero.js
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

const Hero = ({ title, subtitle, cta }) => {
  return (
    <Flex
      bg="#8B9467"
      color="#ffffff"
      justifyContent="center"
      alignItems="center"
      padding="5rem"
      direction="column"
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button>{cta}</button>
    </Flex>
  );
};

export default Hero;
// components/about.js
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

const About = ({ title, text, image }) => {
  return (
    <Flex
      bg="#455A64"
      color="#ffffff"
      justifyContent="center"
      alignItems="center"
      padding="5rem"
      direction="column"
    >
      <h1>{title}</h1>
      <p>{text}</p>
      <Image src={image} alt={title} />
    </Flex>
  );
};

export default About;