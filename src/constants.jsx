import service1 from './assets/residential.png'
import service2 from './assets/commercial.png'
import service3 from './assets/emergency.png'
import service4 from './assets/construction.png'
import { FaRegLightbulb, FaBolt, FaClock, FaCalendar, FaNewspaper } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";

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

