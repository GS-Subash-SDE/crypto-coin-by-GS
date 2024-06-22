export default function Error({ setApiStatus }) {
  
    document.title = "Error Page";


  const handleError = () => {
    setApiStatus('init');
  };
  return (
    <div className="error">
      <h2>
        <span>⛔</span> Something went wrong!
      </h2>
      <button className="error-btn" type="button" onClick={handleError}>
        Retry
      </button>
    </div>
  );
}