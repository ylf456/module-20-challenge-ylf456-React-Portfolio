import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="body-content" id="error-page">
      <h1>Oops!</h1>
      <p>404. Something went wrong!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
