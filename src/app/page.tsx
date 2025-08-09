"use client";
import beautybarlogo from "./assets/beautybarlogo.png";
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
      Button
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




Cards



<div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow">
  <img
    src={beautybarlogo.src}
    alt="Beauty Bar Logo"
    className="mx-auto mb-6"
    style={{ width: 180, height: "auto" }}
  />
  <h1
    style={{
      fontFamily: "Inter, serif",
      fontWeight: 700,
      fontSize: 36,
      textAlign: "center",
      marginBottom: 24,
      color: "#1A202C",
      fontStyle: "italic",
      letterSpacing: "-1px"
    }}
  >
    LOG IN TO YOUR ACCOUNT
  </h1>
  <label
    htmlFor="login-email"
    style={{
      display: "block",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      marginBottom: 8,
      color: "#22223B"
    }}
  >
  </label>
  <TextInputBox
    label="Email Address/Phone Number"
    id="login-email"
    placeholder="Enter your email or phone"
    className="w-full mb-6"
  />
  <Button
  style={{
    width: "100%",
    background: "#F9F4F0",
    color: "#22223B",
    fontWeight: 500,
    fontSize: 20,
    padding: "16px 0",
    borderRadius: 12,
    marginBottom: 24,
    border: "none",
    display: "flex", // Makes the button a flex container
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
  }}
>
  SIGN IN
</Button>

  <p
    style={{
      textAlign: "center",
      fontSize: 16,
      color: "#A0AEC0",
      marginTop: 16
    }}
  >
    Don’t have an account? <span style={{ color: "#22223B", fontWeight: 500 }}>Sign Up</span>
  </p>
</div>


<div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow">
  <img
    src={beautybarlogo.src}
    alt="Beauty Bar Logo"
    className="mx-auto mb-6"
    style={{ width: 180, height: "auto" }}
  />
  <h1
    style={{
      fontFamily: "Inter, serif",
      fontWeight: 700,
      fontSize: 36,
      textAlign: "center",
      marginBottom: 24,
      color: "#1A202C",
      fontStyle: "italic",
      letterSpacing: "-1px"
    }}
  >
    CHECK YOUR INBOX
  </h1>
  <p
    style={{
      textAlign: "center",
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      color: "#22223B",
      marginBottom: 8
    }}
  >
    We sent a verification code to<br />
    reynan@testforce.com.au and (03) 6282 0775
  </p>
  <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
    <OtpInput value={otp} onChange={setOtp} />
  </div>
  <Button
  style={{
    width: "100%",
    background: "#F9F4F0",
    color: "#22223B",
    fontWeight: 500,
    fontSize: 20,
    padding: "16px 0",
    borderRadius: 12,
    marginBottom: 24,
    border: "none",
    display: "flex", // Makes the button a flex container
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
  }}
>
    VERIFY
  </Button>
  <p
    style={{
      textAlign: "center",
      fontSize: 16,
      color: "#22223B",
      marginBottom: 24,
      fontFamily: "Inter, sans-serif"
    }}
  >

    Didn’t receive the verification code? <span style={{ color: "#22223B", fontWeight: 500, cursor: "pointer" }}>Click to resend</span>
  </p>
  <div style={{ textAlign: "center", color: "#22223B", fontFamily: "Inter, sans-serif", fontSize: 16 }}>
    <span style={{ marginRight: 8, fontSize: 20 }}>←</span>
    Back to Sign In
  </div>
</div>


<div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow">
  <img
    src={beautybarlogo.src}
    alt="Beauty Bar Logo"
    className="mx-auto mb-6"
    style={{ width: 180, height: "auto" }}
  />
  <h1
    style={{
      fontFamily: "Inter, serif",
      fontWeight: 700,
      fontSize: 36,
      textAlign: "center",
      marginBottom: 24,
      color: "#1A202C",
      fontStyle: "italic",
      letterSpacing: "-1px"
    }}
  >
    REGISTER AN ACCOUNT
  </h1>
  <label
    htmlFor="register-name"
    style={{
      display: "block",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      marginBottom: 8,
      color: "#22223B"
    }}
  >

  </label>
  <TextInputBox
    label="Name"
    id="register-name"
    placeholder="Reynan Decena"
    className="w-full mb-6"
    value="Reynan Decena"
  />
  <label
    htmlFor="register-email"
    style={{
      display: "block",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      marginBottom: 8,
      color: "#22223B"
    }}
  >

  </label>
  <TextInputBox
    label="Email"
    id="register-email"
    placeholder="reynan@testforce.com.au"
    className="w-full mb-6"
    value="reynan@testforce.com.au"
  />
  <label
    htmlFor="register-phone"
    style={{
      display: "block",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      marginBottom: 8,
      color: "#22223B"
    }}
  >

  </label>
  <TextInputBox
    label="Phone Number"
    id="register-phone"
    placeholder="(03) 9046 8168"
    className="w-full mb-6"
    value="(03) 9046 8168"
  />
 <Button
  style={{
    width: "100%",
    background: "#F9F4F0",
    color: "#22223B",
    fontWeight: 500,
    fontSize: 20,
    padding: "16px 0",
    borderRadius: 12,
    marginBottom: 24,
    border: "none",
    display: "flex", // Makes the button a flex container
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
  }}
>
    SIGN UP
  </Button>
  <p
    style={{
      textAlign: "center",
      fontSize: 16,
      color: "#22223B",
      marginBottom: 0,
      fontFamily: "Inter, sans-serif"
    }}
  >
    Already have an account? <span style={{ color: "#22223B", fontWeight: 500, cursor: "pointer" }}>Sign in</span>
  </p>
</div>




    </div>
  );
}