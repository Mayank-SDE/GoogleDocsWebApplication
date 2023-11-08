import mongoose from 'mongoose';

const Connection = async (
  username = 'mayankchoudhary6055',
  password = 'rootROOT'
) => {
  const url = `mongodb+srv://${username}:${password}@cluster0.yvdlwbp.mongodb.net/GoogleDocsClone?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected successfully.');
  } catch (error) {
    console.log('Error while connecting with Database.', error);
  }
};

export default Connection;
