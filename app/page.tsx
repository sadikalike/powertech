// app/page.jsx
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';  // <--- ಇದನ್ನು ಸೇರಿಸಿ
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <section id="home"><Hero /></section>
       <About /> 
      <section id="services"><Services /></section>
      
      {/* About ಸೆಕ್ಷನ್ ಇಲ್ಲಿ ಬರುತ್ತದೆ */}
     
      
      <section id="contact"><Contact /></section>
    </main>
  );
}