import { Button } from "@/components/Button"; // Алиас @/
import { EnvTest } from "@/components/EnvTest"; // Алиас @/
import logo from "@/assets/react.svg"; // Алиас @/
import favicon from "~/favicon.ico"; // Алиас ~/

export const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <img src={logo} alt="Logo" />
        <img src={favicon} alt="Favicon" />
        <Button />
      </div>
      <div>
        <EnvTest />
      </div>
    </>
  );
};
