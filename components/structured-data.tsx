export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Thusala Piyarisi',
    url: 'https://thusalapi.dev',
    email: 'thusalapi@gmail.com',
    jobTitle: 'Full-Stack Developer & Problem Solver',
    description:
      'Full-Stack Developer specializing in modern web development, microservices architecture, and scalable solutions.',
    image: 'https://thusalapi.dev/avatar.png',
    location: {
      '@type': 'Place',
      name: 'Sri Lanka',
    },
    sameAs: [
      'https://github.com/thusalapi',
      'https://www.linkedin.com/in/thusalapiyarisi',
      'https://twitter.com/thusalapov',
      'https://stackoverflow.com/users/23903279/thusala-piyarisi',
      'https://medium.com/@thusalapi',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Rootcode',
      url: 'https://rootcode.io',
    },
    knowsAbout: [
      'Full-Stack Development',
      'React',
      'Node.js',
      'Microservices',
      'Web Development',
      'MongoDB',
      'MySQL',
      'Docker',
      'JavaScript',
      'TypeScript',
      'Spring Boot',
      'Java',
      'Three.js',
      'IoT',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Degree',
        name: 'Software Engineering',
        issuedBy: {
          '@type': 'EducationalOrganization',
          name: 'SLIIT',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
