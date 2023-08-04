import React, { useContext } from 'react';
import { serviceData } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import imageSrc1 from "../assets/nitk.jpeg";
import imageSrc2 from "../assets/college.jpeg";
import KPMG from "../assets/KPMG.jpeg";
import udemy from "../assets/udemy.png";
import internshala from "../assets/internshala.jpeg";
import freecodecamp from "../assets/freecodecamp.png";
import cognizant from "../assets/cognizant.png";
import nptel from "../assets/nptel.jpeg";

const Services = () => {
  const theme = useContext(ThemeContext);

  const onlineCertificateData = [
    {
      name: 'Summer Trainings - Web Development',
      //desc: 'KPMG Virtual Experience Program on Forage. Conducted Data Quality Assessment, Data Insights, Data Insights and Presentation.',
      img: internshala,
      link:'https://trainings.internshala.com/verify-certificate/?certificate_number=6hmyvepl4gf'
    },
    {
      name: 'Summer Trainings - Data Science ',
      //desc: 'KPMG Virtual Experience Program on Forage. Conducted Data Quality Assessment, Data Insights, Data Insights and Presentation.',
      img: internshala,
      link:'https://trainings.internshala.com/verify-certificate/?certificate_number=2nzo1nzzo01'
      
    },


    {
      name: 'Machine Learning - AI, Python, ChatGPT',
      //desc: 'KPMG Virtual Experience Program on Forage. Conducted Data Quality Assessment, Data Insights, Data Insights and Presentation.',
      img: udemy,
      link:'https://www.udemy.com/certificate/UC-8243f3ea-b57a-4a06-b64c-0d44e587b1dd/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email'
    },
   
    {
      name: 'Mastering Data Structures and Algorithms',
      //desc: 'Completed an online certification in Backend Development. The certification covered DBMS, PHP, JS, React, and Final Project modules. Scored 97% in the final assessment.',
      img: udemy,
      link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_Lajj5RmTBwH7fGBAT_1689745576564_completion_certificate.pdf'
      
      
    },
    {
      name: 'Artificial Intelligence Virtual Experience Program',
      //desc: 'KPMG Virtual Experience Program on Forage. Conducted Data Quality Assessment, Data Insights, Data Insights and Presentation.',
      img: cognizant,
      link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_Lajj5RmTBwH7fGBAT_1689837137219_completion_certificate.pdf'
      
    },
    {
      name: 'KPMG Data Analytics Consulting Virtual Internship',
      //desc: 'KPMG Data Analytics Consulting Virtual Internship on Forage.',
      img: KPMG,
      link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_Lajj5RmTBwH7fGBAT_1689745576564_completion_certificate.pdf'
      
    },
    {
      name: 'Responsive Web Design',
      //desc: 'Completed an online certification in Backend Development. The certification covered DBMS, PHP, JS, React, and Final Project modules. Scored 97% in the final assessment.',
      img: freecodecamp,
      link:'https://www.freecodecamp.org/certification/gan121/responsive-web-design'
      
    },
    {
      name: 'Data Structures and Algorithms using Python',
      //desc: 'KPMG Virtual Experience Program on Forage. Conducted Data Quality Assessment, Data Insights, Data Insights and Presentation.',
      img: nptel,
      link:'https://archive.nptel.ac.in/content/noc/NOC22/SEM2/Ecertificates/106/noc22-cs70/Course/NPTEL22CS70S1418008709014240.jpg'
      
    },
    
    
    // Add more online certificate objects as needed
    
  ];
  
  const education = [
    {
      name: 'National Institute of Technology Karnataka, Surathkal',
      desc: 'B.Tech in Electronics and Communication - July 2020 - Present.',
      
      img: imageSrc1,
    },
    {
      name: 'Siddhartha Pre-University College, Bhatkal',
      desc: 'Complited 12th Equivelent with Karnataka PU Board - July 2018 - June 2019.',
      img: imageSrc2,
    },
    {
      name: 'Janata Vidyalaya Shirali, Bhatkal',
      desc: 'Complited 10th Equivelent with Karnataka Secondary Education Examination Board - July 2016 - June 2017.',
      img: imageSrc2,
    },
    
  ];
  // Function to chunk the data into rows
  const chunkData = (data, size) => {
    const chunkedData = [];
    for (let i = 0; i < data.length; i += size) {
      chunkedData.push(data.slice(i, i + size));
    }
    return chunkedData;
  };

  // Chunk the online certificate data into rows of 4 certificates
  const chunkedCertificateData = chunkData(onlineCertificateData, 4);
  const chunkedEducation = chunkData(education, 4);
  

  return (
    <div
      className={
        theme.state.darkMode ? 'pb-20 bg-fixed bg-gray-100' : 'pb-20 bg-black'
      }
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20" id="services">
        <h2
          className={
            theme.state.darkMode
              ? 'text-5xl font-bold px-4 md:px-0 text-center'
              : 'text-5xl font-bold px-4 md:px-0 text-center text-white'
          }
        >
          Education
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            What I Learned
          </h4>
          <div className="">
          
          {chunkedEducation.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center"
            >
              {row.map((el) => (
                <motion.div
                  key={el.name}
                  initial="hidden"
                  whileInView={'visible'}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className={
                    theme.state.darkMode
                      ? 'md:w-96 p-4 bg-white rounded-lg flex items-center flex-col mt-8'
                      : 'md:w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8'
                  }
                >
                  <img src={el.img} alt="" />
                  <h4 className="text-xl font-bold mt-4">{el.name}</h4>
                  <p className="text-lg mt-2 text-justify">{el.desc}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        
          
        </div>

        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            Online Certificates
          </h4>
          {chunkedCertificateData.map((row, rowIndex) => (
  <div
    key={rowIndex}
    className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center"
  >
    {row.map((el) => (
      <motion.a
        key={el.name}
        initial="hidden"
        whileInView={'visible'}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        href={el.link} // Add the link to the href attribute
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Add rel attribute for security reasons
        className={
          theme.state.darkMode
            ? 'w-64 md:w-95 p-5 bg-white rounded-lg flex items-center flex-col mt-8'
            : 'w-64 md:w-95 p-5 bg-gray-100 rounded-lg flex items-center flex-col mt-8'
        }
      >
        <img src={el.img} alt="" />
        <h4 className="text-xl font-bold mt-4 text-center">{el.name}</h4>
        <p className="text-lg mt-2 text-justify">{el.desc}</p>
      </motion.a>
    ))}
  </div>
))}

        </div>
      </div>
    </div>
  );
  
};

export default Services; 