import "./Style.css";

enum InputType {
  input = "input",
  textarea = "textarea",
}

interface Fields {
  name: string;
  type: string;
  placeholder?: string;
  inputType?: InputType;
  required?: boolean;
}

interface CTA {
  action: string;
  class: string;
  name: string;
}

interface FormData {
  fields?: Array<Fields>;
  cta?: Array<CTA>;
}

const Form = ({
  formData = {} as FormData,
  actionBasedStep = (action: string) => {},
  setFormValues = (name: string, value: string) => {},
  getFormValues = (name: string): string | number | readonly string[] | undefined => "",
  error="" as string,
  errorList = "" as string
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
              required={item.required}
              className={`form-input-field ${errorList.includes(item.name) ? 'error' : ''}`}
              rows={10}
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
