const Users = require("../../models/users");

const addUser = async (req, res) => {
  const { name, email, phone, hobbies } = req.body;
  if (!name || !email || !phone || !hobbies) {
    return res.status(400).json({
      error: "required fields are empty",
    });
  }

  const emailExists = await Users.find({ email });
  if (emailExists.length != 0) {
    return res.status(400).json({
      error: "email already exists",
    });
  }

  const newUser = new Users(req.body);
  const saveUser = await newUser.save();
  if (saveUser) {
    return res.status(200).json({
      message: "data saved successfully",
    });
  } else {
    res.status(400).json({
      message: "some error occured on server side",
    });
  }
};

const getData = async (req, res) => {
  const allData = await Users.find();
  res.status(200).json(allData);
};

const updateData = async (req, res) => {
  const {key, name, phone, email, hobbies } = req.body;
  if (!key || !name || !phone || !email || !hobbies) {
    return res.status(400).json({
      error: "required fields are empty",
    });
  }
  try {
    const result = await Users.updateOne(
      { email : key },
      {
        $set: {
          name,
          phone,
          email,
          hobbies,
        },
      }
    );
    if (result) {
      console.log("updated")
      return res.status(200).json({
        message: "data updated successfully",
      });
    } else {
      return res.status(400).json({
        error: "some error occured",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const getToUpdate = async (req, res) => {
  const email = req.params.email ;
  const emailExists = await Users.findOne({ email });
  if (emailExists) {
    res.status(200).json(emailExists);
  } else {
    res.status(400).json({
      error: "Something went wrong",
    });
  }
};

const deleteRecord = async (req, res) => {
  const email = req.params.email;
  const emailExists = await Users.find({ email });
  if (emailExists.length == 0) {
    return res.status(400).json({
      error: "error : some error occurred",
    });
  } else {
    const deleting = await Users.deleteOne({email})
    if (deleting) {
      return res.status(200).json({
        message: "Record deleted successfully",
      });
    } else {
      return res.status(200).json({
        error: "some error occured while deleting",
      });
    }
  }
};


const multipleDelete = async (req, res) => {
  const data = req.body.list ;
  for (let i = 0; i < data.length; i++){
    try{
      let removeData = await Users.deleteOne({email : data[i]}) ;
      if(i==data.length - 1){
        return res.status(200).json({
          message : "Selected data successfully deleted"
        })
      }
    }
    catch(err){
      console.log("error")
    }
    
    
  }
}







const deleteAll = async () => {
  const deleting = await Users.deleteMany({});
};

module.exports = {
  addUser,
  getData,
  updateData,
  getToUpdate,
  deleteRecord,
  deleteAll,
  multipleDelete
};
