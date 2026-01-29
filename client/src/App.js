import { useState } from "react";
import IconMenu from "./components/IconMenu";
import Modal from "./components/Modal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactBox";

function App() {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
return (
  <>
    {/* HERO SECTION */}
    <HeroSection />

    {/* ICON MENU */}
    <IconMenu openModal={openModal} />

    {/* MODAL POPUP */}
    <Modal isOpen={modalType !== null} onClose={closeModal}>
      {modalType === "skills" && <Skills />}
      {modalType === "projects" && <Projects />}
      {modalType === "achievements" && <Achievements />}
    </Modal>

    {/* CONTACT FORM */}
    <ContactForm />
  </>
);
}
export default App;
