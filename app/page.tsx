import HeroSlider from './components/home/slider/HeroSlider';
import HomeTab from './components/home/tab/HomeTab';
import GetTouch from './components/home/GetTouch';
import About from './components/about/About';
import Service from './components/home/service/Service';
import Counter from './components/Counter';
import Footer from './components/Footer';
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
