import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header";
import CommodoreLines from "@/components/comodoreLines";
import { ArrowCard } from "@/components/arrowcard";
import { sectionTopic } from "./enumerations/enums";
import Section from "@/components/section";
import Article from "@/components/article";
import Hero from "@/components/hero";

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
      <div>
        <Hero useBorder={true} color={"commodore4"}>
          <p>
            With over 20 years of experience in the IT industry, I specialize in
            .NET and cloud development, leveraging AWS and Azure to deliver
            scalable and robust solutions.
          </p>
          <p>
            Throughout my career, I have worn multiple hats, from hands-on
            development to leading teams as a Technical Lead and Section
            Manager.
          </p>
          <p>
            My deep technical expertise, coupled with my leadership experience,
            enables me to deliver high-quality solutions while ensuring that
            teams operate efficiently and effectively.
          </p>
        </Hero>
        <Section id="about" headerText="About" topic={sectionTopic.About}>
          <Article>
            <div className={styles.flex}> 
            {/*  */}
              <Image
                src="/atari-color.svg"
                alt="Decades"
                width={100}
                height={150}
                priority
              />
              <div>
              <p>
                Over the past two decades, I have worked on a wide range of
                projects, from smaller startups to large enterprises. Some of my
                career highlights include:
              </p>
              <p className={styles.highlighted}>
                As a .NET Developer: I have developed numerous web applications
                and enterprise software solutions using the .NET framework. My
                expertise includes C#, ASP.NET, MVC, and Web API, among other
                technologies.
              </p>
              <p>                
                As Technical Lead and Dev lead: I Spearheaded the development of cloud-based application on AWS and azure, delivering a high-performance
                solution that scaled. 
                </p>
                <p>                
                Section Manager: Manegerial position with responssibilities of 15+ staff, 
                handling staff development, reviews and rewards.
              </p>
              </div>
            </div>
          </Article>
        </Section>
        <Section
          id="services"
          headerText="Services"
          topic={sectionTopic.Services}
        >
          <Article>
            <h3>Development</h3>
            <p>
              I offer comprehensive .NET development services, from building
              complex web applications to designing enterprise-level software
              solutions. With a deep understanding of the .NET framework, I
              ensure that your projects are not only built to the highest
              standards but are also scalable, maintainable, and secure.
            </p>
          </Article>
          <Article>
          <h3>Cloud Development (AWS & Azure)</h3>
          <p>
            As an experienced practitioner of cloud technologies, I provide
            development services on both AWS and Azure platforms. Whether you
            need to migrate existing applications to the cloud, design new
            cloud-native solutions, or optimize your cloud infrastructure, I
            have the expertise to deliver results that maximize performance and
            minimize costs.
          </p>
          </Article>
          <Article>
          <h3>Technical Leadership & Team Management</h3>
          <p>
            With extensive experience as a Technical Lead and Section Manager, I
            can guide your development teams to success. I bring a strong focus
            on best practices, efficient workflows, and a collaborative
            approach, ensuring that projects are delivered on time and to
            specification. I also offer consulting services to help optimize
            your team&apos;s performance, whether through mentoring, process
            improvement, or technical strategy development.
          </p>
          </Article>          
        </Section>
        {/* <Section
          id="cloud"
          headerText="Cloud development"
          topic={sectionTopic.Cloud}
        >
          <p></p>
        </Section> */}
        <Section id="games" headerText="Games" topic={sectionTopic.Game} useBorder={true} >                
          <p className={styles.highlighted}>
            In addition to my extensive experience in IT and cloud development,
            I am expanding my expertise into the exciting world of game
            development. I am actively building skills in Unity and Godot 4, two
            of the most powerful and versatile game engines in the industry. My
            goal is to create immersive and engaging games that combine
            technical excellence with creative storytelling.
          </p>          
          <Article>
          <h3>Unity Development</h3>

          <p>
            Unity has become a go-to platform for game developers, offering a
            rich ecosystem for creating 2D, 3D, AR, and VR games. I am
            leveraging my background in software development to dive deep into
            Unity, focusing on:
          </p>
          <p>
            Gameplay Mechanics: Designing and implementing core gameplay systems
            that provide players with a seamless and enjoyable experience.
            Physics and Animation: Creating realistic physics simulations and
            smooth animations to bring game worlds to life. Scripting: Utilizing
            C# to write efficient and scalable code that drives game logic, AI,
            and interactions.
          </p>
          </Article>
          <Article>
          <h3>Godot 4 Development</h3>
          <p>
            Godot 4 is a rapidly growing open-source game engine known for its
            flexibility and powerful scripting language, GDScript. I am
            exploring Godot 4 to harness its potential in:
          </p>
          <p>
            2D Game Development: Building visually stunning and
            performance-optimized 2D games that offer unique and engaging
            experiences. Custom Tools and Plugins: Developing custom tools
            within Godot to streamline the game development process and enhance
            productivity. Cross-Platform Deployment: Ensuring that games built
            in Godot 4 are optimized for deployment across various platforms,
            including desktop, mobile, and web.
          </p>
          </Article>
          <Article>
          <h3>Why Game Development?</h3>
          <p>
            My interest in game development stems from a desire to blend my
            technical skills with creativity. I am passionate about the process
            of transforming ideas into interactive experiences that can
            captivate and entertain players. As I continue to build my expertise
            in Unity and Godot 4, I aim to contribute to innovative game
            projects that push the boundaries of what games can achieve. Looking
            Forward
          </p>
          <p>
            While I am in the early stages of this journey, I am dedicated to
            mastering the craft of game development. My background in leading
            complex software projects and my technical acumen in .NET and cloud
            technologies provide a strong foundation as I transition into this
            new and exciting field. I look forward to collaborating with other
            developers, artists, and storytellers to create games that leave a
            lasting impact.
          </p>
          </Article>          
          <p>
            If you&apos;re interested in collaborating on a game project or
            discussing ideas, feel free to reach out. Let&apos;s create
            something extraordinary together!
          </p>
        </Section>
      </div>
    </main>
  );
}
