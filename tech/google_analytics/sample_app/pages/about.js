import React, { useState } from 'react'
import Head from 'next/head'

const About = () => {
  const [signedUp, setSignedup] = useState(false)
  const showThanks = () => {
    setSignedup(true)
    gtag('event', 'sign_up', { event_category: 'engagement' })
  }
  return (
  <>
    <Head>
      <title>About us</title>
    </Head>
    {signedUp &&
     <h2>Thanks for signing up!</h2>}
    {!signedUp &&
    <button onClick={showThanks}>Sign up</button>
    }
  </>
  )
}

export default About
