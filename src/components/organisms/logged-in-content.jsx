import { useRouter } from "next/router";
import { useAuth } from "@module/firebase/context";
import { useEffect } from "react";
import { FullSpinner } from "@components/content-loader";

const LoggedInContent = ({ children }) => {
  const router = useRouter();
  const { user, userIsLoading } = useAuth();

  useEffect(() => {
    if (userIsLoading) {
      return;
    }

    const isLoginPage = router.pathname === "/login";
    if (!user && !isLoginPage) {
      router.replace("/login");
    } else if (user && isLoginPage) {
      router.replace("/");
    }
  }, [user, userIsLoading]);

  if (userIsLoading) {
    return <FullSpinner />;
  }

  return children;
};

export default LoggedInContent;
