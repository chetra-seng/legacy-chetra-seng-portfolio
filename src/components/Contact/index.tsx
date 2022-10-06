import React, {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Loader from "react-loaders";
import AnimatedLetter from "../AnimatedLetter";
import emailjs from "@emailjs/browser";
import "./index.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail: FormEventHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    if (!currentForm) return null;

    try {
      await emailjs.sendForm(
        "service_zphgjrd",
        "template_w3mp9sl",
        currentForm,
        "xG5EGvRG2KbV4Brmm"
      );
      window.alert("Send message successfully.");
    } catch (err) {
      window.alert("Send message failed. Please try again.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={"Contact Me".split("")}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            vero ipsam nisi, sapiente a mollitia ut quaerat nam quas culpa!
            Doloribus voluptatum iste quaerat nesciunt labore error perferendis
            dolore sequi.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type={"text"}
                    name={"name"}
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type={"email"}
                    name={"email"}
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type={"text"}
                    name={"subject"}
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input
                    type={"submit"}
                    className="flat-button"
                    value={"SEND"}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Cambodia, 
          <br />
          Phnom Penh,
          <br />
          E2-130, Chamkarmon
          <br />
          st: 143
          <br />
          <span>meow@meow.meow</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[11.555287, 104.915993]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[11.555287, 104.915993]}>
              <Popup>Meow lives here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type={"ball-scale-multiple"} active />
    </>
  );
};

export default Contact;
