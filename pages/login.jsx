import { useState } from "react";
import { signIn } from "@module/firebase/firebase";
import { LoggedInContent } from "@components/organisms";
import { Input } from "@components/atoms";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoggedInContent>
      <div className="login">
        <div className="login__card">
          <img className="logo" src="/assets/img/logo.svg" />
          <form
            className="login__form"
            onSubmit={e => {
              e.preventDefault();

              if (isLoading) {
                return;
              }

              const inputs = e.target.querySelectorAll("input");
              const email = inputs[0].value;
              const password = inputs[1].value;

              if (!email) {
                alert("Email cannot be blank");
                return;
              }

              if (!password) {
                alert("Password cannot be blank");
                return;
              }

              setIsLoading(true);

              signIn(email, password).catch(err => {
                setIsLoading(false);
                alert(err);
              });
            }}
          >
            <div className="form-field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <Input
                name="email"
                disabled={isLoading}
                id="email"
                type="email"
                placeholder="your email, ex: user1@fazznews.com"
              />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <Input
                name="password"
                disabled={isLoading}
                id="password"
                type="password"
                placeholder="your password, ex: user123"
              />
            </div>
            <button
              className="button login__button"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Loading..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </LoggedInContent>
  );
};

export default LoginPage;
