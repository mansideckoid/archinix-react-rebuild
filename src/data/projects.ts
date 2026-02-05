import serviceKitchen from '@/assets/service-kitchen.jpg';
import serviceKitchen2 from '@/assets/service-kitchen-2.jpg';
import serviceClosets from '@/assets/service-closets.jpg';
import serviceCloset from '@/assets/service-closet.jpg';
import serviceVanity from '@/assets/service-vanity.jpg';
import serviceVanity2 from '@/assets/service-vanity-2.jpg';
import servicePanelling from '@/assets/service-panelling.jpg';
import servicePanelling2 from '@/assets/service-panelling-2.jpg';
import serviceRenovation from '@/assets/service-renovation.jpg';
import serviceRenovation2 from '@/assets/service-renovation-2.jpg';
import serviceMedia from '@/assets/service-media.jpg';
import serviceMedia2 from '@/assets/service-media-2.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const categories = ['All', 'Kitchens', 'Closets', 'Vanities', 'Panelling', 'Renovation', 'Media Units'];

export const projects: Project[] = [
  {
    id: 'palm-jumeirah-villa',
    title: 'The Palm Jumeirah Villa',
    category: 'Renovation',
    location: 'Dubai, UAE',
    year: '2024',
    image: serviceRenovation,
    galleryImages: [serviceRenovation, serviceRenovation2],
    shortDescription: 'Complete interior fit-out for a luxury villa featuring custom woodwork throughout.',
    fullDescription: 'This stunning Palm Jumeirah villa received a complete interior transformation. Working closely with the homeowners, we designed and executed a full fit-out that included custom cabinetry, bespoke furniture, and premium finishes throughout all living spaces.',
    challenge: 'The clients wanted a cohesive design that connected all living spaces while maintaining distinct personalities for each room. The existing layout required significant modifications to maximize sea views.',
    solution: 'We developed a unified design language using consistent materials and finishes while introducing unique elements in each space. Custom millwork and strategic wall removals opened up the living areas to the stunning views.',
    features: [
      'Full interior renovation',
      'Custom kitchen with island',
      'Master suite with walk-in closet',
      'Entertainment room with media wall',
      'Home office with built-in library',
      'Guest bedroom fit-outs',
    ],
    testimonial: {
      quote: 'Dana Woodworks transformed our villa beyond our expectations. The attention to detail and quality of craftsmanship is exceptional.',
      author: 'Ahmed Al Maktoum',
      role: 'Homeowner',
    },
  },
  {
    id: 'emirates-hills-kitchen',
    title: 'Emirates Hills Kitchen',
    category: 'Kitchens',
    location: 'Dubai, UAE',
    year: '2024',
    image: serviceKitchen,
    galleryImages: [serviceKitchen, serviceKitchen2],
    shortDescription: 'Modern luxury kitchen with integrated Siemens appliances and premium finishes.',
    fullDescription: 'This Emirates Hills kitchen project showcases our expertise in creating functional luxury. The open-plan kitchen features a large island, premium Siemens appliances, and custom cabinetry with a stunning matte lacquer finish.',
    challenge: 'Creating a kitchen that serves both everyday family meals and large-scale entertaining while maintaining a clean, uncluttered aesthetic.',
    solution: 'We designed extensive hidden storage, a butler\'s pantry, and a secondary prep kitchen. The main kitchen remains pristine with integrated appliances and streamlined surfaces.',
    features: [
      'Custom matte lacquer cabinetry',
      'Calacatta marble countertops',
      'Integrated Siemens appliances',
      '4-meter custom island',
      'Hidden butler\'s pantry',
      'LED under-cabinet lighting',
    ],
    testimonial: {
      quote: 'Our new kitchen is not just beautiful, it\'s incredibly functional. Every detail was thought through.',
      author: 'Sarah Johnson',
      role: 'Homeowner',
    },
  },
  {
    id: 'al-raha-gardens-closet',
    title: 'Al Raha Gardens Closet',
    category: 'Closets',
    location: 'Abu Dhabi, UAE',
    year: '2023',
    image: serviceClosets,
    galleryImages: [serviceClosets, serviceCloset],
    shortDescription: 'Bespoke walk-in closet system with custom lighting and organization solutions.',
    fullDescription: 'This walk-in closet for an Abu Dhabi villa was designed to provide luxurious organization for an extensive wardrobe. The space features custom shelving, specialized storage for accessories, and integrated lighting that highlights the curated collection.',
    challenge: 'Organizing an extensive collection of clothing, shoes, bags, and accessories while creating a boutique-like experience.',
    solution: 'We created dedicated zones for different categories, with custom inserts for jewelry, watches, and accessories. Integrated lighting ensures every item is beautifully displayed.',
    features: [
      'Custom wardrobe systems',
      'Shoe wall display',
      'Jewelry drawer inserts',
      'Island with seating',
      'LED display lighting',
      'Full-length mirrors',
    ],
  },
  {
    id: 'jumeirah-beach-residence',
    title: 'Jumeirah Beach Residence',
    category: 'Panelling',
    location: 'Dubai, UAE',
    year: '2023',
    image: servicePanelling,
    galleryImages: [servicePanelling, servicePanelling2],
    shortDescription: 'Architectural wall panelling creating a sophisticated living environment.',
    fullDescription: 'This JBR apartment received a complete living room transformation through custom wall panelling. The geometric patterns add architectural interest while the integrated lighting creates drama and warmth.',
    challenge: 'The apartment had plain walls and lacked architectural character. The clients wanted to add sophistication without major construction.',
    solution: 'Custom-designed panelling in a contemporary geometric pattern was installed throughout the living and dining areas. Integrated LED channels highlight the pattern and create ambient lighting.',
    features: [
      'Geometric panel design',
      'Integrated LED lighting',
      'Acoustic improvement',
      'Feature wall with TV integration',
      'Matching dining area panelling',
      'Hidden storage integration',
    ],
  },
  {
    id: 'downtown-dubai-penthouse',
    title: 'Downtown Dubai Penthouse',
    category: 'Vanities',
    location: 'Dubai, UAE',
    year: '2024',
    image: serviceVanity,
    galleryImages: [serviceVanity, serviceVanity2],
    shortDescription: 'Custom bathroom vanities with premium marble and integrated lighting.',
    fullDescription: 'The master bathroom of this Downtown Dubai penthouse features custom vanities that combine functionality with five-star luxury. Premium materials and meticulous craftsmanship create a spa-like retreat.',
    challenge: 'Creating vanities that provide ample storage for two users while maintaining an open, luxurious aesthetic in a marble-clad bathroom.',
    solution: 'Floating vanities with deep drawers and internal organizers provide hidden storage. The marble tops seamlessly integrate with the wall cladding for a cohesive look.',
    features: [
      'His and hers floating vanities',
      'Integrated marble tops',
      'LED mirror lighting',
      'Soft-close drawers',
      'Waterfall edge detail',
      'Premium hardware',
    ],
  },
  {
    id: 'al-barsha-entertainment-room',
    title: 'Al Barsha Entertainment Room',
    category: 'Media Units',
    location: 'Dubai, UAE',
    year: '2023',
    image: serviceMedia,
    galleryImages: [serviceMedia, serviceMedia2],
    shortDescription: 'Custom media wall with hidden storage and integrated sound system.',
    fullDescription: 'This entertainment room features a floor-to-ceiling media wall designed to house a large TV, sound system, and extensive media collection. The design hides all technology while creating a stunning focal point.',
    challenge: 'Integrating multiple gaming consoles, streaming devices, and a premium sound system while maintaining a clean, minimalist aesthetic.',
    solution: 'The custom unit features hidden ventilated compartments, cable management systems, and acoustically transparent speaker covers. All equipment is accessible but invisible.',
    features: [
      '85" TV integration',
      'Hidden sound bar',
      'Gaming console storage',
      'Media library shelving',
      'Ambient LED lighting',
      'Remote-controlled panels',
    ],
  },
  {
    id: 'arabian-ranches-kitchen',
    title: 'Arabian Ranches Kitchen',
    category: 'Kitchens',
    location: 'Dubai, UAE',
    year: '2024',
    image: serviceKitchen,
    galleryImages: [serviceKitchen, serviceKitchen2],
    shortDescription: 'Family kitchen with island seating and smart storage solutions.',
    fullDescription: 'This family home in Arabian Ranches required a kitchen that could handle busy family life while maintaining a sophisticated aesthetic. The result is a warm, welcoming space perfect for cooking and gathering.',
    challenge: 'Creating a family-friendly kitchen that provides ample space for cooking, homework, and casual dining while withstanding daily use.',
    solution: 'Durable materials, smart storage solutions, and a large island with seating create a functional family hub. The layout keeps the cooking zone efficient while providing gathering space.',
    features: [
      'Large family island with seating',
      'Durable quartz countertops',
      'Pull-out pantry systems',
      'Integrated breakfast bar',
      'Child-friendly storage',
      'Seamless appliance integration',
    ],
  },
  {
    id: 'yas-island-master-closet',
    title: 'Yas Island Master Closet',
    category: 'Closets',
    location: 'Abu Dhabi, UAE',
    year: '2024',
    image: serviceClosets,
    galleryImages: [serviceClosets, serviceCloset],
    shortDescription: 'His and hers walk-in closets with custom jewelry and accessory displays.',
    fullDescription: 'This master suite features separate his and hers walk-in closets connected by a shared dressing island. Each space is customized to the owner\'s specific wardrobe and organization preferences.',
    challenge: 'Designing two distinct closet systems that feel cohesive while addressing very different storage needs and personal styles.',
    solution: 'We used matching materials and finishes with completely different internal configurations. His side features more drawer storage and trouser racks, while hers has extensive shoe and handbag display.',
    features: [
      'Separate his and hers zones',
      'Shared center island',
      'Custom jewelry drawers',
      'Handbag display shelves',
      'Watch winder integration',
      'LED-lit shoe displays',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
};
