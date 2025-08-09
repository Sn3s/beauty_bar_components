"use client";
import BeautyBarText from "./components/typography/top_bar_owners_xwide";
import BentonModDispCompText from "./components/typography/main_feature_benton_mod_disp_comp_text";
import MainNavOwnersXWide from "./components/typography/main_nav_owners_xwide";
import NameDropdownOwnersXWide from "./components/typography/name_dropdown_owners_xwide";
import EmailDropdownOwnersXWide from "./components/typography/email_dropdown_owners_xwide";
import ProfileDropdownOwnersXWide from "./components/typography/profile_dropdown_owners_xwide";
import LogoutDropdownOwnersXWide from "./components/typography/logout_dropdown_owners_xwide";
import BookingsDropdownOwnersXWide from "./components/typography/bookings_dropdown_owners_xwide";
import Link from "./components/link";
import Button from "./components/button";
import TextInputBox from "./components/text_input_box";
import OtpInput from "./components/OtpInput";
import { SkinServiceCard } from "./components/cards/SkinServiceCard";
import { CardsComponent } from "./components/cards/CardsComponent";
import { Card } from "./components/cards/Card";

import React, { useState } from "react";

export default function Home() {

  const [otp, setOtp] = useState("");
  return (
    <div>
      
    <Button>
      Book Now
    </Button>
    <br />
    <br />
    <br />
    <br />

    <Link>
      LINK
    </Link>

    <br />
    <br />


      <BeautyBarText>
        ALL SERVICES* 100% FREE FOR ONE WEEK
      </BeautyBarText>

      <br />

      <BentonModDispCompText>
        It's More Than Just a Look
      </BentonModDispCompText>

      <br />

      <MainNavOwnersXWide>
        About Us
      </MainNavOwnersXWide>

    
      <br />

      <NameDropdownOwnersXWide>
        Reynan Decena
      </NameDropdownOwnersXWide>

      <br />

      <EmailDropdownOwnersXWide>
        reynan@testforce.com.au
      </EmailDropdownOwnersXWide>

    <br />

    <ProfileDropdownOwnersXWide>
      Profile / Booking History
    </ProfileDropdownOwnersXWide>

    <br />

    <LogoutDropdownOwnersXWide>
      Log Out
    </LogoutDropdownOwnersXWide>

    <br />

    <BookingsDropdownOwnersXWide>
      INSTANT MAKE UP
    </BookingsDropdownOwnersXWide>

    <br />

    <TextInputBox value="reynan@testforce.com.au" />

    <h1 className="text-4xl font-bold text-left text-gray-800 mb-6">Cards</h1>
    <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">Make up services</h2>
      <CardsComponent
        variant="makeup-service"
        imgSrc="https://images.unsplash.com/photo-1620703131777-6f81b15104a3?q=80&w=2670&auto=format&fit=crop"
        title="Beauty Makeup"
        duration="10 MINS"
        buttonText="BOOK NOW"
        onButtonClick={() => console.log("Make up service button clicked!")}
      />

    <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">Customer components</h2>
      <CardsComponent
        variant="customer-component"
        imgSrc="https://images.unsplash.com/photo-1620703131777-6f81b15104a3?q=80&w=2670&auto=format&fit=crop"
        title="Beauty Makeup"
        duration="10 MINS"
        buttonText="BOOK NOW"
        onButtonClick={() => console.log("Make up service button clicked!")}
      />

    <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">Skin Services</h2>
      <SkinServiceCard
          imgSrc="https://images.unsplash.com/photo-1590483259871-331b41e3d30b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="The Hydrator"
          text="Refresh the pores with a deep-cleansing exfoliation using steam and enzymes for smooth, clear and radiant skin"
          duration="30 MINUTES | BOOKING REQ."
          buttonText="Book Now"
          onButtonClick={() => console.log("Skinservice button clicked!")}
      />

    <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">Generic Card</h2>
      <Card className="max-w-md mx-auto"
        header={<img
          src="https://placehold.co/256x46/e2e8f0/64748b?text=Image+Example"
          alt="Placeholder"
          className="rounded-lg w-full"
        />}
        title="Card Title"
        subTitle="Please enter your email to reset the password"
        footer={<p className="text-center text-sm text-gray-400">Don't have an account? <span>Sign Up</span></p>}
      >
        <p className="text-gray-600 mb-4">
          This is a complete card with a header, main content, and a footer.
        </p>

      </Card>

        <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">OTP Input Example</h2>
      <OtpInput value={otp} onChange={setOtp} />



    </div>
  );
}