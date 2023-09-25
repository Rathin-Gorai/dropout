import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
    
    <div className="min-h-screen bg-white pt-28">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" overflow-hidden ">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
              <div className="mt-4 text-gray-600">
                <h3 className="text-lg font-semibold">Get in Touch</h3>
                <p>
                  At EduFocus, we value your feedback, inquiries, and collaborations. We are here to listen, assist, and engage with you. Please feel free to reach out to us using the contact details below.
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Address:</h3>
                <p>EduFocus Headquarters<br />123 Education Drive<br />Cityville, ST 12345<br />Country</p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">General Inquiries:</h3>
                <p>
                  For general inquiries or information about our services, please contact us via email or phone:<br />
                  Email: <a href="mailto:info@edufocus.org">info@edufocus.org</a><br />
                  Phone: +1 (123) 456-7890
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Support and Assistance:</h3>
                <p>
                  If you require technical support, have questions about our data submission process, or need assistance with any aspect of our platform, our support team is ready to help:<br />
                  Email: <a href="mailto:support@edufocus.org">support@edufocus.org</a><br />
                  Phone: +1 (123) 456-7891
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Collaborations and Partnerships:</h3>
                <p>
                  EduFocus welcomes collaborations and partnerships with educational institutions, government bodies, NGOs, and individuals who share our mission. To explore partnership opportunities or discuss collaborations, please contact us at:<br />
                  Email: <a href="mailto:partnerships@edufocus.org">partnerships@edufocus.org</a><br />
                  Phone: +1 (123) 456-7892
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Media and Press Inquiries:</h3>
                <p>
                  Members of the media and press who wish to learn more about our initiatives, request interviews, or access media resources can reach out to our media relations team:<br />
                  Email: <a href="mailto:media@edufocus.org">media@edufocus.org</a><br />
                  Phone: +1 (123) 456-7893
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Connect With Us Online:</h3>
                <p>
                  Stay updated with EduFocus through our social media channels:<br />
                  Twitter: <a href="https://twitter.com/EduFocusOrg" target="_blank" rel="noopener noreferrer">@EduFocusOrg</a><br />
                  Facebook: <a href="https://www.facebook.com/EduFocusOrg" target="_blank" rel="noopener noreferrer">/EduFocusOrg</a><br />
                  LinkedIn: <a href="https://www.linkedin.com/company/edufocus" target="_blank" rel="noopener noreferrer">/company/edufocus</a>
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Feedback and Suggestions:</h3>
                <p>
                  Your feedback and suggestions are invaluable to us as we strive to improve and better serve our mission. If you have any feedback or suggestions, please feel free to share them with us:<br />
                  Email: <a href="mailto:feedback@edufocus.org">feedback@edufocus.org</a>
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Office Hours:</h3>
                <p>
                  Our office hours are from Monday to Friday, 9:00 AM to 5:00 PM (local time). We aim to respond to all inquiries within 1-2 business days.
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Visit Us:</h3>
                <p>
                  If you are in the vicinity of our headquarters and would like to meet with our team in person, please don&rsquo;t hesitate to schedule an appointment. We look forward to welcoming you.
                </p>
              </div>

              <div className="mt-6 text-gray-600">
                <h3 className="text-lg font-semibold">Stay Connected:</h3>
                <p>
                  Join our community and stay informed about the latest developments, research, and success stories in the field of education by subscribing to our newsletter. By subscribing, you&rsquo;ll receive regular updates on our initiatives, policy recommendations, and the impact we&rsquo;re making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactForm/>
    </>
  );
};

export default Contact;
