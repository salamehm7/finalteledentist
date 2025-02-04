import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">My Live Dentists</h3>
            <p className="text-slate-400">Professional virtual dental care available 24/7 for your emergency needs.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-emerald-400" />
                <span>1-800-TELEDENT</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-emerald-400" />
                <span>contact@mylivedentists.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
                <span>Virtual Services Nationwide</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Emergency Hours</h3>
            <p className="text-slate-400">24/7 Emergency Virtual Consultations</p>
            <p className="text-slate-400">Regular Virtual Visits:</p>
            <p className="text-slate-400">Mon-Fri: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} My Live Dentists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer