// ... existing imports ...
import Modal from 'react-modal';

const UserModal = ({ isOpen, onClose, user }) => {
  const modalStyle = {
    content: {
      width: '30%', // Adjust the width as needed (e.g., '50%', '400px', etc.)
      height: '40vh', // Adjust the height as needed (e.g., '60vh', '300px', etc.)
      margin: 'auto', // Center the modal horizontally
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User Modal"
      style={modalStyle}
    >
      <h2>User Details</h2>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </>
      )}
      <button onClick={onClose}>Close Modal</button>
    </Modal>
  );
};

export default UserModal;
