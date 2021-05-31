import { CSSTransition } from "react-transition-group";
import Navigation from "components/navigation";
import Footer from "components/Footer";
import setPageDetails from "components/hooks_functions/setPageDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  const links = setPageDetails("contact");

  return (
    <CSSTransition
      in={true}
      timeout={350}
      classNames="header"
      unmountOnExit
      appear
    >
      <div>
        <Navigation links={links} />
        <div className="contact-container">
          <h3 className="head">Contact Us</h3>
          <ContactForm />
        </div>
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default Contact;
