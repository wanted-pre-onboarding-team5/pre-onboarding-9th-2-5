import { useNavigate } from 'react-router';
import { PATH_ROUTE } from 'src/constants';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h5>404 페이지</h5>
      <button onClick={() => navigate(PATH_ROUTE.main)}>메인 페이지로 가기</button>
      <button onClick={() => navigate(-1)}>이전 페이지로 돌아가기</button>
    </div>
  );
};

export default Error;
