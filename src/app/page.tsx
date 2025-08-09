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
import { SkinServiceCard } from "./components/cards/SkinServiceCard";
import { Card } from "./components/cards/Card";

export default function Home() {
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
      <Card
        variant="makeup-service"
        imgSrc="https://images.unsplash.com/photo-1620703131777-6f81b15104a3?q=80&w=2670&auto=format&fit=crop"
        title="Beauty Makeup"
        duration="10 MINS"
        buttonText="BOOK NOW"
        onButtonClick={() => console.log("Make up service button clicked!")}
      />

    <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">Customer components</h2>
      <Card
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
          title="THE HYDRATOR"
          text="A rejuvenating facial treatment designed to deeply cleanse and hydrate your skin, leaving it refreshed and glowing."
          duration="60 Minutes"
          buttonText="Book Now"
          onButtonClick={() => console.log("Skinservice button clicked!")}
      />
    </div>
  );
}