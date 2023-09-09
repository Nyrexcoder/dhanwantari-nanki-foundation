import HeroSlider from './components/home/slider/HeroSlider';
import HomeTab from './components/home/tab/HomeTab';
import GetTouch from './components/home/GetTouch';
import About from './components/about/About';
import ResinDivision from './components/home/ResinDivision';
import Service from './components/home/service/Service';
import Products from './components/product/products';
import Counter from './components/Counter';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
    <HeroSlider/>
    <HomeTab/>
    <GetTouch/>
    <About/>
    <Service/>
    {/* <Products/> */}
    <Counter/>
    {/* <WhyChooseUs /> */}
    <Footer/>
    </>
  )
}
