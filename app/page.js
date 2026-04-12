```jsx
// pages/page.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container, Header, Footer, TrainingCard, ClassCard, TrainingPlanCard, BookingForm } from '../components';
const Page = () => {
  const router = useRouter();
  const [trainings, setTrainings] = useState([]);
  const [classes, setClasses] = useState([]);
  const [trainingPlans, setTrainingPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrainings = async () => {
      const response = await fetch('/api/trainings');
      const data = await response.json();
      setTrainings(data);
    };
    const fetchClasses = async () => {
      const response = await fetch('/api/classes');
      const data = await response.json();
      setClasses(data);
    };
    const fetchTrainingPlans = async () => {
      const response = await fetch('/api/training-plans');
      const data = await response.json();
      setTrainingPlans(data);
    };
    Promise.all([fetchTrainings(), fetchClasses(), fetchTrainingPlans()]).then(() => setLoading(false));
  }, []);
  return (
    <>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym Website" />
      </Head>
      <Container>
        <Header />
        <main>
          <section className="bg-dark pt-12 pb-12 md:pt-16 md:pb-20">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-8/12 p-4 md:p-6">
                  <h2 className="text-3xl font-bold text-white">Welcome to Our Gym!</h2>
                  <p className="text-lg text-gray-200 pt-2">Our gym offers a variety of fitness programs and services to help you reach your goals.</p>
                  <Link href="#fitness-programs">
                    <a className="text-lg text-cyan-400 font-bold py-2 px-4 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="fitness-programs" className="bg-light pt-12 pb-12 md:pt-16 md:pb-20">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-8/12 p-4 md:p-6">
                  <h2 className="text-3xl font-bold text-dark">Fitness Programs and Services</h2>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {trainings.map((training, index) => (
                      <TrainingCard key={training.id || index} training={training} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="classes" className="bg-dark pt-12 pb-12 md:pt-16 md:pb-20">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-8/12 p-4 md:p-6">
                  <h2 className="text-3xl font-bold text-white">Classes and Timetables</h2>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {classes.map((classData, index) => (
                      <ClassCard key={classData.id || index} classData={classData} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="training-plans" className="bg-light pt-12 pb-12 md:pt-16 md:pb-20">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-8/12 p-4 md:p-6">
                  <h2 className="text-3xl font-bold text-dark">Training Plans and Schedules</h2>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {trainingPlans.map((plan, index) => (
                      <TrainingPlanCard key={plan.id || index} plan={plan} />
                    ))}
                  </div>
                </div>
              </div>
            </