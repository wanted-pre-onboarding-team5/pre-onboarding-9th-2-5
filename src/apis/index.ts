import { PATH_API } from '../constants/path';

const request = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    alert('에러가 발생했습니다.');
    console.error(response);
  }
  return response.json();
};

const DataApi = {
  async getData() {
    return await request(PATH_API.data);
  },
};

export default DataApi;
