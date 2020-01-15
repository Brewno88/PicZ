import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 66efbc4e1b7eecaedcfff203e8b2cfbbdffad1187e22f359774364cfbe8fe650"
      }
});

