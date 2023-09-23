import React from 'react';

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font bg-slate-300">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Mission:
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">We are on a mission to empower governments, schools, and communities with the insights needed to tackle the dropout crisis. Our focus is on analyzing dropout data across various categories to drive meaningful change.Are you concerned about the high school dropout rates due to poverty and social-economic reasons? At EduFocus, we are dedicated to making a difference in education. <br />
                        <br />
                        We believe that informed policymaking is the key to change.
                        Our data analysis services offer a deep dive into dropout rates, categorized by school, area, gender, caste, and age/standard. Our interactive visualizations make complex data easy to understand.
                        <br />
                        <br />
                        We help governments frame policies that target the root causes of dropout rates. Our recommendations are based on data-driven insights, ensuring that interventions are effective and efficient.

                        <br />
                        Data Collection: We collect data from schools, analyzing it across multiple dimensions.
                        Insight Generation: Our data scientists use advanced algorithms to extract meaningful insights.
                        Policymaker Support: We provide policymakers with actionable recommendations based on data.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;
