import { FooterLink } from "./FooterLink";
import { FooterHorario } from "./FooterHorario";
import { FooterContact } from "./FooterContact";
import { FooterInfo } from "./FooterInfo";

export const FooterLayout = () => {
  return (
    <>
      <section className="footer">
        <FooterLink />
        <FooterHorario />
        <FooterContact />
        <FooterInfo />
      </section>
      {/* <br/>
      <footer className="footer_1">
        <FooterLink />
        <FooterHorario />
        <FooterContact />
        <FooterInfo />
      </footer> */}
    </>

  );
};
