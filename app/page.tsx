import {PatientForm} from "@/components/forms/PatientForm";
import {PasskeyModal} from "@/components/PasskeyModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home=({searchParams}:SearchParamProps)=>{
  const isAdmin= searchParams?.admin === 'true';
  return (
    <div className="flex h-screen max-h-screen">
     {isAdmin && <PasskeyModal />}
      {/* to do- passkey model for otp verification  */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex justify-normal">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <h1 className="font-extrabold text-2xl p-3 text-dark-400">DocTime</h1>
          </div>
          <PatientForm/>
          <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 DocTime
            </p>
            <Link href="/?admin=true" className="text-green-500 font-extrabold hover:text-white hover:duration-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/surgery.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] max-h-[80%] my-auto px-12 rounded-full hover:scale-105 hover:duration-1000"
      />
    </div>
  );
}
export default Home;