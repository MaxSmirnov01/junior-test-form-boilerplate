import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import request from './requests';

const getData = createAsyncThunk(
  'getData',
  async (apiKey, { rejectWithValue }) => {
    try {
      const response = await axios.get(request.getData(), {
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
      });

      return response.data;
    } catch (error) {
      const { data, status } = error.response;

      return rejectWithValue({ data, status });
    }
  },
);

export default getData;
