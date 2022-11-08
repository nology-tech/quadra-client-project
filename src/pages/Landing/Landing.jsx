import './Landing.scss';
import coverterScreenshot from "../../assets/images/converter-screenshot.png";
import bankLogos from "../../assets/images/bank-logos.png";
import convertAmountScreenshot from "../../assets/images/convert-amount-screenshot.png";
import ratesScreenshot from "../../assets/images/rates-screenshot.png"
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo.jsx";
import LandingNav from '../../components/LandingNav/LandingNav';
import Feature from "../../components/Feature/Feature.jsx";
import {Link} from "react-router-dom";

const Landing = () => {
    return(
        <>
        <header className='landing-header'>
            <Logo isTextDark={true} />
            <LandingNav isFooter={false}/>
            <div>
            <Link className='landing-header__sign-in' to={'/login'}>Sign In</Link>
            <Link to={`/signup`}>
                <Button classNaming="largeButton" buttonText={"Sign Up"}/>
            </Link>
            
            </div>
        </header>
        <section className='top-section'>
            <h1 className='top-section__title'>Lorem ipsum dolor sit amet, consectetur <span className='top-section__highlight'>adipiscing elit.</span></h1>
            <p className='top-section__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quas ad explicabo.</p>
            <img className='top-section__screenshot' src={coverterScreenshot} alt='Converter Screenshot' />
        </section>
        <section className='bank-section'>
            <h2 className='bank-section__title'>Trusted by over 3,000 banks worldwide</h2>
            <img className='bank-section__logos' src={bankLogos} alt="bank logo" />
        </section>
        <section className='award-section'>
            <h2  className='award-section__title'>Our Award-Winning Features</h2>
            <div className='award-section__features-container'>
                <Feature title={"Lorem ipsum dolor sit amet."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis."} />
                <Feature title={"Lorem ipsum dolor sit amet."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis."} />
                <Feature title={"Lorem ipsum dolor sit amet."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis."} />
                <Feature title={"Lorem ipsum dolor sit amet."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis."} />
            </div>
            <Button classNaming="invertedButton" buttonText={"Find out More"}/>
        </section>
        <section className='conversion-section'>
            <h2 className='conversion-section__title'>Make A Conversion</h2>
            <p className='conversion-section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id fringilla augue feugiat. Volutpat tortor ornare lectus praesent amet.</p>
            <img className='conversion-section__screenshot' src={convertAmountScreenshot} alt="Convert amount screenshot"/>
        </section>
        <section className='rates-section'>
            <h2 className='rates-section__title'>View latest rates</h2>
            <p className='rates-section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id fringilla augue feugiat. Volutpat tortor ornare lectus praesent amet.</p>
            <img className='rates-section__screenshot' src={ratesScreenshot} alt="Rates screenshot"/>
        
        </section>
        <footer className='landing-footer'>
            <Logo isTextDark={false} />
            <LandingNav isFooter={true}/>
            <Link to={`/signup`}>
                <Button classNaming="largeButton" buttonText={"Sign Up"}/>
            </Link>
        </footer>
        </>
    )
} 
export default Landing;