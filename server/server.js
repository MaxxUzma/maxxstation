const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// ...

app.use(cors());

const app = express();
const port = 3001;


mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true, useUnifiedTopology: true },).then((res) => {
    console.log("Database connected");
  }).catch(error => {
     console.log(error);
   });


const db = mongoose.connection;


const userSchema = new mongoose.Schema({
  labelName: String,
  email: String,
  phoneNumber: String,
  password: String,
  confirmPassword: String,
  residentialAddress: String,
  businessAddress: String,
  services: String,
  specificServices: String,
  technicalSkillSet: String,       
  employeeType: String,
});


const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/api/users', async (req, res) => {
  try {
    
    const {
      labelName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      residentialAddress,
      businessAddress,
      services,
      specificServices,
      technicalSkillSet,
      employeeType,
    } = req.body;

  
    const newUser = new User({
      labelName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      residentialAddress,
      businessAddress,
      services,
      specificServices,
      technicalSkillSet,
      employeeType,
    });

   
    const savedUser = await newUser.save();

    console.log('User Data:', savedUser);

   
    res.json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error(error);
     res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.put('/api/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUserData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.delete('/api/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
