import React, { Component } from 'react'
import './tourguide.css';


const tourguider=[
  {
    id: 1,
    img: '',
    name: 'kemiso',
    Email: 'kemiso@gmail.com',
    languageSkill: 'amharic',
    description: 'The admin page of a tour guide website typically includes various features and functionalities tailored for the website administrator to manage the content, users, bookings, and other aspects of the site. Heres a general overview of what you might find on an admin page for a tour guide website'
  },
  {
    id: 2,
    img: '',
    name: 'kemiso',
    Email: 'kemiso@gmail.com',
    languageSkill: 'amharic',
    description: 'The admin page of a tour guide website typically includes various features and functionalities tailored for the website administrator to manage the content, users, bookings, and other aspects of the site. Here a general overview of what you might find on an admin page for a tour guide website:'
  },
  {
    id: 3,
    img: '',
    name: 'kemiso',
    Email: 'kemiso@gmail.com',
    languageSkill: 'amharic',
    description: 'The admin page of a tour guide website typically includes various features and functionalities tailored for the website administrator to manage the content, users, bookings, and other aspects of the site. Here a general overview of what you might find on an admin page for a tour guide website:'
  },
  {
    id: 4,
    img: '',
    name: 'kemiso',
    Email: 'kemiso@gmail.com',
    languageSkill: 'amharic',
    description: 'The admin page of a tour guide website typically includes various features and functionalities tailored for the website administrator to manage the content, users, bookings, and other aspects of the site. Here a general overview of what you might find on an admin page for a tour guide website:'
  },
  {
    id: 5,
    img: '',
    name: 'kemiso',
    Email: 'kemiso@gmail.com',
    languageSkill: 'amharic',
    description: 'The admin page of a tour guide website typically includes various features and functionalities tailored for the website administrator to manage the content, users, bookings, and other aspects of the site. Here a general overview of what you might find on an admin page for a tour guide website:'
  },
  {
    id: 6,
    img: '',
    name: 'kemiso',
    Email: 'kemiso@gmail.com',
    languageSkill: 'amharic',
    description: 'The admin page of a tour guide website typically includes various features and functionalities tailored for the website administrator to manage the content, users, bookings, and other aspects of the site. Here a general overview of what you might find on an admin page for a tour guide website:'
  }
]

class TourGuider extends Component {
  render() {
    return (
      <div>
            <div className='addtourguider'>
                  <h1>Tour Guider Information</h1>
                  <h2><a href="/addtourguider">+ Add</a></h2>
             </div>

          <div className="tourguidecontainer">
            
            {tourguider.map(guide => (
              <div key={guide.id} className="profilecard">
                <img src={guide.img} alt={`Profile of ${guide.name}`} className="profileimg"/>
                <div className="profile-info">
                  <h3>{guide.name}</h3>
                  <p><strong>Email:</strong> {guide.Email}</p>
                  <p><strong>Language Skills:</strong> {guide.languageSkill}</p>
                  <p><strong>Description:</strong>{guide.description}</p>
                </div>
                <div className='butn'>
                    <button className='btn btn-primary'>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            ))}
            
          </div>
          
      </div>
    )
  }
}
export default TourGuider
