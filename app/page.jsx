import Image from "next/image";
import logo from "@/public/logo.png";
import image from "@/public/image.png";
import arrow from "@/app/ui/assets/arrow.svg";
import github from "@/app/ui/assets/github.png";
import instagram from "@/app/ui/assets/instagram.png";
import twitter from "@/app/ui/assets/twitter.png";
import profile from "@/app/ui/assets/profile.jpg";
import styles from "@/app/ui/page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.navIsland}>
        <div className={styles.island}>
          <Image src={logo} alt="Logo" priority />
          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>
      <main>
        <section id="home" className={styles.header}>
          <Image className={styles.image} src={image} alt="img" priority />
          <div className={styles.about}>
            <p className={styles.name}>King Vista</p>
            <p className={styles.description}>
              Born and raised in the Philipines, I am a Fullstack Developer,
              based on my room.
            </p>
          </div>
          <Image className={styles.arrow} src={arrow} alt="arrowdown" />
        </section>
        <section id="about" className={styles.aboutMe}>
          <h2 className={styles.aboutMeHeading}>About</h2>
          <div className={styles.line}></div>

          <div className={styles.aboutContainer}>
            <div className={styles.profileContainer}>
              <Image className={styles.profile} src={profile} alt="profile" />
            </div>
            <div className={styles.aboutKing}>
              <h2 className={styles.myName}>Hi! I’m King Vista, a full-stack developer.</h2>
              <p className={styles.king}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                quam neque, imperdiet non laoreet tempus, egestas at odio.
                Mauris sodales nisl et mauris iaculis porttitor. Nulla pulvinar,
                nisl vel dapibus facilisis, nibh turpis semper urna, ut dictum
                turpis sapien facilisis leo. Duis tincidunt neque lobortis velit
                faucibus maximus. Nunc accumsan vulputate arcu sed tempor.
                Aliquam non hendrerit magna. Mauris ex arcu, cursus vel tempus
                at, iaculis sed tellus. Nunc a gravida sem. Vivamus venenatis
                erat eget urna varius, vel hendrerit dolor porta.
              </p>
            </div>
          </div>
        </section>
      </main>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarContainer}>
          <a href="https://www.instagram.com/kiinggg_v/" target="blank">
            <Image
              className={styles.instagram}
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="https://github.com/uuell" target="blank">
            <Image className={styles.github} src={github} alt="github" />
          </a>
          <a href="https://twitter.com" target="blank">
            <Image className={styles.twitter} src={twitter} alt="twitter" />
          </a>
        </div>
      </nav>
    </>
  );
}
