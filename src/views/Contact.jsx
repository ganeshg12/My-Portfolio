import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import imageSrc from "../assets/contact.png";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
        Contact
        </h2>
  <div>
    <h4 className="mt-12 text-3xl font-semibold text-blue-500">
      Connect with me
    </h4>
    <p className="text-gray-500 text-xl">
      If you want to know more about me or my work, or if you would just
      <br />
      like to say hello, send me a message. I'd love to hear from you.
    </p>
  </div>
  <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
    <div className="w-full md:pr-8" style={{ marginBottom: "-24px" }}>
      <br/>
      <img src={imageSrc} alt="My Image" />
    </div>
    <div className="w-full flex flex-col md:items-end mt-8 md:mt-4">

  
      <h1 className="text-3xl font-bold">Email</h1>
      
      <h4 className="mb-12 md:text-right font-semibold text-blue-700">ganeshgond721@gmail.com</h4>
      <br></br>
      
      <h1 className="text-3xl  font-bold">Address</h1>
      <a
        href="https://www.google.com/maps/place/Mangaluru,+Karnataka/@12.8436731,74.904592,12z/data=!4m6!3m5!1s0x3ba35a4c37bf488f:0x827bbc7a74fcfe64!8m2!3d12.9141417!4d74.8559568!16zL20vMDFzdjZr?entry=ttu" 
        className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
        target="_blank">
      
        Mangaluru, Karnataka
        <br />
        India
      </a>
      <h1 className="text-3xl  font-bold">Social</h1>
      <ul className="flex">
        {contactLinks.map((el) => (
          <a
            href={el.link}
            target="_blank"
            className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
          >
            <img alt="" src={el.url} />
            {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
          </a>
        ))}
      </ul>
    </div>
  </div>
  {/*j*/}
  {/*j*/}
</div>

<div
  className={
    darkMode
      ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
      : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
  }
  style={{ marginTop: "-24px" }}
>
  Made with ❤️ by Ganesh Gond
</div>
  {/* <div className="text-red-500 px-2 text-2xl">&#10084;</div> */}


    </div>
  );
};

export default Contact;

