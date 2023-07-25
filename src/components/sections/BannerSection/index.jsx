import BannerPic from "../../../assets/BannerPic.png";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className={`${styles.bannerSection} section-padding`}>
      <div className="container">
        <div className={styles.flexBox}>
          <div>
            <h1 className="title balck lg">
              Descubra o melhor{" "}
              <span className="red">aplicativo de comida</span>
            </h1>
            <p className="paragraph black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies,
              non imperdiet erat elementum.
            </p>
            <a href="#" className="btn red">
              Saiba mais
            </a>
          </div>
          <img src={BannerPic} alt="Banner com três imagens de comida" />
        </div>
      </div>
    </section>
  );
};
