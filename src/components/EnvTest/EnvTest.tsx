import { useState } from "react";

export const EnvTest = () => {
  const [state, setState] = useState(null);
  const string: any = "asd";

  console.log(string);

  return (
    <div>
      <h2>Environment Variables Test </h2>
      <ul>
        <li>App Name: {import.meta.env.VITE_APP_NAME}</li>
        <li>API URL: {import.meta.env.VITE_API_URL}</li>
        <li>Mode: {import.meta.env.MODE}</li>
        <li>Dev: {import.meta.env.DEV ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};
