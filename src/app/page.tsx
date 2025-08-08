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



    

    </div>
  );
}