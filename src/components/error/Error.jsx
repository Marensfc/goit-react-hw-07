import css from "./Error.module.css";

const Error = ({ errorMessage }) => {
  return <p className={css.error}>{errorMessage}</p>;
};

export default Error;
