import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Joseph",
  lastName: "Gatobu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Engineer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Swahili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JosephGato",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/joseph muriuki/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "joseph.g.muriuki@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Engineer and Developer</>,
  subline: (
    <>
      I'm Full-Stack Engineer specializing in software development and design, where I craft intuitive
      user experiences.  <br /> After hours, I Coach and train in Web and Design Development.
      <div style={{ marginTop: "1rem" }}>
      <a
        href="https://drive.google.com/file/d/1ObwQU9wFGO0UIEdGNMFxcFFZGmMMpCLs/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-new from-middle animated"
      >
        Download CV
      </a>
    </div>

    <div style={{ marginTop: "1rem" }}>
      <a
        href="https://wa.me/254715232153?text=TuLink%20Whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "24px", height: "24px" }}
        />
        TuLink Whatsapp
      </a>
    </div>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       I am a Creative Technologist with a strong background in Information Technology, Software Development, 
       and Graphic Design.
       I am focused on developing web applications and building scalable IT infrastructures that enhance user 
       experiences and business efficiency. My work extends beyond coding—I bring aesthetic precision 
       and functional design into every project, ensuring that both form and function align perfectly.
       Beyond my professional endeavors, I am passionate about mentorship, teaching, 
       and empowering others in the tech space. My goal is to make an impact through education, innovation, 
       and transformative digital solutions. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LITALA PROPERTIES LTD",
        timeframe: "2023 - Present",
        role: "Full-Stack Senior Design Engineer and Graphic Designer",
        achievements: [
          <>
            Redesigned the UI/UX for the organisations platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling clients to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MAJI MAZURI SCHOOL OF ICT",
        timeframe: "2018 - 2022",
        role: "Trainer in Web Development and Graphic Design",
        achievements: [
          <>
            I have successfully trained and mentored aspiring developers and designers in Web Development 
            and Graphic Design, equipping them with the skills to build functional, visually appealing, 
            and user-friendly digital products. 
          </>,
          <>
            My approach focuses on hands-on learning, industry best practices, 
            and real-world applications, ensuring my trainees gain both technical proficiency 
            and creative problem-solving abilities.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE & tECHNOLOGY",
        description: <>Studied Bsc.Information Technology.</>,
      },
      {
        name: "MERU NATIONAL POLYTECHNIC",
        description: <>Studied Diploma in Software Programming and Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Adobe Package",
        description: <>Able to work on all Adobe Packages with blend of creativity.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
