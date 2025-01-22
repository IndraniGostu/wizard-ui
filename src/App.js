import "./App.css";
import Wizard from "./Component/Wizard/Wizard";
import Form from "./Component/Form/Form";
import FormConfig from "./Config/Form";
import { useEffect, useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState("");

  const getFormValues = (name) => {
    switch (name) {
      case "Username":
        return username;
      case "Password":
        return password;
      case "Address":
        return address;
      default:
        return null;
    }
  };

  const validator = () => {
    setError("");
    let value = true;
    let errorMesaage = "";
    formData?.fields?.map((item) => {
      if (item.required && getFormValues(item.name) == "") {
        setError(`Please enter ${item.name}`);
        errorMesaage = errorMesaage + item.name 
        value = false;
      }
    });
    if (!value) {
      setErrorList(errorMesaage);
    }
    return value;
  };

  const setFormValues = (name, value) => {
    switch (name) {
      case "Username":
        setUsername(value);
        break;
      case "Password":
        setPassword(value);
        break;
      case "Address":
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    if(validator())
    {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setAddress("");
    setActiveStep(0);
  };

  const onSubmit = () => {
    if(!validator())
      {
        return
      }
    const payloadData = {
      username: username,
      password: password,
      address: address,
    };

    try {
      fetch("https://webhook.site/cffc0f69-e09c-4514-a0b9-991d0d4f0c6b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadData),
        mode: "no-cors",
      }).then((res) => {
        alert("Data posted successfully");
        resetForm();
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const actionBasedStep = (action) => {
    if (action === "next") {
      handleNext();
    } else if (action === "previous") {
      handleBack();
    } else if (action === "submit") {
      onSubmit();
    }
  };

  useEffect(() => {
    setFormData(FormConfig[activeStep]);
  }, [activeStep]);

  return (
    <div className="main-container">
      <h2 style={{ color: "#3498db" }}>{formData.title} Form</h2>
      <Wizard activeStep={activeStep} />
      <Form
        formData={formData}
        actionBasedStep={actionBasedStep}
        setFormValues={setFormValues}
        getFormValues={getFormValues}
        validator={validator}
        error={error}
        errorList={errorList}
      />
    </div>
  );
}

export default App;
