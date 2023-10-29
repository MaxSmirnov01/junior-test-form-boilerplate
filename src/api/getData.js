import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import request from '../requests';

const getData = createAsyncThunk('getData', async (apiKey) => {
  const response = await axios.get(request.getData(), {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  });

  return response.data;
});

export default getData;
