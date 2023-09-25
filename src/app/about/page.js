
const About = () => {
  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" overflow-hidden  ">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900">About Us</h2>
              <div className="mt-4 text-gray-600">
                <h3 className="text-lg font-semibold">Our Founding Belief</h3>
                <p>
                  At EduFocus, we are driven by a singular mission: to transform education through data-driven insights. Our journey began with a simple yet profound realization – that every child has the right to quality education. However, this right is often hindered by the persistent issue of school dropout rates, primarily driven by factors like poverty and social-economic disparities.
                </p>
                <p>
                  We firmly believe that to address this complex problem, we must first understand it at its core. This belief led to the inception of EduFocus, where we harness the power of data to drive meaningful change in the education sector.
                </p>
              </div>
              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Our Dedicated Team</h3>
                <p>
                  EduFocus is more than just a name; it&rsquo;s a dedicated team of educators, data scientists, policy experts, and passionate individuals united by a common purpose - to make education accessible to all. Our diverse backgrounds and expertise converge to create a unique synergy that fuels our mission.
                </p>
                <p>
                  Our educators understand the challenges faced in the classroom, while our data scientists possess the analytical prowess to extract insights from raw data. Our policy experts bridge the gap between data and action, ensuring that our insights translate into effective policies.
                </p>
              </div>
              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Our Approach</h3>
                <p>
                  Our approach to transforming education is built on three fundamental pillars:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Data Collection and Analysis:</strong> We believe that data is the key to unlocking change. We work tirelessly to collect comprehensive data on dropout rates from schools across diverse communities. But we don&rsquo;t stop at data collection; our team of data scientists conducts rigorous analysis, delving deep into the data to uncover trends, patterns, and disparities.
                  </li>
                  <li>
                    <strong>Policy Recommendations:</strong> Data alone is not enough. It must inform action. That&rsquo;s where our policy experts come in. We collaborate closely with government authorities and educational institutions to translate data-driven insights into impactful policies. These policies are designed to target the root causes of dropout rates, ensuring that interventions are efficient and effective.
                  </li>
                  <li>
                    <strong>Support and Training:</strong> But transformation doesn&rsquo;t happen in isolation; it happens within schools and communities. That&rsquo;s why we are committed to providing support and training to schools and local stakeholders. We believe in empowering communities with the knowledge and tools needed to drive change from within.
                  </li>
                </ul>
              </div>
              {/* Add more content if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

