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
      <input
        type="text"
        className="block w-full rounded border border-gray-300 px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
        placeholder="Type in your username"
      />
      <div className="relative">
        <input
          type="password"
          className="block w-full rounded border border-gray-300 px-4 py-2 pr-10 text-base text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
          placeholder="Inserisci la tua password"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-5 w-5 cursor-pointer text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M10 3C5.03 3 1 7.03 1 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <button onClick={onSubmitHandler}>Login</button>
    </>
  );
};

export default LoginForm;
