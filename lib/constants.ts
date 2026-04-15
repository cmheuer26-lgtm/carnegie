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
    title: "Prelude",
    subtitle: "Appetizers",
    items: [
      { name: "Shrimp Scampi", description: "Calabrian chile butter, baguette, lemon", price: "$18" },
      { name: "Focaccia Plate", description: "Roasted garlic, marinated tomatoes, balsamic, herb butter", price: "$9" },
      { name: "Spinach Dip", description: "Roasted tomatoes, garlic, baguette", price: "$14" },
      { name: "New York Strip Wrapped Asparagus", description: "Asparagus, sliced New York Strip, chili-soy garlic glaze", price: "$16" },
      { name: "Stuffed Mushrooms", description: "Italian sausage, fontina, asiago, parmesan, breadcrumbs", price: "$16" },
      { name: "Ian's Filet Tips", description: "Carnegie's marinade, demi glace, roasted tomatoes, gorgonzola fondue, baguette", price: "$21" },
    ],
  },
  {
    title: "Interlude",
    subtitle: "Soup & Salad",
    items: [
      { name: "House Salad", description: "Romaine, iceberg, heirloom, egg, cheddar, crouton crumble, choice dressing", price: "$6" },
      { name: "Wedge Salad", description: "Heirloom, Bonge's bleu cheese, bacon, crouton crumble, bleu cheese crumble", price: "$12" },
      { name: "French Onion Soup", description: "Crostini, provolone", price: "$9" },
      { name: "Roasted Red Pepper Bisque", description: "Chef Ian's classic recipe, just the way you remember it", price: "$8" },
    ],
  },
  {
    title: "Main Characters",
    subtitle: "Entrées",
    items: [
      { name: "Smothered Chicken Breast", description: "Fontina, asiago, provolone, mashed potatoes, green beans, Sauce Supreme", price: "$28" },
      { name: "Steakhouse Meatloaf", description: "Tomato glaze, demi glace, mashed potatoes, green beans", price: "$36" },
      { name: "Lobster & Shrimp Carbonara", description: "Fettucine, fresh lobster & shrimp, house bacon, marinated tomatoes, Calabrian chiles, lemon, white wine, fennel, fresh herbs", price: "$42" },
      { name: "Grilled Salmon", description: "Sautéed mushrooms, grilled zucchini, orange sauce, Mom's rice", price: "$38" },
      { name: "Pork Parmesan", description: "Bonge's famous, spaghetti al limone, basil", price: "$26" },
      { name: "Carne-Gie Burger", description: "(2) 4oz. Wagyu patties, house bacon, provolone, comeback sauce, sesame seed bun, cacio e pepe roasted potatoes", price: "$20" },
      { name: "Involtini", description: "Vegetarian lasagna — fresh pasta, grilled zucchini, spinach, piperade, ricotta, pistachio pesto, pomodoro, provolone, basil", price: "$20" },
    ],
  },
  {
    title: "Protagonists",
    subtitle: "Hand-Cut Steaks",
    items: [
      { name: "Hand-Cut Filets", description: "Mashed potatoes, asparagus", price: "7oz $46 · 10oz $64 · The Eddie $86" },
      { name: "14oz Hand-Cut New York Strip", description: "Mashed potatoes, asparagus", price: "$42" },
      { name: "8oz Lamb New York Strip", description: "Pistachio pesto, demi glace, mashed potatoes, asparagus", price: "$40" },
    ],
  },
  {
    title: "Plot Twists",
    subtitle: "Enhancements",
    items: [
      { name: "Gorgonzola Fondue", description: "", price: "$5" },
      { name: "Roasted Tomatoes", description: "", price: "$5" },
      { name: "Shrimp Scampi", description: "", price: "$9" },
      { name: "Creamy Horseradish", description: "", price: "$3" },
    ],
  },
  {
    title: "Supporting Characters",
    subtitle: "Sides",
    items: [
      { name: "Creamed Spinach", description: "Asiago, parmesan, breadcrumbs", price: "$7" },
      { name: "Sautéed Mushrooms", description: "Herb butter", price: "$7" },
      { name: "Lobster Mac & Cheese", description: "Fresh lobster, penne pasta, mornay, breadcrumbs", price: "$21" },
      { name: "Classic Mac & Cheese", description: "Penne pasta, mornay, breadcrumbs", price: "$12" },
      { name: "Grilled Asparagus", description: "", price: "$4" },
      { name: "Mashed Potatoes", description: "", price: "$4" },
      { name: "Red Pepper Risotto", description: "", price: "$9" },
      { name: "Cacio e Pepe Potatoes", description: "Black pepper, parmesan cream", price: "$8" },
      { name: "Pasta", description: "Butter, parmesan", price: "$5" },
      { name: "Green Beans", description: "", price: "$4" },
    ],
  },
  {
    title: "Finale",
    subtitle: "Desserts",
    items: [
      { name: "Crème Brûlée", description: "", price: "$10" },
      { name: "Pistachio Cheesecake", description: "Caramel, whipped cream", price: "$12" },
      { name: "Chocolate Ganache", description: "Fresh fruit, coulis, whipped cream", price: "$10" },
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
