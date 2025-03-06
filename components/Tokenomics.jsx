import Image from "next/image";
import React from "react";

const Tokenomics = ({ styles }) => {
  return (
    <>
      <section className={styles.tokenomicsSection} id="token">
        <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
        <div className={styles.tokenomicsDetailsHolder}>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Token Name</h4>
            <p className={styles.tokenDetailText}>STARFROG</p>
            <h4 className={styles.tokenDetailHead}>Total Supply</h4>
            <p className={styles.tokenDetailText}>1,000,000,000,000,000</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale Start Date</h4>
            <p className={styles.tokenDetailText}>1st Mar 2025</p>
            <h4 className={styles.tokenDetailHead}>Currencies Accepted</h4>
            <p className={styles.tokenDetailText}>SOL</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>
              ICO Pre- Sale STARFROG Supply Launch
            </h4>
            <p className={styles.tokenDetailText}>200,000,000</p>
            <h4 className={styles.tokenDetailHead}>
              ICO Supply OF STARFROG launch
            </h4>
            <p className={styles.tokenDetailText}>200,000,000</p>
            <h4 className={styles.tokenDetailHead}>Soft cap</h4>
            <p className={styles.tokenDetailText}>4000 SOL</p>
            <h4 className={styles.tokenDetailHead}>ICO Start Date</h4>
            <p className={styles.tokenDetailText}>1st of Jun 2025</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 1st Phase</h4>
            <p className={styles.tokenDetailText}>1 SOL = 2,600,000 STF</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 2nd Phase</h4>
            <p className={styles.tokenDetailText}>1 SOL = 1,300,000 STF</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 3rd Phase</h4>
            <p className={styles.tokenDetailText}>1 SOL = 650,000 STF</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale- 4th phase</h4>
            <p className={styles.tokenDetailText}> 1 SOL = 325,000 STF</p>
          </div>
        </div>
        <p>
          <small>
            <i>*All above Data is only for Sample</i>
          </small>
        </p>
      </section>

      <section className={styles.chartSection}>
        <div>
          <h3>Tokenomics</h3>
          <Image
            width={50}
            height={300}
            src="/tokenomics-chart.png"
            alt="chart"
          />
        </div>
        <div>
          <h3>Fund Allocation</h3>
          <Image
            width={50}
            height={300}
            src="/allocation-chart.png"
            alt="chart"
          />
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
