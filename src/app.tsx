import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tuning: "Standard",
      capo: 0,
      root: "A",
      type: "major",
    },
  });

  return <div>Hello</div>;
};

export default App;
