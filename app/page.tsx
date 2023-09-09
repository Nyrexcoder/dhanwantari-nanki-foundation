import About from './components/about/About';
import Counter from './components/Counter';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import HomeTab from './components/HomeTab';
import GetTouch from './components/GetTouch';
import Service from './components/Service';
export default function Home() {
  return (
    <>
    <HeroSlider/>
    <HomeTab/>
    <GetTouch/>
    <About/>
    <Service/>
    <Counter/>
    <Footer/>
    </>
  )
}
