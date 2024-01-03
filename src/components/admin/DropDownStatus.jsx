import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useStatusContext } from '../../context/StatusContext';


const DropDownStatus = () => {
  const { setStatus, status } = useStatusContext();
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (event) => {
    setStatus(event.target.value);
    setShowNotification(true);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl fullWidth sx={{ width: 152 }}>
        <InputLabel>Estado</InputLabel>
        <Select
          value={status}
          label="Estado"
          placeholder='Estado'
          onChange={handleChange}
        >
          <MenuItem value="Aprobado"><Brightness1Icon sx={{ color: "#1D9129", paddingRight: "10px" }} />Aprobado</MenuItem>
          <MenuItem value="En revisión"><Brightness1Icon sx={{ color: "#B86B11", paddingRight: "10px" }} />En revisión</MenuItem>
          <MenuItem value="Denegado"><Brightness1Icon sx={{ color: "#B91C1C", paddingRight: "10px" }} />Denegado</MenuItem>
        </Select>
      </FormControl>

      {
        showNotification && <Snackbar
          open={showNotification}
          autoHideDuration={6000}
          onClose={() => setShowNotification(false)}>
          <Alert severity="success" sx={{ width: '100%' }}>
            Estado modificado con éxito
          </Alert>
        </Snackbar>
      }
    </Box>
  )
}

export default DropDownStatus