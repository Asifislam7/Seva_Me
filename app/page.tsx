"use client";
import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { CardWithForm } from "@/components/Cardsection";
import { getUserCount } from "@/lib/actions/patients.action";
import { useEffect, useState } from "react";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import IntroductionSection from "@/components/About";
import { Stethoscope, CalendarDays, Users } from 'lucide-react'

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";
  const [userCount, setUserCount] = useState(0);
  const [appointmendCount, setAppointmentCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      const count = await getUserCount();
      setUserCount(count);
    };

    const fetchappointmentCount = async () => {
      const appointments = await getRecentAppointmentList();
      setAppointmentCount(appointments.totalCount);
    };
    fetchappointmentCount();
    fetchUserCount();
  }, []);

  return (
    <div className="min-h-screen">
      {isAdmin && <PasskeyModal />}
      <nav className="w-full p-4 flex justify-center items-center">
        <NavigationMenu>
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="patient"
            className=" h-10 w-fit"
          />
          <h1 className="font-extrabold text-2xl p-3 text-dark-400">DocTime</h1>

          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/about" className="hover:underline">
                  About{" "}
                </Link>
              </NavigationMenuTrigger>
              <HoverCard>
                <HoverCardTrigger>
                  <NavigationMenuTrigger>Health Checkup</NavigationMenuTrigger>
                </HoverCardTrigger>
                <HoverCardContent className="bg-white">
                  Coming Soon!!!
                </HoverCardContent>
              </HoverCard>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="flex space-x-4 float-right">
            <div className="text-md bg-black p-2 rounded-lg w-20 text-center">
              <Link
                href="#login-form"
                className="text-white font-extrabold hover:text-green-500 hover:duration-500"
              >
                Login
              </Link>
            </div>
          </div>
        </NavigationMenu>
      </nav>

      {/* nav bar ends here only */}
      <section className="landing-page">
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <h1 className="font-extrabold text-center mb-4 text-4xl mt-5 text-[#1b1717e8]">
              Welcome to DocTime!
            </h1>
          </HoverCardTrigger>
          <HoverCardContent className="bg-white">
            Your Trusted Partner for Medical Appointments
          </HoverCardContent>
        </HoverCard>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-start">
            <Image
              src="/assets/images/landing.jpg"
              alt=""
              width={1000}
              height={1000}
              className="rounded-xl h-5/6 hover:scale-105 transition duration-500 pr-0 md:pr-24 mb-4 md:mb-0"
            />
            <div className="text-justify flex flex-col w-full md:w-5/6 ml-0 md:ml-4">
              <Carousel className="w-full bg-[#1b1717e8] text-white p-5 rounded-lg shadow-xl">
                <CarouselContent>
                  <CarouselItem>
                    <p className="text-lg mb-8 leading-loose">
                      DocTime has completely transformed the way I manage my
                      healthcare appointments. Booking an appointment is so
                      easy, and I love that I can reschedule without any hassle.
                      It has saved me so much time!
                    </p>
                    <p className="float-right bottom-0 mt-24 text-gray-400">
                      Ayesha Malik
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <p className="text-lg mb-8 leading-loose">
                      As a doctor, DocTime has been a game-changer for my
                      practice. The interface is straightforward, and I can
                      manage my appointments with just a few clicks. It helps me
                      stay organized and focus on patient care
                    </p>
                    <p className="float-right bottom-0 mt-24 text-gray-400">
                      Dr. Ali Hassan, General Physician
                    </p>
                  </CarouselItem>
                  <CarouselItem>
                    <p className="text-lg mb-8 leading-loose">
                      DocTime is already amazing for managing doctor
                      appointments, and I am thrilled to hear they are adding
                      diagnostic labs soon. It is a one-stop solution for all
                      healthcare needs!
                    </p>
                    <p className="float-right bottom-0 mt-24 text-gray-400">
                      Ritika Sharma
                    </p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <IntroductionSection />
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 space-y-4 md:space-y-0">
        <CardWithForm count={userCount} message="Users visited till now" icon={<Users className="w-8 h-8 mx-auto mb-2" />} />
        <CardWithForm
          count={appointmendCount}
          message="Appointments handled till now" icon={<CalendarDays className="w-8 h-8 mx-auto mb-2" />}
        />
        <CardWithForm count={50} message="Doctors available" icon={<Stethoscope className="w-8 h-8 mx-auto mb-2" />} />
      </div>
      {/* Add the form section with an id */}
      <div className="flex justify-between" id="login-form">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <PatientForm />
            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 DocTime
              </p>
              <Link
                href="/?admin=true"
                className="text-green-500 font-extrabold hover:text-white hover:duration-500"
              >
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
    </div>
  );
};

export default Home;
