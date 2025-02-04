import React from 'react';
import { AlertCircle } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="py-16 bg-white" id="emergency">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <AlertCircle className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold">Dental Emergency Information</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why Immediate Care Matters</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-indigo-600">
                <h4 className="text-xl font-semibold mb-2 text-indigo-900">Tooth Infection Risks</h4>
                <p className="text-gray-700">An untreated tooth infection can spread to other parts of your body and may lead to serious health complications.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-indigo-600">
                <h4 className="text-xl font-semibold mb-2 text-indigo-900">Warning Signs</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Severe, persistent toothache</li>
                  <li>Swelling in the face or cheek</li>
                  <li>Sensitivity to hot and cold</li>
                  <li>Fever or general illness</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
              alt="Dental Care"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
              alt="Dental Consultation"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection