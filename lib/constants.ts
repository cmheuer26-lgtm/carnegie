export const RESTAURANT = {
  name: "Carnegie's A Place To Eat",
  shortName: "Carnegie's",
  tagline: "Where History Meets Hospitality",
  phone: "(317) 462-8480",
  phoneRaw: "+13174628480",
  email: "info@carnegiesaplacetoeat.com",
  address: {
    street: "100 W North Street",
    city: "Greenfield",
    state: "IN",
    zip: "46140",
    full: "100 W North Street, Greenfield, IN 46140",
  },
  coordinates: { lat: 39.7856, lng: -85.7694 },
  reservationUrl: "https://www.opentable.com/r/carnegies-indianapolis",
  social: {
    facebook: "https://www.facebook.com/p/Carnegies-Restaurant-100063455833617/",
    instagram: "https://www.instagram.com/eatatcarnegies/",
  },
  hours: [
    { day: "Monday", hours: "Closed", open: false },
    { day: "Tuesday", hours: "11:00 AM – 9:00 PM", open: true },
    { day: "Wednesday", hours: "11:00 AM – 9:00 PM", open: true },
    { day: "Thursday", hours: "11:00 AM – 9:00 PM", open: true },
    { day: "Friday", hours: "11:00 AM – 10:00 PM", open: true },
    { day: "Saturday", hours: "11:00 AM – 10:00 PM", open: true },
    { day: "Sunday", hours: "Closed", open: false },
  ],
  cuisine: ["New American", "Steaks", "Pasta", "Seafood", "Craft Cocktails"],
  priceRange: "$$$",
  established: "1999",
  newOwnership: "October 2025",
  owner: "Jake Burgess / Burgess Restaurant Group",
  building: "Historic Greenfield Carnegie Library",
  description:
    "Set inside Greenfield's historic Carnegie Library, Carnegie's offers a timeless dining experience where history meets modern hospitality.",
} as const;

export const HERO_SLIDES = [
  {
    eyebrow: "Greenfield, Indiana · Est. 1999",
    heading: "A Place\nTo Eat",
    subheading: "Where History Meets Hospitality",
    body: "Set inside the historic Carnegie Library, Carnegie's is where elegant dining and warm Indiana hospitality have called the same home for over 25 years.",
    cta: { label: "Reserve a Table", href: "https://www.opentable.com/r/carnegies-indianapolis", external: true },
    ctaSecondary: { label: "View Menu", href: "/menu" },
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80",
  },
  {
    eyebrow: "New American Cuisine",
    heading: "Craft &\nPassion",
    subheading: "Steaks · Pasta · Seafood",
    body: "Chef Justin's seasonal menu celebrates bold flavors — from hand-cut steaks and house-made pastas to fresh seafood and wood-fired bread baked daily.",
    cta: { label: "Explore the Menu", href: "/menu" },
    ctaSecondary: { label: "Our Story", href: "/about" },
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=1920&auto=format&fit=crop&q=80",
  },
  {
    eyebrow: "Private Dining · Events",
    heading: "Celebrate\nHere",
    subheading: "Intimate Private Dining Upstairs",
    body: "Our historic upstairs library space accommodates intimate gatherings and special celebrations — rehearsal dinners, milestone birthdays, business dinners.",
    cta: { label: "Inquire About Events", href: "/private-events" },
    ctaSecondary: { label: "Make a Reservation", href: "https://www.opentable.com/r/carnegies-indianapolis", external: true },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=80",
  },
];

export const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Drinks", href: "/drinks" },
  { label: "Private Events", href: "/private-events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const REVIEWS = [
  {
    text: "Brilliant repurposing of the old Greenfield library gives it a unique look and vibe. Cocktails, salads and entrees were all amazing.",
    author: "OpenTable Guest",
    source: "OpenTable",
  },
  {
    text: "CARNEGIES WAS AWESOME!! Tammy, our server, was top notch. Justin the chef, was excellent. Absolutely amazing.",
    author: "OpenTable Guest",
    source: "OpenTable",
  },
  {
    text: "The 14oz Filet was fantastic, yet only $36. Great food, Great value, Great service.",
    author: "OpenTable Guest",
    source: "OpenTable",
  },
  {
    text: "Outstanding as always! Great service, excellent menu choices beautifully prepared and tasty. Chef visits each table... nice touch!",
    author: "TripAdvisor Traveler",
    source: "TripAdvisor",
  },
];

export const MENU_SECTIONS = [
  {
    title: "Starters",
    items: [
      { name: "Baked Brie", description: "Warm brie with seasonal jam, candied walnuts, crostini", price: "$14" },
      { name: "Shrimp Cocktail", description: "Chilled jumbo shrimp, house cocktail sauce, lemon", price: "$16" },
      { name: "Charcuterie Board", description: "Chef's selection of cured meats, artisan cheeses, accompaniments", price: "$18" },
      { name: "Calamari", description: "Lightly fried, banana peppers, marinara, lemon aioli", price: "$13" },
    ],
  },
  {
    title: "Soups & Salads",
    items: [
      { name: "Cream of Roasted Red Bell Pepper", description: "A Carnegie's signature — velvety roasted pepper soup, crème fraîche", price: "$9" },
      { name: "French Onion", description: "Classic preparation, gruyère crouton", price: "$9" },
      { name: "Carnegie's House Salad", description: "Mixed greens, tomato, cucumber, red onion, house vinaigrette", price: "$10" },
      { name: "Wedge Salad", description: "Iceberg, blue cheese, bacon lardons, cherry tomatoes, chives", price: "$12" },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Lobster Ravioli", description: "Lobster-stuffed pasta, saffron cream sauce, chives", price: "$28" },
      { name: "Pappardelle Bolognese", description: "Slow-braised beef & pork ragù, Parmigiano, fresh herbs", price: "$24" },
      { name: "Shrimp Scampi", description: "Linguine, white wine, garlic butter, lemon, parsley", price: "$26" },
      { name: "Fettuccine Alfredo", description: "House Alfredo sauce, Parmigiano-Reggiano — add chicken or shrimp", price: "$22" },
    ],
  },
  {
    title: "Steaks & Entrées",
    items: [
      { name: "14oz Bone-In Ribeye", description: "Hand-cut, wood-fired finish, compound butter, roasted potatoes", price: "$48" },
      { name: "Beef Tenderloin Medallions", description: "A Carnegie's classic — two 4oz medallions, béarnaise, asparagus", price: "$42" },
      { name: "14oz Filet Mignon", description: "Center-cut filet, garlic mashed, seasonal vegetables", price: "$36" },
      { name: "Half Roasted Chicken", description: "Herb-brined, pan jus, roasted root vegetables", price: "$26" },
    ],
  },
  {
    title: "Seafood",
    items: [
      { name: "Pan-Seared Salmon", description: "Atlantic salmon, lemon caper butter, wild rice, broccolini", price: "$28" },
      { name: "Grilled Sea Bass", description: "Chilean sea bass, white wine reduction, roasted fingerlings", price: "$34" },
      { name: "Shrimp & Grits", description: "Gulf shrimp, stone-ground grits, andouille, tomato cream", price: "$26" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Crème Brûlée", description: "A Carnegie's tradition — classic vanilla custard, torched sugar crust", price: "$9" },
      { name: "Chocolate Lava Cake", description: "Warm chocolate cake, molten center, vanilla bean ice cream", price: "$10" },
      { name: "Seasonal Cheesecake", description: "Ask your server for today's selection", price: "$9" },
    ],
  },
];

export const DRINKS_MENU = [
  {
    title: "Craft Cocktails",
    items: [
      { name: "Library Old Fashioned", description: "Bourbon, Demerara, Angostura & orange bitters, expressed orange", price: "$13" },
      { name: "Carnegie Clover Club", description: "Gin, lemon, raspberry shrub, egg white, rose", price: "$13" },
      { name: "Greenfield Mule", description: "Local vodka, ginger beer, lime, cucumber", price: "$11" },
      { name: "Velvet Reading Room", description: "Dark rum, Kahlúa, espresso, vanilla cream", price: "$12" },
    ],
  },
  {
    title: "Wine",
    items: [
      { name: "Whispering Angel Rosé", description: "Provence, France", price: "$15 / $54" },
      { name: "Meiomi Pinot Noir", description: "California", price: "$13 / $46" },
      { name: "Rombauer Chardonnay", description: "Napa Valley, California", price: "$17 / $62" },
      { name: "Caymus Cabernet Sauvignon", description: "Napa Valley, California", price: "$22 / $80" },
    ],
  },
  {
    title: "Beer",
    items: [
      { name: "Sun King Sunlight Cream Ale", description: "Indianapolis, IN — Draft", price: "$6" },
      { name: "Taxman Qualified", description: "Fortville, IN — Draft", price: "$6" },
      { name: "Bud Light / Miller Lite", description: "Domestic — Bottle", price: "$4" },
      { name: "Seasonal Craft", description: "Ask your server for today's selection", price: "$7" },
    ],
  },
];
