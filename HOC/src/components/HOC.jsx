import React, { useState, useEffect } from "react";

const withLoading = (Component) => {
  return function WithLoading(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
};

const MyComponent = () => {
  return <h1>Component is loaded!</h1>;
};

export default withLoading(MyComponent);
