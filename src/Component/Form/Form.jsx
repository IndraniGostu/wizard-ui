import "./Style.css";

const Form = ({
  formData = {},
  actionBasedStep = () => {},
  setFormValues = () => {},
  getFormValues = () => {},
  error="",
  errorList = ""
}) => {
  return (
    <div className="form-container">
      <div>
        {formData?.fields?.map((item) => {
          return item.type == "input" ? (
            <input
            key={item.name}
              placeholder={item.placeholder}
              type={item.inputType}
              required={item.required}
              className={`form-input-field ${ errorList.includes(item.name) ? 'error' : ''}`}
              value={getFormValues(item.name)}
              onChange={(e) => {setFormValues(item.name, e.target.value)}}
            ></input>
          ) : (
            <textarea
            key={item.name}
              placeholder={item.placeholder}
              type={item.inputType}
              required={item.required}
              className={`form-input-field ${errorList.includes(item.name) ? 'error' : ''}`}
              rows="10"
              value={getFormValues(item.name)}
              onChange={(e) => { setFormValues(item.name, e.target.value)}}
            ></textarea>
          );
        })}
      </div>
        {error && <div style={{textAlign:'center', "color": 'red'}}>{error}</div>}
      <div
        className={`form-button-container ${
          formData?.cta?.length == 1 ? "align-right" : ""
        }`}
      >
        {formData?.cta?.map((item) => {
          return (
            <button
            key={item.action}
              className={item.class}
              onClick={() => {
                actionBasedStep(item.action);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
