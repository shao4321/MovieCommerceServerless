import { useField } from "formik";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-sect">
      <label htmlFor={props.id || props.name}>
        {label} {props.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className="form-sect">
      <input {...field} {...props} type="checkbox" />
      <label className="checkbox">{children}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-sect">
      <label htmlFor={props.id || props.name}>
        {label} {props.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
