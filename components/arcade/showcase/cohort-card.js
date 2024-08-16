import React from 'react'
import { Box, Card, Heading, Text } from 'theme-ui'
import styles from './cohort-card.module.css'


const CohortCard = ({ id, title, desc, slack, scrapbook, playable, images, githubProf, draggable = false}) => {

  console.log(images)
  return (
    <>
    <a href="https://www.google.com" className={styles.linkWrapper} target="_blank" rel="noopener noreferrer">
      <div className={styles.card}>
          <img src={images ? (images[0].url) : ("https://img.buzzfeed.com/buzzfeed-static/static/2020-05/21/17/asset/19f3032de0de/sub-buzz-1010-1590082675-7.png")} alt="Project Image" className={styles.card_img}/>
          <h1 className={styles.card_title}>{title}</h1>
          <p className={styles.card_description}>{desc}</p>
        
      </div>
    </a>
    </>
    
    
  )
}

export default CohortCard