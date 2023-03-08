import { useRouteError } from 'react-router-dom';

interface ErrorType {
  statusText?: string;
  message?: string;
}

export const Error = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
