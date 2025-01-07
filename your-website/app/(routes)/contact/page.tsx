import { MainLayout } from '@/components/Layout/MainLayout';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 mb-8">
          Have a question or want to collaborate? Feel free to reach out.
        </p>
        <ContactForm />
      </div>
    </MainLayout>
  );
}