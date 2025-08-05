import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'Jun \'25 — Present',
      title: 'Event Staff App',
      description: [
        '<h3>SOFTWARE ENGINEERING INTERN</h3>',
        'Accelerated feature delivery by 33% through collaborative development with the Founder, engineering, and QA teams, utilizing GitHub, Docker, and Kubernetes, enhancing microservices deployment.',
        'Spearheaded upgrade of CodeIgniter framework, resolving 10+ known bugs and paving the way for the adoption of modern PHP features, which boosted developer productivity across the engineering department.',
        'Tested and secured a new Laravel API backend with Sanctum for token-based authentication, enabling businesses to programmatically access event data with permission checks, pagination, and CRUD capabilities for event records, enhancing software development and technology integration.'
      ],
      expanded: false,
    },
    {
      date: 'Sep \'24 — Jan \'25',
      title: 'META | Psychology & Brain Sciences Lab',
      description: [
        '<h3>APPLICATION DEVELOPER INTERN</h3>',
        'Enhanced an iOS app using Flutter and Firebase by addressing bugs, improving UI/UX, and implementing scalable solutions, while optimizing backend performance with Node.js and React to support increased user load in a collaborative environment.',
        'Integrated cloud-native architecture principles for seamless scalability and performance, making it adaptable for various environments. Participated in collaborative engineering discussions to ensure alignment with cloud-native architecture and Kubernetes deployment strategies.'
      ],
      expanded: false,
    },
    {
      date: 'Jun \'24 — Sep \'24',
      title: 'Worley Engineering',
      description: [
        '<h3>SIMULATION DATA ENGINEERING INTERN</h3>',
        'Assembled interactive digital twin interfaces on Microsoft Azure using Cognite and AVEVA, which visualized real-time IoT sensor data integrated with high-resolution 3D models, accelerating anomaly detection by 15% using cloud-native architecture and promoting environmental awareness.',
        'Deployed machine learning models leveraging data fusion techniques via PostgreSQL and RPA tools (Python, C#), fortifying critical system monitoring and elevating asset uptime by 5%, showcasing strong problem-solving and debugging skills in a collaborative environment.',
        'Orchestrated a safety protocol testing framework within Azure, leveraging digital twins to simulate 500+ scenarios, pinpointing vulnerabilities and refining emergency response strategies, thus minimizing potential accident severity and promoting innovation among engineers.'
      ],
      expanded: false,
    },
    {
      date: '09/2024 - 01-2025',
      title: 'HAL | Human-AI Integration Lab',
      description: [
        'Developed a <b>Virtual Reality</b> Fencing training system using <b>Unity Hub</b>, <b>Meta Quest 3</b>, and <b>C#</b>, integrating Unity\'s physics engine, animation rigging, and <b>machine learning models</b> for motion analysis with real-time feedback. Utilized data visualization to display performance metrics, enhancing the system\'s capability for precise user interaction and evaluation.'
      ],
      expanded: false,
    },
    {
      date: '06/2024 - 09/2024',
      title: 'WORLEY ENGINEERING',
      description: [
        'Collaborated with SMEs and senior managers to analyze <b>Digital Twin</b>, <b>IoT</b>, and <b>AR/VR</b> solutions, leveraging tools like <b>AVEVA</b> and <b>Cognite</b> to optimize project delivery. Additionally, solved complex problem by exploring data centric solution to drive innovation & excellence.',
        'Independently developed predictive maintenance strategies using <b>Python</b>, <b>C#</b>, and <b>Azure</b>, integrating real-time data from IoT sensors and high-resolution <b>3D models</b> to enhance asset monitoring and improve operational efficiency.',
        'Delivered a detailed report proposing innovative <b>cloud-based solutions</b> and integrating <b>CI/CD pipelines</b> for safety protocols and workflow automation, showcasing measurable improvements in system uptime, risk management, and personnel readiness by leveraging <b>Scrum frameworks</b> to coordinate predictive maintenance tasks, ensuring timely deliverables.'
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
