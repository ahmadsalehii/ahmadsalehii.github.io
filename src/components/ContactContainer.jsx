import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Header from "./Header";

function ContactContainer() {
  return (
    <div className="mx-auto max-w-6xl">
      <Header
        title={"Get In Touch"}
        desciption={"Feel free to reach out to me anytime."}
      />
      <div className="grid gap-12 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactContainer;
