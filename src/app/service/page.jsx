// src/components/Service.js
import React from 'react';

const Service = () => {
  return (
    <div className=" bg-gray-100">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>
              <div className="mt-4 text-gray-600">
                <h3 className="text-lg font-semibold">Data Analysis and Visualization</h3>
                <p>
                  At EduFocus, our data analysis services are characterized by depth and precision. We believe that understanding dropout rates requires a comprehensive examination. Our data analysts meticulously dissect the data, categorizing it by school, geographical area, gender, caste, and age/standard. This detailed approach allows us to uncover patterns, trends, and the underlying factors contributing to dropout rates.
                </p>
                <p>
                  Our team of experienced data scientists employs advanced algorithms to extract meaningful insights from the data. We go beyond surface-level analysis to identify the root causes of dropout rates. This in-depth understanding serves as the cornerstone of our efforts to drive change in the education sector.
                </p>
                <p>
                  To make complex data accessible, we create interactive visualizations. Our visual representations transform raw data into compelling charts and graphs. These visuals empower policymakers, educators, and communities to grasp the nuances of the dropout crisis. Informed decision-making begins with clear, concise data visualization.
                </p>
              </div>
              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Policy Recommendations</h3>
                <p>
                  At EduFocus, our mission is to inform and shape policies that address the fundamental issues behind dropout rates. We understand that effective policy formulation requires a solid foundation of data-driven insights. Our recommendations are meticulously crafted based on the extensive data we gather. We collaborate closely with government authorities to provide actionable policy guidance.
                </p>
                <p>
                  By aligning policies with real-world data, we ensure that interventions are not only well-informed but also highly efficient. Our aim is to create policies that directly target the factors leading to high dropout rates, maximizing the impact of education reform efforts.
                </p>
              </div>
              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Support and Training</h3>
                <p>
                  Empowering individuals and communities with the knowledge and tools to create change is at the core of our mission. EduFocus offers comprehensive support and training programs designed to enhance the capacity of schools and communities.
                </p>
                <p>
                  Our training programs are tailored to equip educators, community leaders, and volunteers with the skills and insights needed to effectively utilize our data. We provide guidance on data interpretation, best practices, and evidence-based strategies for implementing interventions. By fostering a data-driven culture at the grassroots level, we lay a strong foundation for lasting change.
                </p>
              </div>
              {/* Add more content if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
