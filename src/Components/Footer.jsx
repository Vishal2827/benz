import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Up',
      items: [
        'Popular Models',
        'Electric Cars',
        'SUV',
        'Cabriolets & Roadsters',
        'Coupé',
        'Plug-in Hybrid',
      ],
    },
    {
      title: 'Buy a Vehicle',
      items: [
        'Find a new car',
        'Configure your car',
        'All brochures',
        'Model overview',
        'Corporate Program',
      ],
    },
    {
      title: 'Shopping Guide',
      items: [
        'Book a test drive',
        'Nearest Showroom',
        'Finance',
        'Mercedes-Benz Collection',
      ],
    },
    {
      title: 'Owners',
      items: [
        'Book a service appointment',
        'Owner\'s Manuals',
        'Service warranty terms and conditions',
        'Grievance Redressal Mechanism',
        'FAQ',
      ],
    },
    {
      title: 'Technology',
      items: [
        'Electric mobility',
        'About Mercedes me',
        'Connect services',
      ],
    },
    {
      title: 'Discover Mercedes',
      items: [
        'Contact',
        'Secretarial Compliance Disclosure',
        'Press Release',
        'Careers',
        'Privacy',
        'Fair Practice Code',
        'Corporate Governance Policy (MBFS)',
        'Ombudsman Scheme for NBFS',
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Mercedes-Benz | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
