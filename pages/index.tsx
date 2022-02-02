// import core components
import { useEffect, useRef } from "react";

// import gsap & his modules
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import logo
import DistrictWebSvg from "../src/components/DistrictWebSvg";

// import styles
import styles from "../styles/Home.module.scss";

// import utils
import handleClassname from "../src/utils/handleClassname";

export default function Home() {
  //
  // création de la Time line d'animation ici par defaut sur pause
  // création de la référence de l'animation
  const boxTimeline = gsap.timeline({ paused: true });
  const animationRef: any = useRef();

  // Enregiste ScrollTrigger
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Termine tout les instance de ScrollTrigger
  if (process.browser) {
    ScrollTrigger.getAll().forEach((t: any) => {
      t.kill();
    });
  }

  useEffect(() => {
    //
    // animation regulière
    //
    // gsap.to(`.${styles["example-box-1"]}`, {
    //   duration: 1,
    //   rotate: 360,
    //   x: 400,
    // });
    //
    // animation Time line
    //
    // boxTimeline
    //   .to(`.${styles["example-box-2-1"]}`, {
    //     duration: 1,
    //     x: 400,
    //   })
    //   .to(`.${styles["example-box-2-2"]}`, {
    //     duration: 1,
    //     opacity: 0,
    //   })
    //   .to(`.${styles["example-box-2-3"]}`, {
    //     duration: 1,
    //     rotate: 360,
    //   });
    //
    // animation Time line avec référence
    //
    // boxTimeline.to(`.${styles["example-box-3"]}`, {
    //   duration: 5,
    //   x: 500,
    //   rotate: 360,
    // });
    //
    // animationRef.current = boxTimeline;
    //
    // animation ScrollTrigger
    //
    boxTimeline.to(`.${styles["example-box-4"]}`, {
      duration: 5,
      x: 500,
      rotate: 360,
    });

    animationRef.current = boxTimeline;

    gsap.to("#ScrollTrigger-box", {
      scrollTrigger: {
        id: "scrolltrigger-animations",
        markers: true,
        trigger: "#ScrollTrigger-box",
        start: "top bottom-=45%",
        end: "bottom top+=45%",
        onEnter: () => {
          animationRef.current.play();
        },
        onLeave: () => {
          animationRef.current.pause();
        },
        onEnterBack: () => {
          animationRef.current.reverse();
        },
        onLeaveBack: () => {
          animationRef.current.pause();
        },
      },
    });
  }, []);

  return (
    <main className={styles.container}>
      <nav className={styles["nav"]}>
        <DistrictWebSvg />

        <h1>Intégration Gsap avec Next.js</h1>
      </nav>

      {/* <section style={{ height: "400px" }}>
        <h2>Animation régulière</h2>

        <div
          className={handleClassname(["example-box", "example-box-1"], styles)}
        ></div>
      </section> */}

      {/* <section style={{ height: "600px" }}>
        <h2>Timeline animation</h2>

        <div
          className={handleClassname(
            ["example-box", "example-box-2-1"],
            styles
          )}
        ></div>
        <div
          className={handleClassname(
            ["example-box", "example-box-2-2"],
            styles
          )}
        ></div>
        <div
          className={handleClassname(
            ["example-box", "example-box-2-3"],
            styles
          )}
        ></div>
      </section> */}

      <section style={{ backgroundColor: "#c2c2c2", height: "85vh" }}>
        <h2>Création d’une animation time line avec une référence</h2>
        <div
          className={handleClassname(["example-box", "example-box-3"], styles)}
        ></div>

        <div className={styles["controls"]}>
          <button
            onClick={() => {
              animationRef.current.play();
            }}
          >
            Play
          </button>

          <button
            onClick={() => {
              animationRef.current.pause();
            }}
          >
            Pause
          </button>

          <button
            onClick={() => {
              animationRef.current.reverse();
            }}
          >
            Reverse
          </button>
        </div>
      </section>

      <section
        id="ScrollTrigger-box"
        style={{ backgroundColor: "#c2c2c2", paddingBottom: "2rem" }}
      >
        <h2>Création d’une animation time line avec ScrollTrigger</h2>
        <div
          className={handleClassname(["example-box", "example-box-4"], styles)}
        ></div>
      </section>

      <section
        style={{
          backgroundColor: "#c2c2c2",
          height: "100vh",
          marginTop: "2rem",
        }}
      ></section>
    </main>
  );
}

//  <section>
//    <h2>ScrollTrigger animation</h2>
//  </section>
