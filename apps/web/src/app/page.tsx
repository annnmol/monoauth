"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login attempt with phone number: +91${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="bg-slate-800 border-slate-700 relative">
          <CardContent className="p-0">
            {/* Close Button */}
            {/* <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl z-10">
              ✕
            </button> */}

            {/* Header */}
            <div className="text-center pt-8 pb-6 px-8">
              <h1 className="text-white text-2xl font-medium mb-2">
                Login or sign up to continue
              </h1>
              <p className="text-gray-400 text-sm">
                Scan QR code or enter phone number to login
              </p>
            </div>

            <div className="flex">
              {/* QR Code Section */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 border-r border-slate-700">
                <div className="w-40 h-40 bg-white p-3 rounded-2xl mb-6">
                  <Image
                    src="https://45kz7jry.user.webaccel.jp/images/gallery/g-multi_1481529161.png"
                    alt="QR Code"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-white font-medium text-base mb-2">
                  Use Camera App to Scan QR
                </h3>
                <p className="text-gray-400 text-sm text-center max-w-xs">
                  Click on the link generated to redirect to Monoauth mobile app
                </p>
              </div>

              {/* OR Divider */}
              <div className="flex items-center justify-center px-4">
                {/* <span className="text-gray-400 text-sm font-medium bg-slate-800 px-2">
                  OR
                </span> */}
              </div>

              {/* Phone Number Section */}
              <div className="flex-1 p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-3">
                      Enter mobile number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center px-3 py-2 bg-slate-700 border border-slate-600 rounded-md border-r-0">
                        <span className="text-white text-sm">+91</span>
                      </div>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                        placeholder="Enter mobile number"
                        className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-gray-400 rounded focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none h-10 text"
                        maxLength={10}
                      />
                    </div>
                    
                    {/* Description below input */}
                    <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                      By proceeding you confirm that you are above
                      <br />
                      18 years of age and agree to the{" "}
                      <button className="text-blue-400 hover:underline">
                        Privacy Policy
                      </button>
                      {" "}&{" "}
                      <button className="text-blue-400 hover:underline">
                        Terms of Use
                      </button>
                      .
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-medium py-2.5 rounded-md text-sm mt-6"
                    disabled={phoneNumber.length !== 10}
                  >
                    Get OTP
                  </Button>
                </form>

                {/* Help link at the bottom */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    Having trouble logging in?{" "}
                    <button className="text-blue-400 hover:underline">
                      Get Help
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
