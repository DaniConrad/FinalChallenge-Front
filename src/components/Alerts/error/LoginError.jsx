import Alert from 'react-bootstrap/Alert';

function LoginError() {
  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant} className='m-1'>
          Ocurrió un error, revisa tus credenciales y vuelve a intentar.
        </Alert>
      ))
      }
    </>
  );
}

export default LoginError;

