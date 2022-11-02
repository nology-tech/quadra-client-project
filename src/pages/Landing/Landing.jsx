import './Landing.scss';
import coverterScreenshot from "../../assets/images/converter-screenshot.png"


const Landing = () => {
   return(
    <>
    <section className='top-section'>
        <h1 className='top-section__title'>Lorem ipsum dolor sit amet, consectetur <span className='top-section__highlight'>adipiscing elit.</span></h1>
        <p className='top-section__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quas ad explicabo.</p>
        <img className='top-section__screenshot' src={coverterScreenshot} alt='Converter Screenshot' />
    </section>
    <section className='bank-section'>
        <h2></h2>
    </section>
    </>
   )
} 
export default Landing;