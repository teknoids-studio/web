import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header";
import CommodoreLines from "@/components/comodoreLines";
import { ArrowCard } from "@/components/arrowcard";
import { sectionTopic } from "./enumerations/enums";
import Section from "@/components/section";
import Article from "@/components/article";
import Hero from "@/components/hero";
import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CommodoreLines />
      {/* <div className={styles.services}>
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
      </div> */}
      <div>
        <Hero useBorder={true} color={"commodore4"}>
          <p>
            With over 20 years in the IT industry, I specialize in .NET and cloud development, leveraging AWS and Azure to deliver scalable and robust solutions.
          </p>
          <p>
            Throughout my career, I have taken on various roles, from hands-on development to leadership positions such as Technical Lead and Section Manager, demonstrating my versatility and commitment to excellence.
          </p>
          <p>
            My deep technical expertise, combined with my leadership experience, enables me to deliver high-quality solutions while ensuring that teams operate efficiently and effectively, driving success and innovation.
          </p>
        </Hero>

        <Terminal>

        </Terminal>
        <div className={styles.services}>
          <div className={styles.flexGrid}>
            <div className={styles.column}>
              <ArrowCard headerText="Development" href="">
                <p>
                  I offer development services (using .NET): building robust, scalable, maintainable and secure software solutions, using known practises such as micro-services and event driven architectures.
                </p>
              </ArrowCard>
            </div>
            <div className={styles.column}>
              <ArrowCard headerText="Cloud Development" href="">
                <p>I provide development services on both AWS and Azure platforms. Whether you need to migrate existing applications to the cloud, design new cloud-native solutions, I have the expertise to deliver results that maximize performance and minimize costs.</p>
              </ArrowCard>
            </div>
            <div className={styles.column}>
              <ArrowCard headerText="Tech Leadership & Team Management" href="">
                <p>
                  As a Technical Lead, I can guide development teams to success. I bring a strong focus on best practices, efficient workflows, and a collaborative approach. I also strive to optimize the team&apos;s performance, whether through mentoring, process improvement, or technical strategy development.
                </p>
              </ArrowCard>
            </div>
            <div className={styles.column}>
              <ArrowCard headerText="Games" href="" style={sectionTopic.Game}>
                <p>
                  In addition to my extensive experience in IT and cloud
                  development, I am expanding my expertise into the exciting world
                  of game development.
                </p>
              </ArrowCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
