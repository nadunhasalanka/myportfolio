import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';

function App() {
  return (
    <>
      <FloatingIcons />
      <Header />
      
      <main className="min-h-screen" style={{paddingTop: '100px'}}>
        {/* Hero Section / Profile */}
        <div id="profile" className="min-h-screen flex items-center justify-center">
          {/* <div className="max-w-6xl mx-auto px-8"> */}
          <div className="max-w-5xl mx-auto px-8 py-10">

            <ProfileCard />
          </div>
        </div>
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
