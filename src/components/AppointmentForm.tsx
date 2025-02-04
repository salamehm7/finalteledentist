import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { X } from 'lucide-react';

const stripePromise = loadStripe('your_publishable_key');

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      const displayMinute = minute.toString().padStart(2, '0');
      slots.push(`${displayHour}:${displayMinute} ${ampm}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  reason: string;
}

const AppointmentForm = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [selectedTime, setSelectedTime] = useState('');

  const onSubmit = async (data: FormData) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) return;
      console.log('Form submitted:', { ...data, timeSlot: selectedTime });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
      >
        <X className="w-6 h-6" />
      </button>

      <h2 className="text-2xl font-bold mb-6">Schedule Your Virtual Visit</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            {...register('phone', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input
            type="date"
            {...register('date', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
          <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={`p-2 text-sm rounded ${
                  selectedTime === time
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          {selectedTime && (
            <p className="mt-2 text-sm text-gray-600">Selected time: {selectedTime}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
          <textarea
            {...register('reason', { required: true })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.reason && <span className="text-red-500 text-sm">Reason is required</span>}
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Consultation Fee: $75</p>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;