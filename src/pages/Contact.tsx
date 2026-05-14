import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone, Clock, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'contacts');
      setFormStatus('idle'); // Or show an error message
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with European Era. We are here to answer your questions and help you with your mobility journey."
      />
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you have a question about our programs, your application, or want to partner with us, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-lg text-slate-600">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Our Headquarters</h3>
                    <p className="text-slate-600">Málaga, Spain</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600"><a href="mailto:info@europeanera.eu" className="hover:text-primary">info@europeanera.eu</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+34 617 916 957</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Working Hours</h3>
                    <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM (CET)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <Button variant="outline" onClick={() => setFormStatus('idle')}>Send Another Message</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <MessageSquare className="text-primary" /> Send a Message
                  </h3>                   <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">First Name</label>
                        <input id="firstName" value={formData.firstName} onChange={handleChange} required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" placeholder="John"/>
                      </div>
                       <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Last Name</label>
                        <input id="lastName" value={formData.lastName} onChange={handleChange} required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" placeholder="Doe"/>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Email Address</label>
                      <input id="email" value={formData.email} onChange={handleChange} required type="email" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" placeholder="you@example.com"/>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Subject</label>
                      <select id="subject" value={formData.subject} onChange={handleChange} className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                        <option value="">Select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Student Support">Student Support</option>
                        <option value="Company Partnership">Company Partnership</option>
                        <option value="University Partnership">University Partnership</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Message</label>
                      <textarea id="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white" rows={5} placeholder="How can we help you?"></textarea>
                    </div>

                    <Button type="submit" disabled={formStatus === 'submitting'} size="lg" className="w-full h-14 text-lg">
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </Button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
