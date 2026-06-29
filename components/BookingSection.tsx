"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  CheckCircle,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

interface DripOption {
  id: string;
  name: string;
  price: number;
}

interface BoosterOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const dripOptions: DripOption[] = [
  { id: "immune-boost", name: "Strong Immune Defense Drip", price: 154 },
  { id: "hydration", name: "Enhanced Electrolytes Drip", price: 136 },
  { id: "myers-cocktail", name: "High Dose Vitamin C Drip", price: 154 },
  { id: "nad-plus", name: "NAD+ Cell Regeneration Drip", price: 499 },
  { id: "beauty", name: "Beauty Glow Drip", price: 229 },
  { id: "hangover", name: "Hangover Recovery Drip", price: 249 },
];

const boosterOptions: BoosterOption[] = [
  { id: "b12-injection", name: "Vitamin B12 Booster", price: 49, description: "Supports red blood cells & boosts metabolic energy." },
  { id: "glutathione", name: "Glutathione Push", price: 149, description: "Powerful antioxidant boost for liver detox & glowing skin." },
  { id: "nad-injection", name: "NAD+ Booster (100mg)", price: 199, description: "Enhances cellular repair & neuro-cognitive function." },
  { id: "peptide-therapy", name: "Peptide Shot", price: 299, description: "Speeds up muscle recovery & cellular renewal." },
];

const timeSlots = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];

