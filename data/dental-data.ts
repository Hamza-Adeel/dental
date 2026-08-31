export interface ServiceItem {
  id: string;
  slug: string;
  category: 'Preventive' | 'Cosmetic' | 'Restorative' | 'Orthodontics' | 'Pediatric' | 'Emergency' | 'Surgical';
  name: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  procedureSteps: { title: string; desc: string }[];
  whoItsFor: string[];
  symptomsReasons: string[];
  recovery: string;
  faqs: { question: string; answer: string }[];
  image: string;
  iconName: string;
  popular?: boolean;
}

export interface Dentist {
  id: string;
  slug: string;
  name: string;
  degrees: string;
  title: string;
  specialty: string;
  experienceYears: number;
  image: string;
  bio: string;
  education: string[];
  certifications: string[];
  memberships: string[];
  areasOfExpertise: string[];
  languages: string[];
  philosophy: string;
  availableDays: string[];
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'Teeth Whitening' | 'Veneers' | 'Dental Bonding' | 'Smile Makeover' | 'Dental Implants' | 'Orthodontics';
  description: string;
  treatmentDuration: string;
  dentistName: string;
  beforeImage: string;
  afterImage: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Oral Health' | 'Cosmetic Dentistry' | 'Dental Implants' | 'Children\'s Dentistry' | 'Orthodontics' | 'Preventive Care' | 'Dental Technology';
  author: {
    name: string;
    title: string;
    image: string;
  };
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Appointments' | 'Treatments' | 'Cosmetic Dentistry' | 'Dental Implants' | 'Orthodontics' | 'Pediatric Dentistry' | 'Emergency Care' | 'Payments & Insurance';
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Team' | 'Technology' | 'Treatment Rooms' | 'Smiles';
  image: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "BrightSmile Dental Clinic",
  tagline: "Healthy Smiles. Confident Lives.",
  phone: "+1 (555) 123-4567",
  emergencyPhone: "+1 (555) 911-DENT",
  email: "hello@brightsmiledental.example",
  address: "123 Smile Avenue, Suite 200, Metro City, NY 10001",
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 7:00 PM",
    saturday: "Saturday: 9:00 AM – 3:00 PM",
    sunday: "Sunday: Closed (Emergency on call)"
  },
  stats: {
    yearsOfExcellence: "15+",
    happyPatients: "25,000+",
    specialistsCount: "12",
    patientRating: "4.9/5",
    totalReviews: "1,200+"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    category: "Preventive",
    name: "General Dentistry",
    shortDesc: "Routine exams, gentle digital cleanings, cavity prevention, and comprehensive oral health maintenance.",
    fullDesc: "Our general dentistry services form the bedrock of your long-term oral well-being. Using ultra-low-radiation digital diagnostics, ultrasonic plaque removal, and patient-first comfort protocols, we identify and resolve oral health issues long before they become painful or costly complications.",
    benefits: [
      "Thorough digital diagnostic checkups & gentle ultrasonic cleanings",
      "Early detection of micro-cavities, gum inflammation, and enamel wear",
      "Personalized oral hygiene recommendations for home maintenance",
      "Comfort-first approach with soothing chairside amenities"
    ],
    procedureSteps: [
      { title: "Digital Exam & HD Imaging", desc: "High-definition intraoral scans and panoramic X-rays to assess tooth structure, root health, and jaw alignment." },
      { title: "Gentle Ultrasonic Cleaning", desc: "Painless scaling to remove hardened tartar, bio-film, and surface stains." },
      { title: "Enamel Polishing & Fluoride", desc: "Micro-abrasive smoothing followed by medical-grade fluoride application to fortify enamel." },
      { title: "Personalized Care Plan", desc: "Collaborative discussion of findings and proactive steps tailored to your smile goals." }
    ],
    whoItsFor: [
      "Adults and teens needing bi-annual preventive dental visits",
      "Patients experiencing mild tooth sensitivity or morning gum bleeding",
      "Anyone seeking a welcoming, non-judgmental dental home"
    ],
    symptomsReasons: [
      "Due for regular 6-month checkup",
      "Persistent bad breath (halitosis)",
      "Mild gum redness or bleeding when flossing",
      "Food getting caught frequently between teeth"
    ],
    recovery: "No downtime. You can immediately return to work, school, and normal activities after a routine cleaning.",
    faqs: [
      { question: "How often should I schedule a dental exam?", answer: "The American Dental Association recommends a professional exam and cleaning every 6 months for most patients, or every 3-4 months for those managing periodontal conditions." },
      { question: "Are your digital X-rays safe?", answer: "Yes. Our advanced digital sensor systems emit up to 85% less radiation than conventional film X-rays while providing instantaneous, ultra-crisp diagnostic images." }
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    iconName: "Stethoscope",
    popular: true
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    category: "Cosmetic",
    name: "Cosmetic Dentistry & Veneers",
    shortDesc: "Porcelain veneers, composite bonding, and tailor-made smile transformations for dazzling confidence.",
    fullDesc: "Cosmetic dentistry at BrightSmile merges artistry with precision biomedical engineering. Whether you want to correct minor chips, close gaps, or complete a bespoke multi-tooth porcelain veneer transformation, we craft natural, radiant smiles that harmonize with your unique facial features.",
    benefits: [
      "Hand-crafted ultra-thin porcelain veneers matching your facial symmetry",
      "Seamless composite bonding completed in a single comfortable visit",
      "Digital Smile Design allowing you to preview your outcome before treatment",
      "Stain-resistant, lifelike translucency mimicking natural tooth enamel"
    ],
    procedureSteps: [
      { title: "Smile Design Consultation", desc: "3D scanning, aesthetic photographic analysis, and collaborative digital mock-up preview." },
      { title: "Micro-Preparation", desc: "Conservative preparation preserving maximum natural tooth structure under local anesthesia." },
      { title: "Custom Fabrication", desc: "Master ceramists hand-layer high-grade lithium disilicate porcelain for optimal light refraction." },
      { title: "Precision Bonding", desc: "Permanent adhesive bonding, aesthetic polish, and occlusion check for long-lasting perfection." }
    ],
    whoItsFor: [
      "Patients with chipped, worn, uneven, or discolored teeth",
      "Individuals with unwanted gaps or mild misalignments seeking fast aesthetic correction",
      "Anyone desiring a photo-ready, confident smile makeover"
    ],
    symptomsReasons: [
      "Deep intrinsic stains that resist whitening",
      "Chipped or fractured front tooth edges",
      "Uneven tooth sizes or asymmetrical smile line"
    ],
    recovery: "Mild gum tenderness for 24-48 hours. Most patients resume all normal eating and speech immediately.",
    faqs: [
      { question: "How long do porcelain veneers last?", answer: "With routine oral hygiene and regular dental checkups, high-quality porcelain veneers typically last 15 to 20+ years." },
      { question: "Will veneers look artificial or too white?", answer: "Never. We meticulously customize shade, translucency, and surface texture to ensure your veneers look effortlessly natural and luminous." }
    ],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    iconName: "Sparkles",
    popular: true
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    category: "Restorative",
    name: "Dental Implants",
    shortDesc: "Permanent, titanium-anchored biocompatible replacements that look, feel, and function like real teeth.",
    fullDesc: "Dental implants represent the gold standard in modern tooth replacement. By replacing both the root and the crown, implants preserve jawbone density, prevent facial sagging, and restore 100% of your natural chewing power without compromising adjacent healthy teeth.",
    benefits: [
      "Permanent tooth replacement with up to 98% clinical success rate",
      "Stimulates jawbone growth and prevents premature facial aging",
      "Restores full chewing power so you can enjoy all your favorite foods",
      "No slippage, messy adhesives, or speech impediments"
    ],
    procedureSteps: [
      { title: "3D CBCT Guided Planning", desc: "3-dimensional bone density mapping to plan exact computer-guided implant placement." },
      { title: "Gentle Implant Placement", desc: "Surgical insertion of medical-grade titanium fixture under local anesthesia or sedation." },
      { title: "Osseointegration Period", desc: "A 3-4 month healing period where the implant fuses securely into the jawbone." },
      { title: "Custom Crown Placement", desc: "Attachment of a custom-shaded ceramic crown that matches your natural teeth flawlessly." }
    ],
    whoItsFor: [
      "Individuals missing one, several, or all natural teeth",
      "Patients frustrated with loose, uncomfortable removable dentures",
      "Those looking to preserve their jawbone and youthful facial structure"
    ],
    symptomsReasons: [
      "Tooth lost due to trauma, decay, or severe fracture",
      "Failing bridge or painful removable partial denture",
      "Difficulty chewing nuts, meats, or crisp vegetables"
    ],
    recovery: "2 to 3 days of mild localized soreness managed easily with over-the-counter pain relievers. Full bone integration takes 3–4 months.",
    faqs: [
      { question: "Is dental implant surgery painful?", answer: "Patients are pleasantly surprised by how comfortable the procedure is. With gentle local anesthesia and optional mild sedation, most report it feels easier than a routine tooth extraction." },
      { question: "What if I have low jawbone density?", answer: "We provide gentle bone grafting and sinus lift treatments to rebuild bone foundation before or alongside implant placement." }
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    iconName: "ShieldCheck",
    popular: true
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    category: "Orthodontics",
    name: "Orthodontics & Clear Aligners",
    shortDesc: "Discreet clear aligners and modern aesthetic braces for straighter, healthier smiles at any age.",
    fullDesc: "Straightening your teeth is not just about looks — aligned teeth are far easier to clean, prevent premature enamel wear, and alleviate TMJ jaw pain. We offer discreet clear aligners (Invisalign certified) as well as low-profile ceramic and traditional braces.",
    benefits: [
      "Virtually invisible clear aligners that can be removed for eating and brushing",
      "Digital 3D simulation showing your week-by-week smile progression",
      "Faster treatment times with modern biomechanic planning",
      "Eliminates crowded, overlapping teeth that trap plaque and bacteria"
    ],
    procedureSteps: [
      { title: "3D iTero Scan", desc: "No messy putty impressions — an instant 3D scan captures thousands of precision data points." },
      { title: "Custom Digital Plan", desc: "Orthodontist designs precise micro-movements for every individual tooth." },
      { title: "Aligner Delivery & Guidance", desc: "You receive your custom tray sets with instructions to change trays every 1-2 weeks." },
      { title: "Retention Phase", desc: "Custom retainers to keep your newly aligned smile perfectly locked in place." }
    ],
    whoItsFor: [
      "Teens and adults looking to straighten teeth discreetly without metal wires",
      "Patients with crowding, spacing gaps, overbites, underbites, or crossbites",
      "Individuals experiencing jaw fatigue due to uneven bite alignment"
    ],
    symptomsReasons: [
      "Crooked, overlapping front teeth",
      "Difficulty flossing between tightly packed teeth",
      "Relapse after childhood braces"
    ],
    recovery: "Mild pressure sensation for 24 hours after switching to a new aligner tray. Zero downtime.",
    faqs: [
      { question: "How many hours a day do I need to wear clear aligners?", answer: "For optimal results, aligners should be worn 20 to 22 hours per day, removing them only to eat, drink non-water beverages, and brush." },
      { question: "How long does clear aligner treatment take?", answer: "Typical treatments range from 6 to 14 months depending on the complexity of teeth movement." }
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    iconName: "Smile",
    popular: true
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    category: "Cosmetic",
    name: "Professional Teeth Whitening",
    shortDesc: "In-office laser whitening and custom take-home kits for a dramatically brighter smile up to 8 shades lighter.",
    fullDesc: "Over-the-counter whitening strips often cause sensitivity and uneven results. Our medical-grade in-office whitening and tailored take-home systems use advanced desensitizing agents with powerful active peroxide to lift years of coffee, tea, wine, and aging stains safely.",
    benefits: [
      "Lightens teeth up to 8 shades in a single 60-minute in-office visit",
      "Custom desensitizing formulas protect sensitive enamel and gums",
      "Even, luminous shade distribution with zero blotchiness",
      "Includes take-home maintenance kit for lasting brilliance"
    ],
    procedureSteps: [
      { title: "Shade Assessment & Polish", desc: "Measurement of starting shade and quick surface cleansing." },
      { title: "Gingival Barrier Protection", desc: "Protective medical resin applied to gums to eliminate irritation." },
      { title: "Laser-Activated Gel", desc: "Application of concentrated whitening gel activated by therapeutic cold blue light." },
      { title: "Enamel Re-mineralization", desc: "Post-treatment soothing fluoride serum to lock in color and prevent sensitivity." }
    ],
    whoItsFor: [
      "Anyone preparing for weddings, interviews, or milestone events",
      "Coffee, tea, or red wine enthusiasts with accumulated surface staining",
      "Patients seeking an instant aesthetic boost with zero downtime"
    ],
    symptomsReasons: [
      "Yellowing or dull enamel",
      "Persistent stains unresponsive to daily brushing",
      "Desire for a fresher, more youthful smile"
    ],
    recovery: "Zero downtime. We recommend adhering to a 'white diet' (avoiding dark sauces, coffee, wine) for 48 hours.",
    faqs: [
      { question: "Does professional whitening hurt?", answer: "Our advanced formula contains potassium nitrate and amorphous calcium phosphate to virtually eliminate post-treatment sensitivity." },
      { question: "How long will my whitening results last?", answer: "Results typically last 1 to 3 years depending on dietary habits and oral hygiene routine." }
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    iconName: "Sun"
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    category: "Restorative",
    name: "Root Canal Therapy",
    shortDesc: "Gentle, comfortable endodontic treatment designed to relieve severe toothache and save your natural tooth.",
    fullDesc: "Modern root canals have an unfair reputation — in reality, root canal therapy *relieves* pain rather than causing it. Using rotary endodontic instruments, 3D apex locators, and warm biocompatible seals, we remove infected pulp tissue, disinfect the canal, and preserve your natural tooth root.",
    benefits: [
      "Immediate relief from throbbing toothaches and temperature sensitivity",
      "Preserves your natural tooth, avoiding costly extraction and bone loss",
      "Virtually painless with modern profound anesthesia and rotary instruments",
      "Restores normal chewing comfort and protects surrounding bone"
    ],
    procedureSteps: [
      { title: "Targeted Anesthesia", desc: "Profound numbness ensuring 100% painless comfort throughout." },
      { title: "Canal Cleaning & Shaping", desc: "Micro-rotary instruments gently remove inflamed pulp and bacteria." },
      { title: "Antimicrobial Irrigation", desc: "Thorough ultrasonic flushing to eliminate microscopic pathogens." },
      { title: "Biocompatible Seal & Crown", desc: "Hermetic sealing with gutta-percha followed by crown placement." }
    ],
    whoItsFor: [
      "Patients experiencing spontaneous throbbing tooth pain or swelling",
      "Teeth with deep decay approaching the inner nerve chamber",
      "Teeth traumatized by sudden impact or deep fractures"
    ],
    symptomsReasons: [
      "Severe pain when biting or chewing",
      "Lingering sensitivity to hot or cold drinks",
      "Tender bump or pimple on the gum near a tooth",
      "Darkening or discoloration of an individual tooth"
    ],
    recovery: "Mild tenderness around the tooth for 2–3 days. Most patients return to work the very next morning.",
    faqs: [
      { question: "Is a root canal painful?", answer: "No. With modern anesthesia and micro-endodontic technology, receiving a root canal feels no different than getting a routine filling." },
      { question: "Why not just pull the tooth?", answer: "Saving your natural tooth is always healthier, prevents surrounding teeth from shifting, and is significantly more cost-effective than replacing it with an artificial bridge or implant." }
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    iconName: "Activity"
  },
  {
    id: "pediatric-dentistry",
    slug: "pediatric-dentistry",
    category: "Pediatric",
    name: "Pediatric Dentistry",
    shortDesc: "Gentle, fun, and fear-free dental visits designed specifically for infants, children, and teens.",
    fullDesc: "We believe positive childhood dental experiences lay the foundation for a lifetime of radiant oral health. Our pediatric team combines gentle chairside manners, tell-show-do techniques, interactive educational games, and painless preventive sealants to make every visit joyful and stress-free.",
    benefits: [
      "Warm, playful environment that eliminates dental anxiety early",
      "Cavity-preventing dental sealants and protective fluoride varnishes",
      "Early orthodontic growth monitoring to avoid complex issues later",
      "Patient, encouraging guidance on brushing and healthy snacking"
    ],
    procedureSteps: [
      { title: "Friendly Welcome & Chair Tour", desc: "Introducing the 'magic chair' and gentle water tools to build curiosity and trust." },
      { title: "Gentle Examination", desc: "Careful check of developing teeth, bite alignment, and oral tissues." },
      { title: "Flavor-Choice Cleaning", desc: "Plaque removal using kid-friendly flavored polishing pastes." },
      { title: "Sealants & Reward", desc: "Protective groove coating on molars plus a visit to our clinic treasure chest!" }
    ],
    whoItsFor: [
      "Infants getting their very first tooth (age 1 dental milestone)",
      "Toddlers, school-age kids, and teenagers",
      "Children who feel nervous or apprehensive about dental visits"
    ],
    symptomsReasons: [
      "First dental checkup milestone",
      "Teeth grinding during sleep",
      "Visible white or brown spots on baby teeth"
    ],
    recovery: "Immediate return to school and play. No restrictions.",
    faqs: [
      { question: "When should my child first see a dentist?", answer: "The American Academy of Pediatric Dentistry recommends scheduling their first visit by their first birthday or when their first tooth appears." },
      { question: "Are baby teeth really that important since they fall out?", answer: "Yes! Baby teeth hold essential space for adult teeth, assist in proper speech development, and enable healthy childhood nutrition." }
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    iconName: "Heart"
  },
  {
    id: "emergency-dentistry",
    slug: "emergency-dentistry",
    category: "Emergency",
    name: "Emergency Dental Care",
    shortDesc: "Same-day urgent dental appointments for acute toothaches, broken teeth, trauma, and swelling.",
    fullDesc: "Dental emergencies don't wait for business hours. Whether you've suffered a knocked-out tooth during sports, fractured a restoration, or are suffering from severe throbbing pain, our emergency team provides prompt pain relief and rapid restorative intervention on the very same day.",
    benefits: [
      "Guaranteed same-day triage and immediate pain relief protocols",
      "Advanced diagnostics to pinpoint acute trauma and hidden fractures",
      "Direct emergency phone line accessible for after-hours guidance",
      "Full spectrum urgent restorative, endodontic, and surgical capabilities"
    ],
    procedureSteps: [
      { title: "Immediate Triage & Pain Relief", desc: "Rapid assessment and local anesthesia or pain management within minutes." },
      { title: "Urgent HD Diagnostic Scan", desc: "High-resolution imaging to evaluate nerve involvement and root status." },
      { title: "Definitive Treatment", desc: "Same-day repair, temporary stabilization, or extraction if unavoidable." },
      { title: "Follow-up & Recovery Plan", desc: "Clear medication protocol and scheduled re-evaluation for long-term health." }
    ],
    whoItsFor: [
      "Anyone experiencing debilitating tooth or jaw pain",
      "Individuals with cracked, chipped, or completely knocked-out teeth",
      "Patients with acute gum swelling, abscesses, or loose crowns"
    ],
    symptomsReasons: [
      "Knocked-out tooth (call within 60 mins for best re-implantation chance)",
      "Severe throbbing toothache keeping you awake",
      "Swelling of the jaw, cheek, or gums",
      "Broken tooth with sharp edges cutting the tongue"
    ],
    recovery: "Depends on emergency treatment; pain relief is typically instantaneous after chairside care.",
    faqs: [
      { question: "What should I do if a tooth is completely knocked out?", answer: "Handle the tooth only by the crown (not the root). If clean, gently place it back into the socket, or store it in cold milk or saliva, and call our emergency line immediately." },
      { question: "How quickly can I be seen for an emergency?", answer: "We reserve daily emergency slots and strive to see urgent patients within hours of contact." }
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    iconName: "AlertCircle",
    popular: true
  },
  {
    id: "crowns-and-bridges",
    slug: "crowns-and-bridges",
    category: "Restorative",
    name: "Crowns & Bridges",
    shortDesc: "High-strength ceramic crowns and fixed bridges to restore cracked, weakened, or missing teeth.",
    fullDesc: "When a tooth is cracked, heavily filled, or missing altogether, custom ceramic crowns and dental bridges restore structural integrity, chewing strength, and aesthetic beauty. Using digital impression scanners and CAD/CAM zirconia ceramics, we create restorations that blend seamlessly with your smile.",
    benefits: [
      "Custom milled from ultra-durable zirconia and lithium disilicate porcelain",
      "Protects heavily restored or post-root-canal teeth from fracturing",
      "Bridges fill spans of missing teeth without removable appliances",
      "Digitally matched to your natural tooth shade and translucency"
    ],
    procedureSteps: [
      { title: "Digital 3D Optical Scan", desc: "Mess-free optical scan of the prepared tooth and surrounding bite." },
      { title: "Custom CAD Design", desc: "Restoration engineered on 3D software for micron-accurate margins." },
      { title: "Precision Ceramic Milling", desc: "Milled and glazed in our state-of-the-art restorative laboratory." },
      { title: "Permanent Bonding", desc: "High-bond resin cementation and bite adjustment for natural chewing." }
    ],
    whoItsFor: [
      "Teeth with large, broken, or deteriorating silver fillings",
      "Teeth that have undergone root canal treatment",
      "Patients missing one or two adjacent teeth needing a fixed bridge"
    ],
    symptomsReasons: [
      "Cracked tooth syndrome with pain on chewing",
      "Broken cusp on a posterior molar",
      "Gap from missing tooth causing neighboring teeth to drift"
    ],
    recovery: "Mild gum tenderness around the margin for 24-48 hours. Functional immediately.",
    faqs: [
      { question: "How long do ceramic crowns last?", answer: "Modern zirconia and porcelain crowns typically last 15 to 25+ years with good home care and routine checkups." },
      { question: "Will my crown have a dark metal line near the gumline?", answer: "No. We utilize 100% all-ceramic and zirconia materials, eliminating the unsightly dark metal margins common in older porcelain-fused-to-metal crowns." }
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    iconName: "Crown"
  },
  {
    id: "dentures",
    slug: "dentures",
    category: "Restorative",
    name: "Dentures & Implant Dentures",
    shortDesc: "Lightweight, comfortable full, partial, and implant-stabilized dentures tailored for natural speech and chewing.",
    fullDesc: "Forget outdated, loose-fitting false teeth. Our modern full, partial, and implant-supported overdentures are engineered with lightweight biocompatible resins and premium aesthetic teeth, providing secure retention, clear speech, and comfortable daily chewing.",
    benefits: [
      "Natural gum tinting and lifelike tooth anatomy for an authentic smile",
      "Option for implant-supported 'snap-in' retention for maximum security",
      "Restores facial volume, supporting lips and sunken cheeks",
      "Custom fit designed with digital mapping to eliminate painful sore spots"
    ],
    procedureSteps: [
      { title: "Anatomical Impression", desc: "Detailed mapping of jaw contours, palate, and gum ridges." },
      { title: "Bite Registration & Wax Try-in", desc: "You preview tooth shape, shade, and bite in the mouth before finalization." },
      { title: "Custom Fabrication", desc: "Engineered from high-impact polymer resin with premium denture teeth." },
      { title: "Delivery & Fine Tuning", desc: "Comfort check, pressure adjustments, and care instructions." }
    ],
    whoItsFor: [
      "Patients missing multiple or all teeth in an arch",
      "Current denture wearers suffering from slipping, clicking, or pain",
      "Patients seeking an economical, non-surgical full-arch restoration"
    ],
    symptomsReasons: [
      "Widespread tooth loss affecting diet and quality of life",
      "Ill-fitting old dentures that slip while speaking or eating",
      "Severe bone resorption making chewing uncomfortable"
    ],
    recovery: "Adjustment period of 1 to 2 weeks for speech and eating muscles to adapt.",
    faqs: [
      { question: "Can dentures be secured so they don't move?", answer: "Yes! Implant-supported overdentures snap securely onto 2 to 4 mini or standard dental implants, eliminating movement, slippage, and the need for adhesive pastes." },
      { question: "How do I care for my dentures?", answer: "Remove and rinse after eating, brush daily with a soft denture brush, and soak in a mild denture cleanser overnight." }
    ],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    iconName: "SmilePlus"
  },
  {
    id: "periodontal-treatment",
    slug: "periodontal-treatment",
    category: "Preventive",
    name: "Periodontal (Gum) Care",
    shortDesc: "Deep scaling, root planing, and laser therapy to stop gum infection and protect tooth-supporting bone.",
    fullDesc: "Gum health is the cornerstone of systemic health. Left untreated, gingivitis progresses to periodontitis, destroying the bone anchoring your teeth. Our periodontal therapies utilize gentle ultrasonic deep scaling, localized antimicrobial therapy, and soft-tissue lasers to halt disease progression.",
    benefits: [
      "Stops gum bleeding, chronic inflammation, and persistent bad breath",
      "Halts the progression of bone loss and protects teeth from loosening",
      "Minimally invasive soft-tissue laser disinfection for faster healing",
      "Promotes re-attachment of healthy gum tissue around tooth roots"
    ],
    procedureSteps: [
      { title: "Periodontal Pocket Charting", desc: "Measuring pocket depths around every tooth to map inflammation severity." },
      { title: "Ultrasonic Deep Scaling", desc: "Removal of sub-gingival calculus and bacterial colonies below the gumline." },
      { title: "Root Planing & Laser Decontamination", desc: "Smoothing root surfaces and laser sanitization to eliminate bacteria." },
      { title: "Maintenance & Monitoring", desc: "Customized 3-month supportive periodontal maintenance to prevent relapse." }
    ],
    whoItsFor: [
      "Patients diagnosed with gingivitis or periodontitis",
      "Individuals experiencing chronic bad breath, red, swollen, or receding gums",
      "Patients with systemic conditions like diabetes where gum health is critical"
    ],
    symptomsReasons: [
      "Bleeding gums when brushing or flossing",
      "Persistent foul taste or bad breath",
      "Gums pulling back, making teeth look longer",
      "Loose or shifting teeth"
    ],
    recovery: "Mild gum tenderness for 24 to 48 hours. Gums begin tightening and firming within days.",
    faqs: [
      { question: "Is deep cleaning painful?", answer: "We apply gentle topical and local anesthesia so you feel completely comfortable throughout the entire procedure." },
      { question: "Can periodontitis be cured?", answer: "While lost bone cannot easily grow back, periodontitis can be successfully halted and kept in lifelong remission with routine periodontal maintenance." }
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    iconName: "Shield"
  },
  {
    id: "wisdom-teeth",
    slug: "wisdom-teeth",
    category: "Surgical",
    name: "Wisdom Teeth Removal",
    shortDesc: "Safe, comfortable evaluation and extraction of impacted or problematic third molars.",
    fullDesc: "Third molars often become impacted, grow at awkward angles, or crowd neighboring teeth. Using 3D panoramic imaging and gentle sedation options, our oral surgery team safely extracts problematic wisdom teeth with minimal swelling and rapid recovery protocols.",
    benefits: [
      "Prevents crowding, cyst formation, and damage to adjacent molars",
      "Eliminates painful pericoronitis infections and jaw stiffness",
      "Twilight sedation and gentle anesthesia options for worry-free treatment",
      "Advanced PRF (platelet-rich fibrin) technology for accelerated healing"
    ],
    procedureSteps: [
      { title: "3D Nerve Mapping", desc: "High-resolution CBCT scan to pinpoint proximity to the mandibular nerve." },
      { title: "Comfort Sedation", desc: "Relaxing sedation ensuring you are calm and completely numb." },
      { title: "Gentle Extraction", desc: "Conservative sectioning and removal minimizing trauma to surrounding bone." },
      { title: "PRF Placement & Closure", desc: "Autologous healing membranes placed in sockets followed by dissolvable sutures." }
    ],
    whoItsFor: [
      "Teens and young adults (ages 16–25) whose wisdom teeth are erupting",
      "Patients with impacted, painful, or partially erupted third molars",
      "Individuals experiencing recurrent infections behind their back molars"
    ],
    symptomsReasons: [
      "Aching jaw pain and pressure in the back of the mouth",
      "Swollen, tender gums around emerging wisdom teeth",
      "Difficulty opening the mouth or chewing comfortably"
    ],
    recovery: "3 to 5 days of rest and soft foods. Most patients resume regular school/work within 48 to 72 hours.",
    faqs: [
      { question: "Do all wisdom teeth have to be removed?", answer: "No. If wisdom teeth are fully erupted, functional, cavity-free, and easy to clean, they can be monitored and kept." },
      { question: "What can I eat after wisdom teeth surgery?", answer: "Soft, cool foods such as smoothies (no straws!), yogurt, applesauce, mashed potatoes, and lukewarm soups for the first 3-4 days." }
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    iconName: "FileCheck"
  }
];

export const DENTISTS_DATA: Dentist[] = [
  {
    id: "dr-sarah-mitchell",
    slug: "dr-sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    degrees: "DDS, FAGD",
    title: "Lead Cosmetic & Restorative Dentist",
    specialty: "Cosmetic Dentistry & Smile Makeovers",
    experienceYears: 14,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Sarah Mitchell is a passionate cosmetic dentist dedicated to creating natural, radiant smiles. After graduating with top honors from Columbia University College of Dental Medicine, she completed advanced post-graduate training in aesthetic porcelain restorations, Digital Smile Design, and minimally invasive dentistry.",
    education: [
      "Doctor of Dental Surgery (DDS) — Columbia University College of Dental Medicine",
      "Residency in Advanced General Dentistry — New York Presbyterian Hospital",
      "Fellowship — Academy of General Dentistry (FAGD)"
    ],
    certifications: [
      "Master Clinician in Aesthetic Dentistry (gIDE / Loma Linda)",
      "Invisalign Diamond Top 1% Provider",
      "Digital Smile Design (DSD) Certified Master"
    ],
    memberships: [
      "American Academy of Cosmetic Dentistry (AACD)",
      "American Dental Association (ADA)",
      "Academy of General Dentistry (AGD)"
    ],
    areasOfExpertise: [
      "Custom Porcelain Veneers",
      "Digital Smile Design & Full Smile Rehabilitation",
      "Minimal-Prep Aesthetic Bonding",
      "Laser Gum Contouring"
    ],
    languages: ["English", "Spanish"],
    philosophy: "I believe cosmetic dentistry should never look artificial. My goal is to enhance your natural beauty with meticulous care, clinical precision, and deep empathy for how you feel every time you smile.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday"]
  },
  {
    id: "dr-marcus-vance",
    slug: "dr-marcus-vance",
    name: "Dr. Marcus Vance",
    degrees: "DMD, MS, FICOI",
    title: "Implant Specialist & Oral Surgeon",
    specialty: "Implantology & Reconstructive Surgery",
    experienceYears: 16,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Marcus Vance has placed over 5,000 successful dental implants throughout his distinguished 16-year career. Specializing in computer-guided surgical implantology, bone augmentation, and complex full-arch reconstructions, Dr. Vance brings reassuring expertise to even the most complex dental cases.",
    education: [
      "Doctor of Dental Medicine (DMD) — Harvard School of Dental Medicine",
      "Master of Science in Oral Biology (MS) — University of Pennsylvania",
      "Postdoctoral Residency in Periodontics & Implant Surgery — UPenn Dental"
    ],
    certifications: [
      "Diplomate — International Congress of Oral Implantologists (ICOI)",
      "Board Certified in Guided Surgical Reconstruction",
      "Advanced Cardiac Life Support (ACLS) & Sedation Certified"
    ],
    memberships: [
      "International Congress of Oral Implantologists (ICOI)",
      "American Academy of Implant Dentistry (AAID)",
      "American Dental Association (ADA)"
    ],
    areasOfExpertise: [
      "Computer-Guided Dental Implant Placement",
      "All-on-4 & All-on-6 Full Arch Reconstructions",
      "Bone Grafting & Sinus Lift Augmentation",
      "Complex Wisdom Teeth Extractions"
    ],
    languages: ["English", "German"],
    philosophy: "Tooth loss should never compromise your quality of life. We utilize 3D surgical navigation and gentle techniques to restore full chewing confidence seamlessly and permanently.",
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Friday"]
  },
  {
    id: "dr-elena-rodriguez",
    slug: "dr-elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    degrees: "DDS, MS (Orthodontics)",
    title: "Orthodontic Specialist",
    specialty: "Clear Aligners & Pediatric Orthodontics",
    experienceYears: 11,
    image: "https://images.unsplash.com/photo-1594824813579-408990c88319?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Elena Rodriguez specializes in modern biomechanics and clear aligner orthodontics for children, teens, and adults. Known for her gentle demeanor and clear communication, she crafts harmonious smile arcs that optimize both dental function and facial aesthetics.",
    education: [
      "Doctor of Dental Surgery (DDS) — UCLA School of Dentistry",
      "Certificate & MS in Orthodontics and Dentofacial Orthopedics — UCSF"
    ],
    certifications: [
      "Board Certified Orthodontist (ABO)",
      "Invisalign Diamond Apex Provider",
      "Sleep-Disordered Breathing Pediatric Specialist"
    ],
    memberships: [
      "American Association of Orthodontists (AAO)",
      "Pacific Coast Society of Orthodontists (PCSO)",
      "American Dental Association (ADA)"
    ],
    areasOfExpertise: [
      "Adult Clear Aligner Therapy",
      "Phase 1 & Phase 2 Interceptive Orthodontics",
      "Low-Profile Ceramic & Self-Ligating Braces",
      "Airway-Centered Orthodontics"
    ],
    languages: ["English", "Spanish", "Portuguese"],
    philosophy: "A straight smile is more than aesthetic — it protects teeth from premature wear, relieves jaw strain, and unlocks a patient's inner confidence at every age.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"]
  },
  {
    id: "dr-james-chen",
    slug: "dr-james-chen",
    name: "Dr. James Chen",
    degrees: "DDS, MS",
    title: "Endodontic & Restorative Specialist",
    specialty: "Micro-Endodontics & Gentle Root Canals",
    experienceYears: 13,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. James Chen is renowned for turning what patients fear most into a peaceful, pain-free experience. Utilizing surgical operating microscopes with 25x magnification, Dr. Chen delivers precision root canal treatments that save teeth previously thought non-restorable.",
    education: [
      "Doctor of Dental Surgery (DDS) — NYU College of Dentistry",
      "Advanced Specialty Certificate in Endodontics — NYU College of Dentistry"
    ],
    certifications: [
      "Board Certified Endodontist",
      "Microscopic Surgical Endodontics Specialist",
      "Dental Traumatology Care Certified"
    ],
    memberships: [
      "American Association of Endodontists (AAE)",
      "American Dental Association (ADA)",
      "New York State Dental Association"
    ],
    areasOfExpertise: [
      "Microscopic Root Canal Therapy",
      "Gentle Endodontic Retreatment",
      "Dental Trauma & Cracked Tooth Management",
      "Apexification & Vital Pulp Therapy"
    ],
    languages: ["English", "Mandarin"],
    philosophy: "My daily mission is to relieve pain and preserve your natural teeth using gentle care, high magnification, and uncompromising technical precision.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"]
  },
  {
    id: "dr-olivia-taylor",
    slug: "dr-olivia-taylor",
    name: "Dr. Olivia Taylor",
    degrees: "DMD, FAAPD",
    title: "Pediatric Dental Specialist",
    specialty: "Children's & Family Dentistry",
    experienceYears: 9,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Olivia Taylor brings infectious warmth and boundless patience to our pediatric department. Specially trained in behavioral guidance, child psychology, and special healthcare needs, Dr. Taylor makes dental appointments an adventure that children look forward to.",
    education: [
      "Doctor of Dental Medicine (DMD) — Tufts University School of Dental Medicine",
      "Pediatric Dental Residency — Boston Children's Hospital"
    ],
    certifications: [
      "Diplomate — American Board of Pediatric Dentistry (ABPD)",
      "Pediatric Advanced Life Support (PALS) Certified",
      "Special Needs Dental Care Specialist"
    ],
    memberships: [
      "American Academy of Pediatric Dentistry (AAPD)",
      "American Dental Association (ADA)",
      "Society for Pediatric Sedation"
    ],
    areasOfExpertise: [
      "Infant & Toddler Oral Examinations",
      "Preventive Sealants & Fluoride Varnish",
      "Tell-Show-Do Behavioral Guidance",
      "Tooth-Colored Pediatric Restorations"
    ],
    languages: ["English", "French"],
    philosophy: "Every child deserves to feel safe, heard, and celebrated at the dentist. By fostering trust today, we build healthy smile habits that last a lifetime.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Saturday"]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Full Arch Porcelain Veneers Makeover",
    category: "Smile Makeover",
    description: "Patient presented with severe enamel fluorosis, irregular incisal wear, and tooth discoloration. Dr. Mitchell designed 10 custom hand-layered lithium disilicate porcelain veneers to restore harmony and natural luminosity.",
    treatmentDuration: "2 Appointments (3 Weeks)",
    dentistName: "Dr. Sarah Mitchell",
    beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    details: ["10 Custom Hand-Crafted Veneers", "Digital Smile Design Consultation", "Minimally Invasive Tooth Prep", "Stain-Resistant Translucent Finish"]
  },
  {
    id: "case-2",
    title: "Single Front Tooth Dental Implant",
    category: "Dental Implants",
    description: "Patient lost their upper central incisor following an athletic trauma. Dr. Vance placed a computer-guided titanium implant with immediate custom healing abutment and a layered ceramic crown matching the adjacent tooth precisely.",
    treatmentDuration: "4 Months Total (Guided Surgery)",
    dentistName: "Dr. Marcus Vance",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    details: ["3D Guided Titanium Implant", "Custom Zirconia Abutment", "Exact Shade & Character Matching", "Preserved Natural Gum Contour"]
  },
  {
    id: "case-3",
    title: "1-Hour Laser Teeth Whitening",
    category: "Teeth Whitening",
    description: "Patient had deep coffee and tea stains before an upcoming wedding. In just one 60-minute in-office laser whitening session with desensitizing treatment, their smile brightened by 7 full VITA shades.",
    treatmentDuration: "60 Minutes (Single Visit)",
    dentistName: "Dr. Sarah Mitchell",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    details: ["Laser-Activated Medical Peroxide", "7 VITA Shades Lightened", "Zero Post-Op Sensitivity", "Includes Home Touch-up Kit"]
  },
  {
    id: "case-4",
    title: "Clear Aligner Crowding & Deep Bite Correction",
    category: "Orthodontics",
    description: "Adult patient struggled with severe lower anterior crowding and an excessive deep bite causing enamel attrition. Dr. Rodriguez planned a 10-month clear aligner progression to establish an ideal arch form.",
    treatmentDuration: "10 Months (24 Aligner Trays)",
    dentistName: "Dr. Elena Rodriguez",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    details: ["Invisalign Custom Aligner Trays", "No Metal Brackets or Wires", "Corrected Crowded Arch", "Custom Night Retainers"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Emily R.",
    treatment: "Dental Implant & Crown",
    rating: 5,
    date: "2 weeks ago",
    quote: "Everyone at BrightSmile made me feel completely comfortable. I was terrified of getting an implant, but Dr. Vance and his assistants explained every step gently. The procedure was virtually painless, and my new tooth looks 100% real!",
    verified: true
  },
  {
    id: "test-2",
    name: "David K.",
    treatment: "Cosmetic Porcelain Veneers",
    rating: 5,
    date: "1 month ago",
    quote: "Dr. Sarah Mitchell is a true artist! For years I covered my mouth when laughing because of chipped front teeth. Now, I smile with total confidence in every photo. The clinic feels like a modern wellness retreat.",
    verified: true
  },
  {
    id: "test-3",
    name: "Samantha M.",
    treatment: "Invisalign Clear Aligners",
    rating: 5,
    date: "1 month ago",
    quote: "Dr. Rodriguez took the time to map out every phase on 3D software so I could see my finish line before starting. Finished my aligners in just 9 months with zero discomfort. Highly recommend BrightSmile to all my coworkers.",
    verified: true
  },
  {
    id: "test-4",
    name: "Michael T.",
    treatment: "Emergency Root Canal",
    rating: 5,
    date: "2 months ago",
    quote: "I called at 8:30 AM with excruciating tooth pain and was sitting in Dr. Chen's chair by 10:00 AM. He relieved my pain within 15 minutes. The gentle microscope technique made it completely stress-free.",
    verified: true
  },
  {
    id: "test-5",
    name: "Jessica L.",
    treatment: "Pediatric Family Visit",
    rating: 5,
    date: "3 months ago",
    quote: "Finding Dr. Olivia Taylor was a blessing for our two kids. My 6-year-old was petrified of dentists, but Dr. Taylor’s warmth and the clinic’s welcoming vibe made him look forward to every cleaning visit!",
    verified: true
  },
  {
    id: "test-6",
    name: "Robert H.",
    treatment: "Preventive Cleaning & Checkup",
    rating: 5,
    date: "3 months ago",
    quote: "Punctual, spotless, and incredibly professional. The hygienist was so gentle, and having digital screens showing my dental scans helped me understand my oral health like never before.",
    verified: true
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    slug: "how-often-should-you-visit-the-dentist",
    title: "How Often Should You Really Visit the Dentist? A Modern Clinical Perspective",
    category: "Preventive Care",
    author: {
      name: "Dr. Sarah Mitchell",
      title: "Lead Cosmetic & Restorative Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
    },
    publishedAt: "August 18, 2026",
    readTime: "5 min read",
    excerpt: "While the traditional rule is twice a year, your ideal checkup schedule depends on individual risk factors, genetic markers, and periodontal health. Here is how modern dentistry personalizes preventive care.",
    content: [
      "For decades, the standard recommendation has been to see your dentist twice a year for routine examinations and cleanings. While this remains an excellent baseline for the majority of patients, modern personalized dentistry recognizes that individual oral biologies differ significantly.",
      "Patients managing gingivitis or a history of periodontal disease benefit tremendously from maintenance cleanings every 3 to 4 months. Why? Because pathogenic bacteria repopulate periodontal pockets within 90 to 120 days, and professional scaling disrupts this bio-film before bone loss occurs.",
      "Conversely, low-risk patients with robust enamel and optimal home hygiene may only need 6-month checks with annual digital imaging. During your comprehensive exam at BrightSmile, we evaluate your periodontal pocket depth, enamel density, salivary pH, and medical history to create an individualized preventive schedule.",
      "Remember: preventive checkups cost a fraction of restorative work and protect not only your teeth, but also your systemic cardiovascular and metabolic health."
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    tags: ["Preventive", "Oral Hygiene", "Checkups", "Wellness"]
  },
  {
    id: "blog-2",
    slug: "5-signs-you-may-need-a-dental-checkup",
    title: "5 Subtle Signs You Need a Dental Checkup (Before Pain Starts)",
    category: "Oral Health",
    author: {
      name: "Dr. Marcus Vance",
      title: "Implant Specialist & Oral Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
    },
    publishedAt: "July 29, 2026",
    readTime: "4 min read",
    excerpt: "Dental issues rarely cause pain in their earliest stages. Learn the 5 subtle early-warning signs that indicate you should schedule a visit with your dentist right away.",
    content: [
      "One of the biggest misconceptions in healthcare is: 'If my teeth don't hurt, everything is fine.' In truth, tooth enamel contains no nerves; pain only begins when decay or infection breaches deep into the dentin or pulp chamber.",
      "1. Pink in the Sink: Any bleeding when brushing or flossing is an active sign of gingival inflammation. Healthy gums never bleed under normal pressure.",
      "2. Sudden Temperature Sensitivity: If your morning coffee or iced water triggers a sharp twinge, it often signals micro-cracks, receding gums, or early enamel demineralization.",
      "3. Persistent Dry Mouth or Morning Bad Breath: Saliva is your mouth's natural buffer against acid. Chronic dryness accelerates cavity formation exponentially.",
      "4. Jaw Stiffness or Morning Headaches: Clenching or grinding teeth during sleep (bruxism) wears down chewing surfaces and places stress on the temporomandibular joint (TMJ).",
      "5. Food Constantly Catching in One Spot: A new 'food trap' usually indicates an opening contact between teeth caused by shifting or an interproximal cavity."
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    tags: ["Symptoms", "Early Detection", "Sensitivity", "Gum Health"]
  },
  {
    id: "blog-3",
    slug: "what-to-expect-during-a-dental-implant-consultation",
    title: "What to Expect During a Modern Dental Implant Consultation",
    category: "Dental Implants",
    author: {
      name: "Dr. Marcus Vance",
      title: "Implant Specialist & Oral Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
    },
    publishedAt: "July 12, 2026",
    readTime: "6 min read",
    excerpt: "Thinking about replacing a missing tooth with an implant? Discover the 3D diagnostics, bone density scans, and computer-guided planning involved in your initial consultation.",
    content: [
      "Choosing a dental implant is one of the best investments you can make in your lifelong oral function. But what actually happens when you step in for your initial implant consultation?",
      "Step 1: 3D Cone Beam CT Scanning. Unlike standard 2D flat X-rays, our in-house CBCT scanner captures a millimeter-precise 3-dimensional volume of your jawbone, nerve pathways, and sinus cavities in under 20 seconds with negligible radiation.",
      "Step 2: Bone Density & Candidacy Evaluation. Dr. Vance reviews the 3D model with you on high-definition chairside displays, explaining your exact bone height, width, and whether gentle bone grafting will optimize long-term support.",
      "Step 3: Virtual Surgical Simulation. Using advanced CAD software, we virtually seat the implant into your 3D anatomy, selecting the ideal depth and angulation before any clinical procedure begins.",
      "Step 4: Transparent Cost & Financing Breakdown. Our patient coordinator provides a clear, comprehensive treatment schedule including all insurance benefits and flexible monthly financing options."
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    tags: ["Implants", "3D Imaging", "Oral Surgery", "Consultation"]
  },
  {
    id: "blog-4",
    slug: "professional-vs-at-home-teeth-whitening",
    title: "Professional vs. Over-the-Counter Teeth Whitening: What Really Works?",
    category: "Cosmetic Dentistry",
    author: {
      name: "Dr. Sarah Mitchell",
      title: "Lead Cosmetic & Restorative Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
    },
    publishedAt: "June 25, 2026",
    readTime: "5 min read",
    excerpt: "Unpacking the chemistry behind whitening strips, charcoal powders, and medical-grade in-office laser whitening so you can protect your enamel and get stunning results.",
    content: [
      "The supermarket aisle is flooded with whitening toothpastes, charcoal scrubs, and LED strip kits. But do they actually deliver on their promises — and more importantly, are they safe for your enamel?",
      "Over-the-counter whitening strips utilize a low concentration of hydrogen peroxide (typically 3%–10%). While they can lift superficial stains over weeks of use, their generic rectangular shape often causes uneven whitening near the gumline and significant soft-tissue irritation.",
      "Abrasive 'whitening' toothpastes and charcoal powders do not bleach teeth at all; rather, their high RDA (Relative Dentin Abrasivity) physically scours surface enamel. Over time, this wears down translucent outer enamel, exposing the naturally yellow dentin underneath and making teeth look *darker*.",
      "In-office professional whitening at BrightSmile utilizes medical-grade 38% hydrogen peroxide combined with specialized light wavelengths and desensitizing potassium nitrate. We protect your gums with a cured resin barrier, ensuring maximum stain oxidation with zero gum burning and up to 8 shades of lightening in a single hour."
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    tags: ["Whitening", "Cosmetic", "Enamel Health", "Dental Care"]
  },
  {
    id: "blog-5",
    slug: "how-to-help-your-child-build-healthy-dental-habits",
    title: "How to Help Your Child Build Lifelong Dental Habits (Without the Battle)",
    category: "Children's Dentistry",
    author: {
      name: "Dr. Olivia Taylor",
      title: "Pediatric Dental Specialist",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
    },
    publishedAt: "June 08, 2026",
    readTime: "4 min read",
    excerpt: "Turn bedtime tooth-brushing tantrums into a fun routine with practical advice from a board-certified pediatric dentist.",
    content: [
      "Getting children to brush for a full two minutes twice a day can feel like a nightly marathon. However, early positive habits prevent childhood cavities, the single most common chronic disease among school-aged children.",
      "Tip 1: The 'Two-Minute Dance Party'. Play their favorite upbeat song and brush along with them. Visual timers and toothbrushing apps with character rewards turn brushing from a chore into a game.",
      "Tip 2: Empower Their Choices. Let your child choose their own soft-bristled toothbrush (featuring their favorite superhero or animal) and their preferred kid-safe fluoride flavor (strawberry, bubblegum, or mild mint).",
      "Tip 3: The 'Tell-Show-Do' Method. First explain what you are going to do, demonstrate gently on their stuffed animal or your own teeth, and then gently brush their teeth.",
      "Tip 4: Keep First Dental Visits Stress-Free. Never use the dentist as a threat ('If you eat candy, the dentist will drill your teeth'). Frame the dental clinic as a fun, positive place where friendly tooth experts help their smile shine!"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    tags: ["Kids Dental", "Pediatric", "Parenting", "Brushing"]
  },
  {
    id: "blog-6",
    slug: "clear-aligners-vs-traditional-braces",
    title: "Clear Aligners vs. Traditional Braces: Which is Right for You?",
    category: "Orthodontics",
    author: {
      name: "Dr. Elena Rodriguez",
      title: "Orthodontic Specialist",
      image: "https://images.unsplash.com/photo-1594824813579-408990c88319?auto=format&fit=crop&w=400&q=80"
    },
    publishedAt: "May 20, 2026",
    readTime: "5 min read",
    excerpt: "Comparing aesthetics, treatment time, comfort, dietary freedom, and clinical effectiveness to help you choose the best orthodontic path.",
    content: [
      "Modern orthodontic technology has transformed how we align teeth. Today, adults and teens have great choices between virtually invisible clear aligners and sleek, low-profile ceramic or metal braces.",
      "Clear Aligners: Best for patients seeking discretion and flexibility. Aligners are removable, meaning zero dietary restrictions (you can eat popcorn, apples, and nuts) and simple brushing and flossing. They require discipline, as they must be worn for 22 hours per day.",
      "Modern Braces: Best for complex skeletal discrepancies, severe tooth rotations, or patients who prefer a 'set-it-and-forget-it' system without having to remember to wear trays. Today's brackets are 40% smaller and far more comfortable than older designs.",
      "During an orthodontic consultation at BrightSmile, we scan your smile with 3D digital imaging to show you simulated outcomes for both options, helping you pick the treatment that fits your lifestyle."
    ],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    tags: ["Invisalign", "Braces", "Orthodontics", "Smile Design"]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Do you accept new patients?",
    answer: "Yes, we are enthusiastically accepting new patients of all ages! Whether you need a comprehensive first checkup, a second opinion on treatment, or urgent care, we make onboarding seamless with online digital registration."
  },
  {
    id: "faq-2",
    category: "General",
    question: "How often should I visit the dentist?",
    answer: "Most adults and children should visit every 6 months for a routine preventive exam and professional cleaning. Patients managing periodontal conditions or high cavity risk may be advised to visit every 3–4 months."
  },
  {
    id: "faq-3",
    category: "Appointments",
    question: "How long does a standard dental cleaning and exam take?",
    answer: "A standard comprehensive appointment typically takes 50 to 60 minutes. This includes digital intraoral imaging, periodontal measurement, gentle ultrasonic scaling, polishing, and a one-on-one examination with your dentist."
  },
  {
    id: "faq-4",
    category: "Emergency Care",
    question: "Do you offer emergency dental appointments?",
    answer: "Yes. We reserve dedicated emergency time slots every single day. If you are experiencing severe toothache, a knocked-out tooth, trauma, or swelling, call our clinic at +1 (555) 123-4567 for same-day triage."
  },
  {
    id: "faq-5",
    category: "Payments & Insurance",
    question: "Do you accept dental insurance?",
    answer: "Yes, we work with the vast majority of PPO dental insurance plans. Our front-desk insurance specialists verify your coverage before your visit, process all claims on your behalf, and maximize your yearly benefits."
  },
  {
    id: "faq-6",
    category: "Payments & Insurance",
    question: "Do you offer payment plans or financing for major procedures?",
    answer: "Absolutely. We offer 0% APR interest-free flexible monthly financing through CareCredit, Sunbit, and Proceed Finance. We also offer an in-house BrightSmile Wellness Membership plan for patients without dental insurance."
  },
  {
    id: "faq-7",
    category: "Dental Implants",
    question: "How much do dental implants cost, and how long do they last?",
    answer: "Implant costs vary depending on bone structure and whether grafting is required. Because implants fuse directly into your jawbone, they can last a lifetime with proper hygiene, making them the most cost-effective long-term tooth replacement solution."
  },
  {
    id: "faq-8",
    category: "Cosmetic Dentistry",
    question: "Will porcelain veneers look natural or overly white?",
    answer: "Our veneers are custom hand-crafted by master ceramists using layered porcelain that replicates the natural translucency, light reflection, and subtle nuances of real tooth enamel. Your results will look bright, healthy, and completely natural."
  },
  {
    id: "faq-9",
    category: "Orthodontics",
    question: "Am I too old for clear aligners or orthodontics?",
    answer: "You are never too old! More than 35% of our orthodontic patients are adults. As long as your gums and bone are healthy, teeth can be safely and effectively moved at any age."
  },
  {
    id: "faq-10",
    category: "Pediatric Dentistry",
    question: "At what age should my child have their first dental visit?",
    answer: "We recommend scheduling their first visit by their first birthday or when their first tooth emerges. Early visits establish positive, fear-free memories and allow us to monitor healthy jaw development."
  },
  {
    id: "faq-11",
    category: "Emergency Care",
    question: "What should I do if a permanent tooth gets knocked out?",
    answer: "Pick up the tooth by the top crown ONLY (do not touch or scrape the root). If clean, try to gently seat it back into the socket. If not possible, place it in a cup of cold milk or the patient's saliva and call our emergency line immediately within 60 minutes."
  },
  {
    id: "faq-12",
    category: "Treatments",
    question: "Are root canals painful with modern technology?",
    answer: "No. With modern profound local anesthesia, rotary endodontic instruments, and computer apex locators, having a root canal is no more uncomfortable than getting a routine dental filling."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Reception Lounge",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    description: "Serene, boutique-hotel inspired reception area with complimentary refreshments and soothing ambiance."
  },
  {
    id: "gal-2",
    title: "Ergonomic Treatment Suite",
    category: "Treatment Rooms",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    description: "Spacious private operatory equipped with memory-foam dental chair, overhead streaming entertainment, and filtered airflow."
  },
  {
    id: "gal-3",
    title: "3D Cone Beam CT & Digital Scanning",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    description: "Ultra-low dose 3D volumetric CBCT diagnostic scanner and iTero 5D digital optical scanner."
  },
  {
    id: "gal-4",
    title: "Clinical Team Collaboration",
    category: "Team",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
    description: "Our multidisciplinary dental specialists reviewing digital treatment plans together."
  },
  {
    id: "gal-5",
    title: "Hospital-Grade Sterilization Center",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    description: "Transparent autoclave sterilization suite adhering to strict CDC and OSHA hospital protocols."
  },
  {
    id: "gal-6",
    title: "Radiant Smile Transformation",
    category: "Smiles",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    description: "Natural aesthetic porcelain veneer transformation finished for our patient."
  },
  {
    id: "gal-7",
    title: "Comfort Consultation Suite",
    category: "Treatment Rooms",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    description: "Dedicated private consultation room for reviewing 3D treatment plans and financing options."
  },
  {
    id: "gal-8",
    title: "Pediatric-Friendly Treatment Area",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    description: "Warm, gentle operatory designed to make children feel at ease from their very first visit."
  }
];
