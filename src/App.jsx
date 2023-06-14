import React from 'react'
import styles from './style'

const App = () => (
  <div className='bg-blue-gradient w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    <div className={`bg-blue-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>

    <div className={`bg-blue-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats
        Business
        Billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>

  </div>
);


export default App