export function BookingSection() {
  const [step, setStep] = useState(1);
  const [selectedDripId, setSelectedDripId] = useState("immune-boost");
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Listen to drip selections
  useEffect(() => {
    const handleDripSelected = (e: Event) => {
      const dripId = (e as CustomEvent).detail;
      setSelectedDripId(dripId);
      setStep(1);
    };
    window.addEventListener("drip-selected", handleDripSelected);
    return () => window.removeEventListener("drip-selected", handleDripSelected);
  }, []);

  // Listen to search bar apply
  useEffect(() => {
    const handleSearchApplied = (e: Event) => {
      const data = (e as CustomEvent).detail;
      if (data.symptom) setSelectedDripId(data.symptom);
      if (data.location) setZip(data.location);
      if (data.date) setDate(data.date);
      setStep(1);
    };
    window.addEventListener("search-applied", handleSearchApplied);
    return () => window.removeEventListener("search-applied", handleSearchApplied);
  }, []);

  const toggleBooster = (id: string) => {
    if (selectedBoosters.includes(id)) {
      setSelectedBoosters(selectedBoosters.filter((b) => b !== id));
    } else {
      setSelectedBoosters([...selectedBoosters, id]);
    }
  };

  const getSelectedDrip = () => dripOptions.find((d) => d.id === selectedDripId) || dripOptions[0];

  const calculateTotal = () => {
    const dripPrice = getSelectedDrip().price;
    const boostersPrice = selectedBoosters.reduce((total, bId) => {
      const booster = boosterOptions.find((b) => b.id === bId);
      return total + (booster ? booster.price : 0);
    }, 0);
    return dripPrice + boostersPrice;
  };

  const handleNextStep = () => {
    if (step === 3 && (!date || !time)) {
      alert("Please select a date and time slot.");
      return;
    }
    if (step === 4 && (!name || !phone || !email || !address || !zip)) {
      alert("Please fill in all contact and location details.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1500);
  };

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  return (
    <section id="booking" className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-blue uppercase">
            Interactive Booking
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Schedule Your Mobile IV Dispatch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Book your therapy session in seconds. A certified nurse will come directly to your location anywhere in Los Angeles.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl ring-1 ring-slate-100">
          
          {!isBooked && (
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 overflow-x-auto whitespace-nowrap">
              <div className="flex gap-4 items-center">
                <span className={step >= 1 ? "text-brand-blue font-bold" : ""}>1. Treatment</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className={step >= 2 ? "text-brand-blue font-bold" : ""}>2. Boosters</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className={step >= 3 ? "text-brand-blue font-bold" : ""}>3. Schedule</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className={step >= 4 ? "text-brand-blue font-bold" : ""}>4. Dispatch Address</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className={step >= 5 ? "text-brand-blue font-bold" : ""}>5. Confirm</span>
              </div>
              <div className="text-brand-blue font-extrabold ml-4">
                Total: ${calculateTotal()}
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10">
            {isBooked ? (
              <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Booking Request Sent!</h3>
                <p className="mt-4 text-base text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Your mobile IV reservation for <strong className="text-slate-900">{getSelectedDrip().name}</strong> is pending review.
                </p>
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 max-w-sm mx-auto text-left border border-slate-100 text-sm">
                  <p className="flex justify-between py-1"><span className="text-slate-500">Date:</span> <strong className="text-slate-900">{date}</strong></p>
                  <p className="flex justify-between py-1"><span className="text-slate-500">Time:</span> <strong className="text-slate-900">{time}</strong></p>
                  <p className="flex justify-between py-1"><span className="text-slate-500">Total Price:</span> <strong className="text-brand-blue font-bold">${calculateTotal()}</strong></p>
                  <p className="flex justify-between py-1 border-t border-slate-200 mt-2 pt-2"><span className="text-slate-500">Dispatch Location:</span> <span className="text-slate-900 font-semibold truncate max-w-[200px]">{address}</span></p>
                </div>
                <p className="mt-6 text-xs text-brand-blue font-semibold">
                  📞 Sharlot's booking coordinator will call/text you within 15 minutes to confirm nurse dispatch.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedBoosters([]);
                    setName("");
                    setPhone("");
                    setEmail("");
                    setAddress("");
                    setZip("");
                    setIsBooked(false);
                  }}
                  className="mt-8 rounded-full bg-brand-blue px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-brand-darkblue cursor-pointer"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-brand-blue" />
                        Select Your IV Therapy Drip
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Select the formulation that best meets your health and wellness goals.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dripOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between rounded-xl border p-4 cursor-pointer transition-all ${
                            selectedDripId === option.id
                              ? "border-brand-blue bg-brand-blue/5 ring-2 ring-brand-blue/10"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="drip"
                              value={option.id}
                              checked={selectedDripId === option.id}
                              onChange={() => setSelectedDripId(option.id)}
                              className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                            />
                            <span className="text-sm font-semibold text-slate-900">{option.name}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-700">${option.price}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-brand-green" />
                        Enhance with Wellness Boosters (Optional)
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Add booster shots or glutathione pushes to your IV drip bag.</p>
                    </div>

                    <div className="space-y-3">
                      {boosterOptions.map((booster) => {
                        const isSelected = selectedBoosters.includes(booster.id);
                        return (
                          <div
                            key={booster.id}
                            onClick={() => toggleBooster(booster.id)}
                            className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all ${
                              isSelected
                                ? "border-brand-green bg-brand-green/5 ring-2 ring-brand-green/10"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex-1 pr-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-900">{booster.name}</span>
                                <span className="rounded-full bg-brand-green/10 px-2 py-0.5 text-[10px] font-bold text-brand-green">
                                  +${booster.price}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-1">{booster.description}</p>
                            </div>
                            <button
                              type="button"
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                                isSelected ? "bg-brand-green text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200 cursor-pointer"
                              }`}
                            >
                              {isSelected ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-brand-blue" />
                        Select Date & Preferred Time
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Our nurses operate 7 days a week from 8:00 AM to 10:00 PM.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Date</label>
                        <input
                          type="date"
                          value={date}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setDate(e.target.value)}
                          className="rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 focus:outline-none focus:border-brand-blue focus:bg-white"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time Slot</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setTime(slot)}
                              className={`rounded-xl border p-2.5 text-xs font-bold transition-all cursor-pointer ${
                                time === slot
                                  ? "border-brand-blue bg-brand-blue text-white"
                                  : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-brand-blue" />
                        Dispatch Location & Client Contact
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Provide contact details and the Los Angeles address where the nurse will administer treatment.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 pl-9 text-sm text-slate-900 focus:outline-none focus:border-brand-blue"
                          />
                          <User className="absolute left-2.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. (310) 555-0199"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 pl-9 text-sm text-slate-900 focus:outline-none focus:border-brand-blue"
                          />
                          <Phone className="absolute left-2.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. name@domain.com"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 pl-9 text-sm text-slate-900 focus:outline-none focus:border-brand-blue"
                          />
                          <Mail className="absolute left-2.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Street Address (Suite / Apt / Hotel Room)</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="e.g. 123 Wilshire Blvd, Apt 4B"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 pl-9 text-sm text-slate-900 focus:outline-none focus:border-brand-blue"
                          />
                          <MapPin className="absolute left-2.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ZIP Code</label>
                        <input
                          type="text"
                          required
                          pattern="\d*"
                          maxLength={5}
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          placeholder="e.g. 90210"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-brand-blue"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City</label>
                        <input
                          type="text"
                          disabled
                          value="Los Angeles"
                          className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm text-slate-500 font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Review & Confirm Your Dispatch</h3>
                      <p className="text-sm text-slate-600 mt-1">Review your selections before submitting. Payment will be collected at the time of service.</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4 text-sm">
                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-semibold text-slate-600">Selected Treatment:</span>
                        <span className="font-bold text-slate-900">{getSelectedDrip().name} (${getSelectedDrip().price})</span>
                      </div>

                      {selectedBoosters.length > 0 && (
                        <div className="flex flex-col border-b border-slate-200 pb-2">
                          <span className="font-semibold text-slate-600">Add-on Boosters:</span>
                          <div className="mt-1 space-y-1 pl-4">
                            {selectedBoosters.map((bId) => {
                              const b = boosterOptions.find((o) => o.id === bId);
                              return b ? (
                                <div key={bId} className="flex justify-between text-xs text-slate-700">
                                  <span>• {b.name}</span>
                                  <span>+${b.price}</span>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-semibold text-slate-600">Schedule Time:</span>
                        <span className="font-bold text-slate-900">{date} at {time}</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-semibold text-slate-600">Patient & Phone:</span>
                        <span className="font-bold text-slate-900">{name} ({phone})</span>
                      </div>

                      <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-semibold text-slate-600">Dispatch Location:</span>
                        <span className="font-bold text-slate-900 text-right truncate max-w-[250px]">{address}, {zip}</span>
                      </div>

                      <div className="flex justify-between pt-2 text-base">
                        <span className="font-black text-slate-900">Total Price:</span>
                        <span className="font-black text-brand-blue text-lg">${calculateTotal()}</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-amber-50 p-4 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                      <strong>Note:</strong> We accept all major credit cards, HSA/FSA cards, and Apple Pay. Cancellations must be requested at least 2 hours before the scheduled time slot to avoid a dispatch fee.
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between border-t border-slate-100 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-50 cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-1 rounded-full bg-brand-blue px-6 py-2.5 text-xs font-bold text-white shadow transition-colors hover:bg-brand-darkblue cursor-pointer"
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1 rounded-full bg-brand-green px-8 py-3 text-xs font-bold text-white shadow transition-all hover:bg-emerald-700 disabled:bg-slate-300 cursor-pointer"
                    >
                      {isSubmitting ? "Sending Request..." : "Confirm Booking"}
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
