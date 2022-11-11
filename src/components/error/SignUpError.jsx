import Alert from 'react-bootstrap/Alert';

function SignUpError() {
  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant} className='m-1'>
          Ocurrió un error, revisa si cargaste bien tus datos o intenta más tarde.
        </Alert>
      ))
      }
    </>
  );
}

export default SignUpError;
