interface Props {
  onSubmitHandler: () => void;
  otherProp: string;
}
const LoginForm = ({ onSubmitHandler, otherProp }: Props) => {
  console.log("Props", {
    fn: onSubmitHandler,
    string: otherProp,
  });
  return (
    <>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={onSubmitHandler}>Login</button>
    </>
  );
};

export default LoginForm;
