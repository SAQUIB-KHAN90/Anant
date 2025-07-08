import Layout from '@/components/Layout';
import DefaultGallery from '@/components/DefaultGallery';

export default function GalleryPage() {
  return (
    <Layout>
      <div className="py-20 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DefaultGallery />
        </div>
      </div>
    </Layout>
  );
}
