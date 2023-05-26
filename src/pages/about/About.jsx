import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <div>
      <Header
        title="About Us"
        image={HeaderImage}
        children=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea dolorum harum deleniti ut ullam id magni 
      sunt exercitationem suscipit."
      />

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Imag" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
              iure exercitationem corrupti. Accusantium, magnam. Adipisci rerum
              magni similique et autem corporis. Dolorem, eligendi quos
              adipisci, saepe vitae ipsum voluptatibus iusto ea nostrum
              praesentium iure assumenda commodi! Ducimus, non laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
              iure exercitationem corrupti. Accusantium, magnam. Adipisci rerum
              magni similique et autem corporis. Dolorem, eligendi quos
              adipisci, saepe vitae ipsum voluptatibus iusto ea nostrum
              praesentium iure assumenda commodi! Ducimus, non laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
            </p>
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
              iure exercitationem corrupti. Accusantium, magnam. Adipisci rerum
              magni similique et autem corporis. Dolorem, eligendi quos
              adipisci, saepe vitae ipsum voluptatibus iusto ea nostrum
              praesentium iure assumenda commodi! Ducimus, non laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
              iure exercitationem corrupti. Accusantium, magnam. Adipisci rerum
              magni similique et autem corporis. Dolorem, eligendi quos
              adipisci, saepe vitae ipsum voluptatibus iusto ea nostrum
              praesentium iure assumenda commodi! Ducimus, non laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Imag" />
          </div>
        </div>
      </section>
      <section className="about_story">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Imag" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
              iure exercitationem corrupti. Accusantium, magnam. Adipisci rerum
              magni similique et autem corporis. Dolorem, eligendi quos
              adipisci, saepe vitae ipsum voluptatibus iusto ea nostrum
              praesentium iure assumenda commodi! Ducimus, non laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
              iure exercitationem corrupti. Accusantium, magnam. Adipisci rerum
              magni similique et autem corporis. Dolorem, eligendi quos
              adipisci, saepe vitae ipsum voluptatibus iusto ea nostrum
              praesentium iure assumenda commodi! Ducimus, non laudantium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              qui voluptate sint mollitia ab culpa omnis. Et modi sint impedit
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
