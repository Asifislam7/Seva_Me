import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patients.action";


const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patientId = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen text-white">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patientId}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 DocTime</p>
        </div>
      </section>

      <Image
        src="/assets/images/doctor.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[30%] max-h-[70%] my-auto px-12 rounded-full hover:scale-105 hover:duration-1000"
      />
    </div>
  );
};

export default Appointment;
