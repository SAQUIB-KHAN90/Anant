
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicePreview from '@/components/ServicePreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ProjectsPreview from '@/components/ProjectsPreview';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicePreview />
      <WhyChooseUs />
      <Testimonials />
      <ProjectsPreview />
      <CTA />
    </Layout>
  );
};

export default Index;
