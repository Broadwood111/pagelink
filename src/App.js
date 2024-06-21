import React, { useState } from 'react';
import './App.css';

const partners = [
  {
    name: 'AWS',
    logo: 'path_to_aws_logo', // Replace with actual path to AWS logo
    info: 'AWS and IGEL work together to provide secure, reliable cloud solutions for hybrid work environments.',
  },
  {
    name: 'Citrix',
    logo: 'path_to_citrix_logo', // Replace with actual path to Citrix logo
    info: 'Citrix and IGEL deliver a seamless workspace experience on any device, enhancing productivity and security.',
  },
  {
    name: 'Microsoft',
    logo: 'https://media.discordapp.net/attachments/1208516686383161425/1253806472081576067/Azure-Logo-No-Background.png?ex=667731c5&is=6675e045&hm=047a22030cd8dcb8f92e5bc427f38493fbed97ceb1b8fea7bd9318c34d1f47db&=&format=webp&quality=lossless&width=624&height=468', // Replace with actual path to Microsoft logo
    info: 'Microsoft and IGEL collaborate to offer robust SaaS and VDI solutions for modern workspaces.',
  },
  {
    name: 'VMware',
    logo: 'path_to_vmware_logo', // Replace with actual path to VMware logo
    info: 'VMware and IGEL ensure optimal performance and management of digital workspaces.',
  },
];

const PartnerInfo = ({ info }) => (
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border border-gray-300 rounded shadow-lg">
    <p>{info}</p>
  </div>
);

const App = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400">
      <h2 className="mb-8 text-3xl font-bold">One Secure Endpoint OS – Any Cloud Workspace</h2>
      <div className="flex space-x-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredPartner(index)}
            onMouseLeave={() => setHoveredPartner(null)}
          >
            <img src={partner.logo} alt={partner.name} className="h-16 mb-2" />
            {hoveredPartner === index && <PartnerInfo info={partner.info} />}
          </div>
        ))}
      </div>
      <p className="mt-8 text-center">
        IGEL OS and VDI, DaaS, and SaaS solutions deliver a seamless workspace on any device, built to support the ways people connect, communicate and collaborate in hybrid work.
      </p>
    </div>
  );
};

export default App;
