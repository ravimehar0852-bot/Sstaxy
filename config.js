/* ============================================================
   SS TAXY — SITE CONFIG
   Edit everything in this one file. Every page pulls from here,
   so a phone number / address / rate change only needs to happen
   once. Replace the PLACEHOLDER values with SS TAXY's real details
   before going live.
   ============================================================ */

const CONFIG = {
  brand: {
    name: "SS TAXY",
    tagline: "Your Ride, Your Rules, Rajasthan and Beyond",
    legalName: "SS TAXY Private Limited",
    foundedYear: 2024,
  },

  contact: {
    // PLACEHOLDER — replace with the real SS TAXY number
    phoneDisplay: "+91-90587-12345",
    phoneRaw: "919058712345",
    // PLACEHOLDER — replace with the real SS TAXY email
    email: "booking@sstaxy.com",
    // PLACEHOLDER — replace with the real SS TAXY office address
    address: "B-14, Vaishali Nagar, Jaipur, Rajasthan 302021",
    whatsappDefaultMessage:
      "Hi SS TAXY, I'd like to book a cab. My pickup city is ___ and I want to travel to ___ on ___ (date).",
    hours: "Bookings open 24x7 — our dispatch desk never sleeps",
  },

  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },

  fleet: [
    {
      id: "sedan",
      name: "Swift Dzire or Equivalent",
      capacity: "4+1 Seater",
      rate: 11,
      bestFor: "Solo travellers and small families on a budget run",
      icon: "sedan",
    },
    {
      id: "suv",
      name: "Maruti Ertiga",
      capacity: "6+1 Seater",
      rate: 14,
      bestFor: "Group trips where luggage and legroom both matter",
      icon: "suv",
    },
    {
      id: "premium",
      name: "Toyota Innova Crysta",
      capacity: "6+1 Seater",
      rate: 19,
      bestFor: "Long outstation hauls and airport pickups in comfort",
      icon: "premium",
    },
  ],

  // Featured one-way routes shown on the homepage.
  routes: [
    {
      from: "Jaipur",
      to: "Udaipur",
      distanceKm: 405,
      startingFare: 11,
      vehicle: "Sedan",
      slug: "jaipur-to-udaipur-taxi",
    },
    {
      from: "Jaipur",
      to: "Jodhpur",
      distanceKm: 340,
      startingFare: 11,
      vehicle: "Sedan",
      slug: "jaipur-to-jodhpur-taxi",
    },
    {
      from: "Jaipur",
      to: "Delhi",
      distanceKm: 280,
      startingFare: 12,
      vehicle: "Ertiga",
      slug: "jaipur-to-delhi-taxi",
    },
    {
      from: "Jaipur",
      to: "Ajmer / Pushkar",
      distanceKm: 135,
      startingFare: 11,
      vehicle: "Sedan",
      slug: "jaipur-to-ajmer-taxi",
    },
    {
      from: "Jaipur",
      to: "Agra",
      distanceKm: 235,
      startingFare: 13,
      vehicle: "Innova Crysta",
      slug: "jaipur-to-agra-taxi",
    },
    {
      from: "Jaipur",
      to: "Kota",
      distanceKm: 250,
      startingFare: 11,
      vehicle: "Sedan",
      slug: "jaipur-to-kota-taxi",
    },
  ],

  services: [
    {
      title: "One Way Taxi",
      desc: "Pay only for the distance travelled — no return-fare charges.",
      rateFrom: 11,
    },
    {
      title: "Round Trip",
      desc: "One driver, one car, for the whole out-and-back journey.",
      rateFrom: 10,
    },
    {
      title: "Local & Hourly",
      desc: "City running on an hourly or per-kilometre package.",
      rateFrom: 250,
      unit: "/hr",
    },
    {
      title: "Airport Transfer",
      desc: "Flight-tracked pickups so a delay never means a missed ride.",
      rateFrom: 12,
    },
  ],

  faqs: [
    {
      q: "How far in advance should I book with SS TAXY?",
      a: "You can book as little as two hours ahead for local rides. For outstation trips, especially in wedding or festival season, we suggest locking your cab 24–48 hours out so we can match you with the right vehicle.",
    },
    {
      q: "Are your fares inclusive of driver allowance and toll?",
      a: "The per-kilometre rate covers the ride itself. State toll, interstate permit, and driver night allowance (for pickups before 6 AM or drop-offs after 10 PM) are billed separately and shown upfront before you confirm.",
    },
    {
      q: "Can I switch vehicles after booking if my group size changes?",
      a: "Yes — call or WhatsApp our dispatch number and we'll adjust the booking to a bigger or smaller car, subject to availability, at no extra fee if changed at least 3 hours before pickup.",
    },
    {
      q: "Do your drivers know the temple and tourist circuits well?",
      a: "Every driver on our roster has logged a minimum number of outstation runs across Rajasthan and neighbouring states before being added to the SS TAXY fleet, so local routing and rest-stop timing come from experience, not just GPS.",
    },
    {
      q: "What's your cancellation policy?",
      a: "Free cancellation up to 2 hours before scheduled pickup. Cancellations inside that window may carry a partial charge to cover the driver's dispatch cost.",
    },
    {
      q: "How do I pay for my ride?",
      a: "Cash, UPI, or card at the end of the trip — whichever is easiest for you. Corporate accounts can also arrange monthly invoicing.",
    },
  ],

  testimonials: [
    {
      quote:
        "Booked a last-minute Jaipur to Udaipur run for a family wedding and the driver was waiting five minutes early with a clean car and cold water bottles.",
      name: "Ritika Sharma",
      city: "Jaipur",
    },
    {
      quote:
        "I travel between Jaipur and Delhi for work almost every fortnight. SS TAXY is the only service where the fare quoted on WhatsApp actually matches the final bill.",
      name: "Devendra Rathore",
      city: "Jaipur",
    },
    {
      quote:
        "Our Ajmer Sharif trip with elderly parents needed a patient driver who wouldn't rush. That's exactly what we got.",
      name: "Farah Sheikh",
      city: "Ajmer",
    },
  ],
};
