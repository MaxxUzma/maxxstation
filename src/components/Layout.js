
import React, { useState } from 'react';
import { Layout, Input, Badge, Avatar, Tooltip, Menu } from 'antd'; 
import { TbUsersPlus } from "react-icons/tb";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  BarcodeOutlined,
  BellOutlined,
  MessageOutlined,
  DashboardOutlined,
  AppstoreAddOutlined,
  ScheduleOutlined,
  FileTextOutlined,
  CameraOutlined,
  ClockCircleOutlined,
  SettingOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {  Typography, Statistic, Row, Col, Space,Card } from 'antd';
import {
  UserAddOutlined,
  PlusOutlined,
  UserOutlined
} from '@ant-design/icons';
import "../styles/custom.css"

import CardRow from './DashboardContent';
import DashboardContent from './DashboardContent';
import TaskManagementContent from './TaskManagementContent';
import CreateUserContent from './CreateUserContent';
import UserListContent from './UserListContent';
import TodoContent from './TodoContent';
import CreateProjectContent from './CreateProjectContent';
import TaskListingContent from './TaskListingContent';
import ServicesContent from './ServicesContent';
import SpecificServicesContent from './SpecificServicesContent';
import ProjectLogsContent from './ProjectLogsContent';
import TimeLogsContent from './TimeLogsContent';
import MessagesContent from './MessagesContent';
import ChatsContent from './ChatsContent';
import ZoomMeetingsContent from './ZoomMeetingsContent';
import TaskLogsContent from './TaskLogsContent';
import ManualLogContent from './ManualLogContent';
import ChatLogContent from './ChatLogContent';
import ZoomLogContent from './ZoomLogContent';
import GooglemeetLogContent from './GooglemeetLogContent';
import ScreenshotTimelog from './ScreenshotTimelog';
import TrackerSettings from './TrackerSettings';
import UserSettings from './UserSettings';
import EditUserPage from './EditUser';

const { Header, Sider,Content } = Layout;
const { Title, Text } = Typography;


