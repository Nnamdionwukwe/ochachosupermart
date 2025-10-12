import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = ({ image, title, benefits }) => {
  return (
    <section className={styles.whychooseussection}>
      <div className={styles.whychooseuscontainer}>
        <h3 className={styles.whychooseustitle}>{title}</h3>

        <h6 className={styles.whychooseustitle1}>
          Discover why we are your ultimate fresh food and grocery destination
        </h6>

        <div className={styles.whychooseusimagewrapper}>
          <img
            src={image}
            alt="Why Choose Us"
            className={styles.whychooseusimage}
          />
        </div>

        <div className={styles.whychooseuscontent}>
          <ul className={styles.whychooseusbenefits}>
            {benefits.map((benefit, index) => (
              <>
                <li key={index} className={styles.benefititem}>
                  {/* <span className={styles.benefiticon}>✅</span> */}
                  <p>{benefit}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
