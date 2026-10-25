export function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thusala Piyarisi",
    url: "https://thusala.me",
    email: "thusalapi@gmail.com",
    jobTitle: "Full-Stack Developer & Problem Solver",
    description:
      "Full-Stack Developer specializing in modern web development, microservices architecture, and scalable solutions.",
    image: "https://thusala.me/profile.png",
    location: {
      "@type": "Place",
      name: "Sri Lanka",
    },
    sameAs: [
      "https://github.com/thusalapi",
      "https://www.linkedin.com/in/thusalapiyarisi",
      "https://twitter.com/thusalapov",
      "https://stackoverflow.com/users/23903279/thusala-piyarisi",
      "https://medium.com/@thusalapi",
      "https://ieeexplore.ieee.org/author/801414121539297",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Rootcode",
      url: "https://rootcode.io",
    },
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Node.js",
      "Microservices",
      "Web Development",
      "MongoDB",
      "MySQL",
      "Docker",
      "JavaScript",
      "TypeScript",
      "Spring Boot",
      "Java",
      "Three.js",
      "AWS",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Degree",
        name: "Software Engineering",
        issuedBy: {
          "@type": "EducationalOrganization",
          name: "SLIIT",
        },
      },
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thusala Piyarisi - Full-Stack Developer",
    url: "https://thusala.me",
    description:
      "Full-Stack Developer specializing in modern web development, microservices architecture, and scalable solutions.",
    author: {
      "@type": "Person",
      name: "Thusala Piyarisi",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
