import Alert from 'react-bootstrap/Alert';

function GeneralError() {
  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant} className='m-1'>
          ¡Ocurrió un error! Intenta más tarde.
        </Alert>
      ))
      }
    </>
  );
}

export default GeneralError;