// import Head from 'next/head'
import EventList from '../components/eventList/index.jsx'
import Events from '../components/events/index'
import Footer from '../components/Footer/index'
import Landing from '../components/landing/index'
import Navbar from '../components/navbar/index'
import Sponsers from '../components/sponsers/index'
// import "../styles/Home.module.css"
// import styles from '../styles/Home.module.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
export default function App() {
  return (
    <HelmetProvider>

      <div className='bg-[#1B1B1B] w-[100%] h-[100vh]'>
        <Helmet>
          <title>TechWeek&apos;23</title>
          <meta name="description" content="IEEE-DTU Techweek" />
          <link rel="icon" href="/favicon_io/favicon.ico" />
        </Helmet>
        <Navbar />
        <Landing />
        <Events />
        <EventList />
        <Sponsers />
        <Footer />
      </div>
    </HelmetProvider>
  )
}
