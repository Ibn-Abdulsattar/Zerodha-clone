import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Hero from './Hero';
import InvestOption from './InvestOption';
import DematAcount from './DematAcount';
import BenefitDemat from './BenefitDemat';
import ExplorAcounts from './ExplorAcounts';
import FAQs from './FAQs';


export default function SignupPage (){
    return (
        <>
        <Hero/>
        <InvestOption/>
        <DematAcount/>
        <BenefitDemat/>
        <ExplorAcounts/>
        <FAQs/>
        <OpenAccount/>
        </>
    )
};