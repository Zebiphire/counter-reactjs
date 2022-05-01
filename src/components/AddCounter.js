const AddCounter = ({ counters, setCounters }) => {
  return (
    <div className="addCounter">
      {counters.length < 3 && (
        <button
          className="buttonAddCounter"
          onClick={() => {
            if (counters.length < 3) {
              let newCounters = [...counters];
              newCounters.push(0);
              setCounters(newCounters);
            }
          }}
        >
          Add counter
        </button>
      )}{" "}
    </div>
  );
};

export default AddCounter;
