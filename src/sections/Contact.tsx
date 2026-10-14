import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

function Contact() {
  return (
    <section className="section section--alt contact" id="contact">
      <p className="section-label reveal">Contact</p>
      <h2 className="contact-heading reveal reveal-delay-1">
        Let's <span className="contact-heading-accent">talk.</span>
      </h2>
      <p className="contact-subtitle reveal reveal-delay-2">
        I'm looking for new grad software engineering roles starting
        January 2027, anywhere in the US: remote, hybrid, or on-site. If
        you've got something cool, want to collaborate, or just want to say
        hey, I'm all ears.
      </p>

      <a
        href="mailto:mev@mevcaus.dev"
        className="contact-email-link reveal reveal-delay-3"
      >
        mev@mevcaus.dev →
      </a>

      <p className="contact-divider-text reveal reveal-delay-3">or drop a message</p>

      <ContactForm />

      <SocialLinks className="contact-socials reveal reveal-delay-4" />
    </section>
  );
}

export default Contact;
