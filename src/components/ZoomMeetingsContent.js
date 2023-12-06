import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaUser } from 'react-icons/fa';

const ZoomMeetingContent = ({ title, meetings, onView, onEdit, onDelete }) => {
  const [selected, setSelected] = useState(true);

  
  return (
    <div
    >
      
 <div className={`section ${selected ? 'selected' : ''} `} >
      {title}
      {selected && (
        <div className="table-container mt-3">
          <table className="table table-full-width tabing-table">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Meeting ID</th>
                <th>Host</th>
                <th>Project</th>
                <th>Topic</th>
                <th>Timezone</th>
                <th>Time</th>
                <th>Join</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{meeting.id}</td>
                  <td>{meeting.host}</td>
                  <td>{meeting.project}</td>
                  <td>{meeting.topic}</td>
                  <td>{meeting.timezone}</td>
                  <td>{meeting.time}</td>
                  <td className='join'>
                  <span role="button" className="text-success" title="Join">📹</span>
                  </td>
                  <td className="action-icons">
                    <span onClick={() => onView(index)} role="button" className="text-primary">👁️</span>
                    <span onClick={() => onEdit(index)} role="button" className="text-warning">✏️</span>
                    <span onClick={() => onDelete(index)} role="button" className="text-danger">🗑️</span>
              
                  
                  </td>
                  
                </tr>      
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
      </div>
   
  );
};

const ZoomMeetingsContent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const upcomingMeetings = [
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
  ];

  const previousMeetings = [
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
  ];

  const personalMeetings = [
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
    { id: 1, MeetingId: 97377485449, host: 'Maxxmann podjinn', project: 'Hindustan Farm Direct-Hindustan Farm Direct', topic: 'test', timezone: 'Asia/Calcutta', time: '12:00 PM' },
  ];

  const handleView = (index) => {
    console.log(`View Meeting ${index}`);
  };

  const handleEdit = (index) => {
    console.log(`Edit Meeting ${index}`);
  };

  const handleDelete = (index) => {
    console.log(`Delete Meeting ${index}`);
  };

  return (
    <div className="container">
        <div style={{ background: 'black', padding: '10px', textAlign: 'left', width: '200px' }}>
      <FaUser style={{ color: 'white', fontSize: '18px', marginRight: '5px' }} />
      <span style={{ color: 'white', fontSize: '18px' }}>Zoom Meetngs</span>
    </div>
      <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
        <TabList>
          <Tab>Upcoming Meetings</Tab>
          <Tab>Previous Meetings</Tab>
          <Tab>Personal Meetings</Tab>
        </TabList>

        <TabPanel>
          {selectedTab === 0 && (
            <ZoomMeetingContent meetings={upcomingMeetings} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </TabPanel>
        <TabPanel>
          {selectedTab === 1 && (
            <ZoomMeetingContent meetings={previousMeetings} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </TabPanel>
        <TabPanel>
          {selectedTab === 2 && (
            <ZoomMeetingContent meetings={personalMeetings} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ZoomMeetingsContent;
