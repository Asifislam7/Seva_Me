import { useState } from "react";
import { Button } from "./ui/button";

export default function IntroductionSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="max-w-7xl mx-auto p-6 space-y-8 bg-white rounded-lg shadow-lg md:block hidden">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-justify">
          Doc Pat is your trusted partner for scheduling and managing your
          medical appointments.
        </h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          We are one of the oldest players who focused on bringing quality
          diagnosis services by providing accurate and timely appointments to
          our valued customers. With a commitment to excellence and a wide range
          of comprehensive doctor panels, DocTime is your trusted partner in
          promoting good health and overall well-being.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Our Expertise</h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          At DocTime, we pride ourselves on offering a seamless and efficient
          platform for managing patient appointments and empowering doctors with
          a user-friendly interface. Our system is designed to streamline the
          entire appointment scheduling process, ensuring a hassle-free
          experience for both patients and healthcare providers. <br />
          <br />
           Patients: DocTime makes managing appointments easier than ever.
          Patients can effortlessly book, reschedule, or cancel appointments
          with their preferred doctors. The platform ensures real-time updates,
          allowing patients to stay informed about their scheduled consultations
          without any confusion.
          <br />
          <br />
           Doctors: Our intuitive interface provides doctors with complete
          control over their schedules. Healthcare professionals can easily
          view, update, and manage their appointments. Whether it’s scheduling
          new consultations or canceling existing ones, DocTime ensures doctors
          can focus on what matters most—delivering quality care.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 leading-relaxed"></p>
          <Button
            onClick={toggleExpand}
            className="text-blue-600 hover:underline whitespace-nowrap ml-4"
          >
            {isExpanded ? "View More" : " View Less"}
          </Button>
        </div>
      </div>
      <div>
          {" "}
          {isExpanded ? (
            <></>
          ) : (
            <>
    
                <h2 className="text-xl font-semibold text-gray-800">
                  Comprehensive Tests
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Future Plans: We’re continually evolving to enhance our
                  services. Soon, DocTime will onboard diagnostic labs and test
                  centers, enabling patients to book slots for their medical
                  tests directly through the platform. This addition will bridge
                  the gap between patients, doctors, and diagnostic services,
                  creating a comprehensive healthcare ecosystem that saves time
                  and simplifies processes. At DocTime, we are committed to
                  transforming healthcare experiences through innovation and
                  dedication.
                </p>
              
            </>
          )}
     
      </div>
    </section>
  );
}
