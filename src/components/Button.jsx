const Button = ({ name }) => {
  return (
    <>
      <div>
        <button className="m-2 rounded-lg bg-slate-200 px-3 py-1 text-sm shadow-md duration-200 hover:scale-105 hover:shadow-sky-300">
          {name}
        </button>
      </div>
    </>
  );
};

export { Button };
