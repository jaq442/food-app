import Icon from "../../../assets/AboutMeSectionIcon.svg";

import styles from "./styles.module.css";


export const AboutSection = () => {
  return (
     <section className={`${styles.aboutSection} section-padding`}>
        <div className="container">
           <div className={styles.flexBox}>
              <div>
                 <img src={Icon} alt="Ícone Mobile" />
                 <h2 className="title lg black">
                    Sobre o <span className="red">aplicativo</span>
                 </h2>
              </div>
              <p className="paragraph black">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
                 tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet
                 erat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies,
                 non imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem
                 eu quam ultricies, non imperdiet erat elementum. Lorem ipsum dolor sit
                 amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper.
                 Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.
              </p>
           </div>
        </div>
     </section>
  );
};