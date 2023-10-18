"use client"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
const HeroSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <section className='md:px-[60px] px-[1.25rem] md:py-20 py-[1rem] ' data-aos='fade-right'>
            <div>
                <h3 className="text-center text-4xl font-bold mb-8">Our Mission</h3>
                <p className="">
                    <span data-aos='fade-right'>
                        We are on a mission to empower governments, schools, and communities with the insights needed to tackle the dropout crisis. Our focus is on analyzing dropout data across various categories to drive meaningful change.Are you concerned about the high school dropout rates due to poverty and social-economic reasons? At EduFocus, we are dedicated to making a difference in education.
                    </span>
                    <br /><br />
                    <span data-aos='fade-left'>
                        We believe that informed policymaking is the key to change. Our data analysis services offer a deep dive into dropout rates, categorized by school, area, gender, caste, and age/standard. Our interactive visualizations make complex data easy to understand.
                    </span>
                    <br /><br />
                    <span data-aos='fade-right'>
                        We help governments frame policies that target the root causes of dropout rates. Our recommendations are based on data-driven insights, ensuring that interventions are effective and efficient.
                        Data Collection: We collect data from schools, analyzing it across multiple dimensions. Insight Generation: Our data scientists use advanced algorithms to extract meaningful insights. Policymaker Support: We provide policymakers with actionable recommendations based on data.
                    </span>
                </p>
            </div>
        </section>
    )
};

export default HeroSection;
