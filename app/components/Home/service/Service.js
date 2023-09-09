import React from 'react'
import ServiceCard from '../../card/ServiceCard';
const Service = () => {
    const services = [
        {
          title: "Naturopathy",
          description: "Naturopathy is a form of alternative medicine that emphasizes the body's natural ability to heal itself. It is based on the belief that the body has an inherent ability to maintain and restore health, and naturopathic practitioners aim to support and facilitate this healing process using natural therapies and treatments.",
          image: "1.png",
        },
        {
          title: "Aayurveda",
          description: "Ayurveda is an ancient system of natural healing that originated in India more than 5,000 years ago. It is considered one of the world's oldest holistic healing systems and is still widely practiced today. Ayurveda is a Sanskrit term that translates to knowledge of life or science of life, and it encompasses a comprehensive approach to health and wellness.",
          image: "3.png",
        },
        {
            title: "Therapy",
            description: "Therapy is a broad term that encompasses a range of approaches and techniques aimed at improving an individual's mental, emotional, and psychological well-being. It is often provided by trained professionals, such as therapists, counselors, psychologists, or psychiatrists, who have expertise in understanding and addressing various mental health concerns.",
            image: "2.png",
          },
        // Add more product objects as needed
      ];
      
  return (
    <>
   <h1 className='text-start ml-10 mt-10 md:text-8xl text-3xl font-bold'><font className='text-green-600'>Naturopathy</font> & <font className='text-yellow-500'>Yoga</font></h1>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
       
       {
            services.map((service) =>(
                <ServiceCard key={service.name} title={service.title} content={service.description} image={service.image} />
            ))
       }
        
    </div>
    </>
  )
}

export default Service