import { FunctionComponent } from "react";
import { useSolidAuth } from "@ldo/solid-react";

export const Header: FunctionComponent = () => {
    const { session, login, logout } = useSolidAuth();

    return (
      <header>
        {session.isLoggedIn ? (
          // Is the session is logged in
          <p>
            You are logged in with the webId {session.webId}.{" "}
            <button onClick={logout}>Log Out</button>
          </p>
        ) : (
          // If the session is not logged in
          <p>
            You are not Logged In{" "}
            <button 
              onClick={() => {
                // Get the Solid issuer the user should log into
                const issuer = prompt(
                  "Enter your Solid Issuer",
                  "https://solidweb.me"
                );
                if (!issuer) return;
                login(issuer);
              }}
            >
              Log In
            </button>
          </p>
        )}
        <hr />
      </header>
    );
  };