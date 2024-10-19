import { Formik } from 'formik';

const LoginForm = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};


export default LoginForm;