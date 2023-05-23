import { Button, Collapse } from '@mui/material';
import Alert from '@mui/material/Alert';

export function SuccessAlert({alert, setAlert, vid}) {
  return (
    <Collapse in={alert}>
        <Alert
            action={
                <Button color="inherit" size="small" onClick={() => setAlert(false)}>
                    X
                </Button>
            }
            sx={{ mb: 2 }}
        >
        {vid ? 'Video agregado correctamente.' : 'Categoría agregada correctamente.'}
        </Alert>
    </Collapse>
  );
}

export function AlertMessage({alertError, setAlertError}) {
    return (
      <Collapse in={alertError}>
          <Alert
              action={
                  <Button color="inherit" size="small" onClick={() => setAlertError(false)}>
                      X
                  </Button>
              }
              sx={{ mb: 2 }}
              severity='error'
          >
          Complete todo los campos
          </Alert>
      </Collapse>
    );
}

  export function AlertMessageEdit({alert, setAlert}) {
    return (
      <Collapse in={alert}>
          <Alert
              action={
                  <Button color="inherit" size="small" onClick={() => setAlert(false)}>
                      X
                  </Button>
              }
              sx={{ mb: 2 }}
              severity='info'
          >
            Categoria editada Correctamente
          </Alert>
      </Collapse>
    );
}