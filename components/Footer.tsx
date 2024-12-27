import Link from "next/link";
import {
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main footer content */}
      <div className="bg-[#161414e8] py-12 text-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
          {/* Patients Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">PATIENTS</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">
                Schedule the appointment
              </Link>
              <Link href="#" className="hover:underline">
                Nearest Doctor
              </Link>
              <Link href="#" className="hover:underline">
                Download Reciept
              </Link>
              <Link href="#" className="hover:underline">
                Download App
              </Link>
              <Link href="#" className="hover:underline">
                Promotions & Discounts
              </Link>
              <Link href="#" className="hover:underline">
                Special Programs
              </Link>
            </div>
          </div>

          {/* Doctors Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">DOCTORS</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">
                Find a Doctor
              </Link>
              <Link href="#" className="hover:underline">
                Our Labs
              </Link>
              <Link href="#" className="hover:underline">
                Events
              </Link>
              <Link href="#" className="hover:underline">
                Quaifications
              </Link>
            </div>
          </div>

          {/* Business Partnership Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">BUSINESS PARTNERSHIP</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">
                Partner With Us
              </Link>
              <Link href="#" className="hover:underline">
                Become a Supporter
              </Link>
              <Link href="#" className="hover:underline">
                Corporate Tie-up
              </Link>
              <Link href="#" className="hover:underline">
                International Partnership
              </Link>
              <Link href="#" className="hover:underline">
                Corporate Covid Testing
              </Link>
            </div>
          </div>

          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">ABOUT US</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">
                Our Journey
              </Link>
              <Link href="#" className="hover:underline">
                Vision, Mission & Values
              </Link>
              <Link href="#" className="hover:underline">
                Our Team
              </Link>
              <Link href="#" className="hover:underline">
                Our Network
              </Link>
              <Link href="#" className="hover:underline">
                Logistics Strength
              </Link>
              <Link href="#" className="hover:underline">
                CSR
              </Link>
              <Link href="#" className="hover:underline">
                Career
              </Link>
            </div>
          </div>
          <div className=" flex-col space-y-2 hidden md:block">
            <Image
              src="/assets/icons/logo-full.png" style={{height : "250px", width:"500px"}}
              width={1000}
                height={1000}
              alt="patient"
              className=" h-10 w-fit rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom footer section */}
      <div className=" text-black py-4" style={{background:"linear-gradient(to right, white , pink  )"}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              <p>2024© DocTime</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
                <span>|</span>
                <Link href="#" className="hover:underline">
                  CSR
                </Link>
                <span>|</span>
                <Link href="#" className="hover:underline">
                  Terms of Use
                </Link>
                <span>|</span>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link href="#" className="hover:underline">
                  Online Cancellation Policy
                </Link>
                <span>|</span>
                <Link href="#" className="hover:underline">
                  Cookie Policy
                </Link>
                <span>|</span>
                <Link href="#" className="hover:underline">
                  Sitemap
                </Link>
              </div>
              <p className="mt-2 text-xs">
                Made with ❤️ in India. All rights reserved. The information
                provided here is for your general information and is not a
                substitute for professional medical advice, diagnosis, or
                treatment. Please consult your doctor for your medical concerns.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-4">
                <span className="text-sm">Follow us on:</span>
                <div className="flex gap-2">
                  <Link href="#" className="hover:opacity-80">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="hover:opacity-80">
                    <Youtube className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="hover:opacity-80">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="hover:opacity-80">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="hover:opacity-80">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <button className="bg-[white] hover:bg-[#0093c2] text-white px-4 py-2 rounded-md flex items-center gap-2 text-black">
                <MessageCircle className="w-4 h-4" />
                Let's Chat!
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
