import ProgressBar from 'react-bootstrap/ProgressBar';

function AccessibleNameExample() {
  return (
    <>
      <ProgressBar now={45} aria-label="Upload progress" className="mb-3" />
      <p id="download-progress-label">Download status</p>
      <ProgressBar now={70} aria-labelledby="download-progress-label" />
    </>
  );
}

export default AccessibleNameExample;
