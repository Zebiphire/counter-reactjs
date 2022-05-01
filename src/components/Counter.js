import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ key, index, number, counters, setCounters }) => {
  return (
    <div className="counter">
      <div className="rowCounter">
        {number > 0 ? (
          <button
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index]--;
              setCounters(newCounters);
            }}
          >
            <FontAwesomeIcon className="minus" icon="minus" />
          </button>
        ) : (
          <div className="removeButton"></div>
        )}

        <span className="number">{number}</span>

        {number < 10 ? (
          <button
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index]++;
              setCounters(newCounters);
            }}
          >
            <FontAwesomeIcon className="plus" icon="plus" />
          </button>
        ) : (
          <div className="removeButton"></div>
        )}
      </div>
      <div className="buttonReset">
        <button
          onClick={() => {
            const newCounters = [...counters];
            newCounters[index] = 0;
            setCounters(newCounters);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
