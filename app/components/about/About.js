"use client";
import React from "react";
import {motion} from 'framer-motion';
const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // Initial state (hidden)
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Visible state
  };

  const therapy = [
    {
      name:'Naturopathy',
    },
    {
      name:'Naturopathy',
    }
    ,{
      name:'Ayurveda',
    }
    ,
    {
      name:'Detox Centre',
    }
    ,
    {
      name:'Hair Treatment',
    }
    ,
    {
      name:'Face Treatment',
    }
    ,
    {
      name:'chronic Pains',
    }
    ,
    {
      name:'Abdominal Problems',
    }
    ,
    {
      name:'Meditation',
    }
    ,
    {
      name:'Yoga',
    }
    ,
    {
      name:'Panchkarma',
    },
    {
      name:'Kansa Therapy',
    },
    {
      name:'Hot Tub Therapy',
    },
    {
      name:'Mud Therapy',
    },
    {
      name:'Reiki Healing',
    },
    {
      name:'Accupressure',
    },
  ]
  
  return (
    <>
    <section className="container mx-auto w-full md:w-[100%] p-10 relative">
      <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="flex md:flex-row flex-col">
        <div className="md:w-[30%] w-full md:m-10">
          <h6 className="font-bold text-green-700 text-sm">DHANVANTRI NANKI FOUNDATION</h6>
          <h1 className="text-green-900 text-4xl">
            THERAPY
          </h1>
          <ol className="ml-2">
            {
              therapy.map((items, index) => {
                  return(
                    <li className="text-green-700 flex m-2" key={index}><img src="https://t4.ftcdn.net/jpg/03/11/53/77/360_F_311537787_V5pD8sE52ZSTb5Kj3BOKevntFUaZv4AG.jpg" width={"6%"} alt="aayurveda" className="mr-2" /> {items.name}</li>
                  )
              })
            }
          </ol>
        </div>
        <div className="md:w-[70%] w-full md:mt-0 mt-24">
          <img className="md:mt-20" src="https://nexwellness.com/wp-content/uploads/2021/06/NDpic.jpg" width={'100%'}  />
        
        </div>
      </motion.div>      
    </section>
     </>
  );
};

export default About;