const AntDesignLayout = ({ children }) => {
  const cardWidth = 500; 
  const cardMargin = 16; 
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showResourceSubMenu, setShowResourceSubMenu] = useState(false);
  const[showTaskManagementMenu,setShowTaskManagementMenu] = useState(false);
  const[showReportsMenu,setShowReportsMenu] = useState(false);
 const[showCommunicationCenter,setShowCommunicationCenter] = useState(false);
 const[showSettings,setShowSettings] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };
  const handleResourceClick = () => {
    setShowResourceSubMenu(!showResourceSubMenu);
  };
  const handleTaskManagement = ()=>{
    setShowTaskManagementMenu(!showTaskManagementMenu)
  }
  const handleReports = ()=>{
    setShowReportsMenu(!showReportsMenu)
  }
  const handleCommunication = ()=>{
    setShowCommunicationCenter(!showCommunicationCenter)
  }
  const handleSettings = ()=>{
    setShowSettings(!showSettings)
  }
  
  const sidebarWidth = collapsed ? 80 : 350;

  
  return (

    <Router>
 <Layout style={{ minHeight: '100vh', flexWrap: 'wrap', alignItems: 'flex-start', alignContent: 'flex-start' }}>
      <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: 'flex',
            backgroundColor:"white"
          }}
        >
          <div
            style={{
              background: 'black',
              height:"68px",
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: `${sidebarWidth}px`,
            }}
          >
            <img
              src="https://maxxstations.com/img/maxxstation_logowhite.png"
              alt="MaxxStation Logo"
              style={{ width: collapsed ? '80px' : '150px' }}
            />
          </div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'grey',
              height: "65px",
    width: "1569px"
            }}
          >
          
            {showSearchInput ? (
              <Input
                prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Search"
                style={{ marginRight: '16px' }}
              />
            ) : (
              <Tooltip title="Search">
                <SearchOutlined
                  style={{
                    marginLeft: "56px",
                    fontSize: "18px",
                    color: "white",
                    marginRight: "38px",
                    cursor: "pointer"
                  }}
                  onClick={handleSearchIconClick}
                />
              </Tooltip>
            )}
            
            <Tooltip title="Scanner">
              <BarcodeOutlined style={{ fontSize: '18px', color: 'white', marginRight: '1280px' }} />
            </Tooltip>
        
            <Badge dot>
              <BellOutlined style={{ fontSize: '18px', color: 'white', marginRight: '16px' }} />
            </Badge>
        
            <Badge count={5}>
              <MessageOutlined style={{ fontSize: '18px', color: 'white', marginRight: '16px' }} />
            </Badge>
                <Avatar src="https://example.com/user-profile.jpg" style={{ marginLeft: '16px' }} />
          </div>
        </Header>

      <Sider
        width={350}
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 1,
          background: '#404E67',
          marginTop: '64px',
        }}
      >
        
        <Menu
          mode="vertical"
          defaultSelectedKeys={['dashboard']}
          style={{
            background: '#404E67',
            color: 'white',
            textAlign: 'left', 
          }}
        >
          <Menu.Item key="dashboard" icon={<DashboardOutlined style={{ fontSize: '20px' }} />}>
            <Link to="/dashboard">   Dashboard</Link>
         
             
              <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
            </Menu.Item>
            <Menu.Item
              key="resource"
              icon={<AppstoreAddOutlined />}
              onClick={handleResourceClick}
            >
             Resource Management
              
             <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
            </Menu.Item>
            {showResourceSubMenu && (
              <>
                <Menu.Item key="createUser" icon={<UserOutlined />}>
                  <Link to="/resourcemanagement/createuser">Create User</Link>
                </Menu.Item>
                <Menu.Item key="userList" icon={<UserOutlined />}>
                  <Link to="/resourcemanagement/userlist">User List</Link>
                </Menu.Item>
              </>
            )}
          <Menu.Item key="task" icon={<ScheduleOutlined style={{ fontSize: '20px' }} />} onClick={handleTaskManagement}>
          <Link to="/taskmanagement">   Task Management</Link>
            <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
          </Menu.Item>
          {showTaskManagementMenu && (
              <>
                <Menu.Item key="todo" >
                  <Link to="/taskmanagement/todo">To do</Link>
                </Menu.Item>
                <Menu.Item key="create project" >
                  <Link to="/taskmanagement/createproject">Create Project</Link>
                </Menu.Item>
                <Menu.Item key="tasklisting" >
                  <Link to="/taskmanagement/tasklisting">Task Listing</Link>
                </Menu.Item>
                <Menu.Item key="services" >
                  <Link to="/taskmanagement/services">Services</Link>
                </Menu.Item>
                <Menu.Item key="specifcservices" >
                  <Link to="/taskmanagement/sepcificservices">Specific Services</Link>
                </Menu.Item>
              </>
            )}
          <Menu.Item key="communication" icon={<MessageOutlined style={{ fontSize: '20px' }}  />} onClick={handleCommunication}>
            Communication Center
            <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
          </Menu.Item>
          {
            showCommunicationCenter && (
              <>
               <Menu.Item key="messages" >
                  <Link to="/communication/messages">Messages</Link>
                </Menu.Item>
                <Menu.Item key="chats" >
                  <Link to="/communication/chat">Chat</Link>
                </Menu.Item>
                <Menu.Item key="zoommeetings" >
                  <Link to="/communication/zoommeetings">Zoom Meetings</Link>
                </Menu.Item>
              </>
            )
          }
        
          <Menu.Item key="reports" icon={<FileTextOutlined style={{ fontSize: '20px' }} />} onClick={handleReports}>
            Reports
            <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
          </Menu.Item>
          {
            showReportsMenu && (
              <>
               <Menu.Item key="projectlogs" >
                  <Link to="/reports/projectlogs">Project Logs</Link>
                </Menu.Item>
                <Menu.Item key="tasklogs" >
                  <Link to="/reports/tasklogs">Task logs</Link>
                </Menu.Item>
                <Menu.Item key="manualogs" >
                  <Link to="/reports/manuallogs">Manual logs</Link>
                </Menu.Item>
                <Menu.Item key="chatlogs" >
                  <Link to="/reports/chatlogs">Chat logs</Link>
                </Menu.Item>
                <Menu.Item key="zoomlogs" >
                  <Link to="/reports/zoomlogs">Zoom logs</Link>
                </Menu.Item>
                <Menu.Item key="googlemeetlogs" >
                  <Link to="/reports/googlemeetlogs">Google Meet logs</Link>
                </Menu.Item>
              </>
            )
          }
          <Menu.Item key="screenshot" icon={<CameraOutlined style={{ fontSize: '20px' }} />}> 
          <Link to="/screenshots/screenshottimelog">Screenshot Timelog</Link>
            <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
          </Menu.Item>
         
          <Menu.Item key="settings" icon={<SettingOutlined style={{ fontSize: '20px' }} />} onClick={handleSettings}>
            Settings
            <CaretRightOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
          </Menu.Item>
          {showSettings && (
            <>
              <Menu.Item key="trackersettings" >
                  <Link to="/settings/trackersettings">Tracker Settings</Link>
                </Menu.Item>
                <Menu.Item key="usersettings" >
                  <Link to="/settings/usersettings">User Settings</Link>
                </Menu.Item>
            </>
          )}
        
        </Menu>
      </Sider>
      
      

      <Layout className="site-layout right-side-sec">
       
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: 'linear-gradient(45deg, #ddd 50%, #ddd 50%)',
            }}
          >
            <Routes>
              <Route
                path="/dashboard"
                element={<DashboardContent />}
              />
               {/* <Route
                path="/resourcemanagement"
                element={<div>Resource Management Content</div>}
              /> */}
              <Route
                path="/taskmanagement/todo"
                element={<TodoContent/>}
              />
              <Route
                path="/taskmanagement/createproject"
                element={<CreateProjectContent/>}
              />
              <Route
                path="/taskmanagement"
                element={<TaskManagementContent />}
              />
              <Route path="/edit-user/:userId" element={<EditUserPage />} />
              <Route
                path="/resourcemanagement/createuser"
                element={<CreateUserContent/>}
              />
              <Route
                path="/resourcemanagement/userlist"
                element={<UserListContent/>}
              />
              <Route
                path="/taskmanagement/tasklisting"
                element={<TaskListingContent/>}
              />
              <Route
                path="/taskmanagement/services"
                element={<ServicesContent/>}
              />
              <Route
                path="/communication/messages"
                element={<MessagesContent/>}
              />
              <Route
                path="/communication/chats"
                element={<ChatsContent/>}
              />
              <Route
                path="/communication/zoommeetings"
                element={<ZoomMeetingsContent/>}
              />
              <Route
                path="/taskmanagement/sepcificservices"
                element={<SpecificServicesContent/>}
              />
              <Route
                path="/settings/trackersettings"
                element={<TrackerSettings/>}
              />
              <Route
                path="/settings/usersettings"
                element={<UserSettings/>}
              />
               <Route
                path="/reports/projectlogs"
                element={<ProjectLogsContent/>}
              />
                <Route
                path="/reports/tasklogs"
                element={<TaskLogsContent/>}
              />
              <Route
                path="/reports/manuallogs"
                element={<ManualLogContent/>}
              />
              <Route
                path="/screenshots/screenshottimelog"
                element={<ScreenshotTimelog/>}
              />
               <Route
                path="/reports/chatlogs"
                element={<ChatLogContent/>}
              />
               <Route
                path="/reports/zoomlogs"
                element={<ZoomLogContent/>}
              />
               <Route
                path="/reports/googlemeetlogs"
                element={<GooglemeetLogContent/>}
              />
            
            </Routes>
          </Content>
      
    
        </Layout>
      
    </Layout>
    </Router>
    
   
  );
};

export default AntDesignLayout;
