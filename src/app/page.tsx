import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header";
import CommodoreLines from "@/components/comodoreLines";
import { ArrowCard } from "@/components/arrowcard";
import { sectionTopic } from "./enumerations/enums";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CommodoreLines />    
      <div className={styles.services}>
        <div className={styles.grid}>
          <ArrowCard headerText="About" href="#about">
            <p>
              With over 20 years of experience in the IT industry, what are
              Teknoids all about, find out here.
            </p>
          </ArrowCard>
          <ArrowCard headerText="Services" href="#services">
            <p>What do we offer and how are we different</p>
          </ArrowCard>
          <ArrowCard headerText="We have our head in the cloud" href="#cloud">
            <p>
              We have a firm belife that cloud services are the best solution in
              most cases. As an experienced practitioner of cloud technologies,
              I provide development services on both AWS and Azure platforms.
            </p>
          </ArrowCard>
          <ArrowCard headerText="Games" href="#games" style={sectionTopic.Game}>
            <p>
              In addition to my extensive experience in IT and cloud
              development, I am expanding my expertise into the exciting world
              of game development.
            </p>
          </ArrowCard>
        </div>
      </div>
      <Section
        id="about"
        headerText="About"
        style={sectionTopic.About}
      >
        <p>
        With over 20 years of experience in the IT industry, I specialize in .NET and cloud development, leveraging AWS and Azure to deliver scalable and robust solutions. Throughout my career, I have worn multiple hats, from hands-on development to leading teams as a Technical Lead and Section Manager. My deep technical expertise, coupled with my leadership experience, enables me to deliver high-quality solutions while ensuring that teams operate efficiently and effectively.
Services Offered
.NET Development

I offer comprehensive .NET development services, from building complex web applications to designing enterprise-level software solutions. With a deep understanding of the .NET framework, I ensure that your projects are not only built to the highest standards but are also scalable, maintainable, and secure.          
        </p>

      </Section>
      <Section
        id="services"
        headerText="Services"
        style={sectionTopic.Services}
      >
        <p>
        I offer comprehensive .NET development services, from building complex web applications to designing enterprise-level software solutions. With a deep understanding of the .NET framework, I ensure that your projects are not only built to the highest standards but are also scalable, maintainable, and secure.
Cloud Development (AWS & Azure)
        </p>
        <p>
As an experienced practitioner of cloud technologies, I provide development services on both AWS and Azure platforms. Whether you need to migrate existing applications to the cloud, design new cloud-native solutions, or optimize your cloud infrastructure, I have the expertise to deliver results that maximize performance and minimize costs.
</p>
<h3>Technical Leadership & Team Management</h3>
<p>
With extensive experience as a Technical Lead and Section Manager, I can guide your development teams to success. I bring a strong focus on best practices, efficient workflows, and a collaborative approach, ensuring that projects are delivered on time and to specification. I also offer consulting services to help optimize your team's performance, whether through mentoring, process improvement, or technical strategy development.
Experience
</p>
<p>
Over the past two decades, I have worked on a wide range of projects, from small startups to large enterprises. Some of my career highlights include:
</p>
<p>
    Technical Lead: Spearheaded the development of a large-scale cloud-based application on AWS, delivering a high-performance solution that scaled to millions of users.
    Team Lead: Managed a cross-functional team of developers, QA engineers, and DevOps professionals, ensuring seamless project delivery from conception to deployment.
    Section Manager: Oversaw multiple development teams, handled resource planning, staff development, and project prioritization, resulting in improved team productivity and project success rates.

        </p>

      </Section>
      <Section
        id="cloud"
        headerText="Cloud development"
        style={sectionTopic.Cloud}
      >
        <p>
        </p>

      </Section>
      <Section
        id="games"
        headerText="Games"
        style={sectionTopic.Game}
      >
        <p>
        In addition to my extensive experience in IT and cloud development, I am expanding my expertise into the exciting world of game development. I am actively building skills in Unity and Godot 4, two of the most powerful and versatile game engines in the industry. My goal is to create immersive and engaging games that combine technical excellence with creative storytelling.
      </p>
<h3>
Unity Development
</h3>
     
        <p>
Unity has become a go-to platform for game developers, offering a rich ecosystem for creating 2D, 3D, AR, and VR games. I am leveraging my background in software development to dive deep into Unity, focusing on:
</p>
        <p>
    Gameplay Mechanics: Designing and implementing core gameplay systems that provide players with a seamless and enjoyable experience.
    Physics and Animation: Creating realistic physics simulations and smooth animations to bring game worlds to life.
    Scripting: Utilizing C# to write efficient and scalable code that drives game logic, AI, and interactions.
    </p>
    <h3>
Godot 4 Development
</h3>
        <p>
Godot 4 is a rapidly growing open-source game engine known for its flexibility and powerful scripting language, GDScript. I am exploring Godot 4 to harness its potential in:
</p>
        <p>
    2D Game Development: Building visually stunning and performance-optimized 2D games that offer unique and engaging experiences.
    Custom Tools and Plugins: Developing custom tools within Godot to streamline the game development process and enhance productivity.
    Cross-Platform Deployment: Ensuring that games built in Godot 4 are optimized for deployment across various platforms, including desktop, mobile, and web.
    </p>
    <h3>
Why Game Development?
</h3>
        <p>
My interest in game development stems from a desire to blend my technical skills with creativity. I am passionate about the process of transforming ideas into interactive experiences that can captivate and entertain players. As I continue to build my expertise in Unity and Godot 4, I aim to contribute to innovative game projects that push the boundaries of what games can achieve.
Looking Forward
</p>
        <p>
While I am in the early stages of this journey, I am dedicated to mastering the craft of game development. My background in leading complex software projects and my technical acumen in .NET and cloud technologies provide a strong foundation as I transition into this new and exciting field. I look forward to collaborating with other developers, artists, and storytellers to create games that leave a lasting impact.
</p>
        <p>
If you're interested in collaborating on a game project or discussing ideas, feel free to reach out. Let's create something extraordinary together!
</p>
        <p>
This section communicates your enthusiasm for game development and how your existing technical background supports this new endeavor.
        </p>

      </Section>
    </main>
  );
}
