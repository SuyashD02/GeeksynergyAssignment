import React from "react";
import Classes from "./About.module.css";
import Navbar from "../../Components/NavBar";

function About() {
  return (
    <div className={Classes.mainAbout}>
        <Navbar/>
        <div className={Classes.aboutContainer}>
      <h1 className={Classes.title}>About Us</h1>
      <p className={Classes.description}>
        Welcome to our movie website!, we are dedicated to bringing you the latest and greatest in the world of movies. Whether you're a fan of blockbusters, indie films, or classic cinema, we have something for everyone.
      </p>
      <p className={Classes.description}>
        Our mission is to provide comprehensive movie reviews, news, and insights. We strive to be your go-to source for all things movies, helping you stay informed and entertained.
      </p>
      <p className={Classes.description}>
        Our team of passionate movie enthusiasts works tirelessly to deliver up-to-date content and honest reviews, ensuring that you have all the information you need to make your movie-watching experience exceptional.
      </p>
      <p className={Classes.description}>
        This website was created as an assignment for Geeksynergy Technologies Pvt Ltd.
      </p>
      <h2 className={Classes.subtitle}>Contact Us</h2>
      <p className={Classes.text}>
        We value your feedback and suggestions. If you have any questions, comments, or just want to share your thoughts, feel free to reach out to Me.
      </p>
      <p className={Classes.text}>
        Connect with us on <a href="https://linkedin.com/in/suyash-dattawade" target="_blank" rel="noopener noreferrer" className="text-[#808080]">Suyash Dattawade</a> or contact us through the following details:
      </p>
      <ul className={Classes.contactList}>
        <li><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</li>
        <li><strong>Address:</strong> Sanjayanagar, Bengaluru-56</li>
        <li><strong>Phone:</strong> XXXXXXXXX09</li>
        <li><strong>Email:</strong> XXXXXX@gmail.com</li>
      </ul>
    </div>
    </div>
  );
}

export default About;
