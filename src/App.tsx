import React, { useState } from 'react';
import { Phone, Calendar, Pill, AlertCircle, ChevronRight } from 'lucide-react';
import AppointmentForm from './components/AppointmentForm';
import Header from './components/Header';
import EmergencySection from './components/EmergencySection';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Virtual Dental Care When You Need It Most</h1>
            <p className="text-xl mb-8">Get professional dental consultation from the comfort of your home. Available 24/7 for dental emergencies.</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-emerald-400 hover:bg-emerald-300 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
            >
              Schedule Now <ChevronRight className="ml-2 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Phone className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Access to dental professionals whenever you need them.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Calendar className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book your virtual consultation with just a few clicks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Pill className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prescription Service</h3>
              <p className="text-gray-600">Get antibiotics and pain medications called in to your local pharmacy.</p>
            </div>
          </div>
        </div>
      </section>

      <EmergencySection />

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <AppointmentForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App