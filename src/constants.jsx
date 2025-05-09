import service1 from './assets/residential.png'
import service2 from './assets/commercial.png'
import service3 from './assets/emergency.png'
import service4 from './assets/construction.png'
import { FaRegLightbulb, FaBolt, FaClock, FaCalendar, FaNewspaper } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";
import image1 from './assets/400Amps ATS Panel with Manual Change over.jpg';
import image2 from './assets/800Amps Distribution Panel for a Recycling Factory.jpg';
import image3 from './assets/1000KvA Gas Generator 1.jpg';
import image4 from './assets/1000KvA Gas Generator 2.jpg';
import image5 from './assets/1000KvA Gas Generator 3.jpg';
import image6 from './assets/ATS Panel with PHCN Meter.jpg';
import image7 from './assets/Automation Circulation Pump Panel 2.jpg';
import image8 from './assets/Automation Circulation Pump Panel.jpg';
import image9 from './assets/Building Project in Progress.jpg';
import image10 from './assets/CEO at Work 2.jpg';
import image11 from './assets/CEO at Work.jpg';
import image12 from './assets/CEO at work(1).jpg';
import image14 from './assets/Change over Panel in Process.jpg';
import image15 from './assets/Change over Panel with 2Generator and PHCN for 30 units Building.jpg';
import image16 from './assets/Change over Panel with Mommas PHCN Meter.jpg';
import image17 from './assets/Change over Panel with Outgoing breaker.jpg';
import image18 from './assets/Constructed Cubicles.jpg';
import image20 from './assets/Distribution Panel.jpg';
import image25 from './assets/Lightings Project 2.jpg';
import image26 from './assets/Lightings Project 3.jpg';
import image27 from './assets/Men at work 2.jpg';
import image28 from './assets/Men at work 3.jpg';
import image29 from './assets/Men at work 4.jpg';
import image31 from './assets/Over and Under Industrial AC Panel.jpg';
import image32 from './assets/Pump Panel and ATS Panel.jpg';
import image33 from './assets/Reclying Panel.jpg';
import image34 from './assets/Recycling Factory.jpg';


export const contactItems = {
  phoneNumber:'08023118750',
  email: 'info@gfm.co'
}


export const servicesData = [
    {
      "img": "./sets.jpg",
      "icon": service1,
      "title": "Residential Electrical Services",
      "description": "Reliable electrical repairs, upgrades, and smart home solutions to keep your home safe and efficient."
    },
    {
      "img": "./panel2.jpg",
      "icon": service2,
      "title": "Commercial Electrical Services",
      "description": "Comprehensive electrical services for businesses, including wiring, lighting, and maintenance."
    },
    {
      "img": "./solar.jpg",
      "icon": service3,
      "title": "Emergency Electrical Services",
      "description": "24/7 emergency electrical repairs to restore power and resolve critical issues quickly and safely."
    },
    {
        "img": "./res.jpg",
        "icon": service4,
        "title": "New Construction & Renovations",
        "description": "Complete electrical installations for new builds and renovations, ensuring safety and efficiency."
    },

]

export const qualitiesData = {
  left: [
    {
      "icon": <FaRegLightbulb />,
      "title": "Top Professionals",
      "description": "Highly skilled electricians with expertise, certifications, and a commitment to quality service."
    },
    {
      "icon": <FaClock />,
      "title": "24/7 Available",
      "description": "Round-the-clock availability ensures you get help whenever you need it, day or night."
    },
    {
      "icon": <MdEmergency />,
      "title": "Emergency Center",
      "description": "Dedicated emergency services to quickly address urgent electrical issues and restore safety."
    },
  ],

  right:[
    {
      "icon": <FaBolt />,
      "title": "Fast and Reliable",
      "description": "Prompt and dependable service that gets the job done right the first time, every time."
    },
    {
      "icon": <FaCalendar />,
      "title": "Free Schedules",
      "description": "Convenient, flexible scheduling with free estimates to fit your needs without the hassle."
    },
    {
      "icon": <FaNewspaper />,
      "title": "Positive Reviews",
      "description": "Highly rated by satisfied customers, reflecting a reputation built on trust and excellent service."
    }
  ]

}

export const testimonialData = [
  {
    "name": "Sarah Thompson",
    "service": "Emergency Electrical Repair",
    "description": "I had a sudden power outage late at night, and their team arrived within 30 minutes. They quickly identified the issue and had everything back up and running in no time. The professionalism and quick response were impressive!"
  },
  {
    "name": "John Martinez",
    "service": "Residential Lighting Installation",
    "description": "The team installed new indoor and outdoor lighting in our home, and we couldn’t be happier with the results. They provided excellent advice on energy-efficient options, and their work was clean and precise. Highly recommended!"
  },
  {
    "name": "Emily Ross",
    "service": "Electrical Panel Upgrade",
    "description": "Upgrading our old electrical panel was stress-free thanks to their expertise. They explained everything clearly, and the work was done efficiently with minimal disruption. We feel much safer now with our updated system."
  }
]

export const projects = [
  { src: image1, alt: '400Amps ATS Panel with Manual Change over' },
  { src: image2, alt: '800Amps Distribution Panel for a Recycling Factory' },
  { src: image3, alt: '1000Kva Gas Generator 1' },
  { src: image4, alt: '1000Kva Gas Generator 2' },
  { src: image5, alt: '1000Kva Gas Generator 3' },
  { src: image6, alt: 'ATS Panel with PHCN Meter' },
  { src: image7, alt: 'Automation Circulation Pump Panel 2' },
  { src: image8, alt: 'Automation Circulation Pump Panel' },
  { src: image9, alt: 'Building Project in Progress' },
  { src: image10, alt: 'CEO at Work' },
  { src: image11, alt: 'CEO at Work' },
  { src: image12, alt: 'CEO at work' },
  { src: image14, alt: 'Change over Panel in Process' },
  { src: image15, alt: 'Change over Panel with 2Generator and PHCN for 30 units Building' },
  { src: image16, alt: 'Change over Panel with Mommas PHCN Meter' },
  { src: image17, alt: 'Change over Panel with Outgoing breaker' },
  { src: image18, alt: 'Constructed Cubicles' },
  { src: image20, alt: 'Distribution Panel' },
  { src: image25, alt: 'Lightings Project 2' },
  { src: image26, alt: 'Lightings Project 3' },
  { src: image27, alt: 'Men at work' },
  { src: image28, alt: 'Men at work' },
  { src: image29, alt: 'Men at work' },
  { src: image31, alt: 'Over and Under Industrial AC Panel' },
  { src: image32, alt: 'Pump Panel and ATS Panel' },
  { src: image33, alt: 'Recycling Panel' },
  { src: image34, alt: 'Recycling Factory' },
];

