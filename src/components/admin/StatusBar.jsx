import { List, ListItemButton, ListItemText } from '@mui/material'
import { useStatusContext } from '../../context/StatusContext';


const listStyle = {
  display: 'flex',
  width: '360px',
  height: '60px',
};

const itemStyle = {
  width: "128px",
  height: "48px",
  padding: "8px 0px 0px 0px",
  alignItems: "center",
  fontFamily: "Nunito",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  textAlign: "center",
  color: "#505050",

}

const StatusBar = () => {
  const { statusPage, setStatusPage, setShowSupplier } = useStatusContext()

  return (
    <List sx={listStyle} component="nav" >
      <ListItemButton sx={itemStyle} onClick={() => {
        setStatusPage("Nuevos Perfiles")
        setShowSupplier(false)
      }
      }>
        <ListItemText primary="Nuevos Perfiles" sx={{ borderBottom: statusPage === "Nuevos Perfiles" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => {
        setStatusPage("Aprobados")
        setShowSupplier(false)
      }
      }>
        <ListItemText primary="Aprobados" sx={{ borderBottom: statusPage === "Aprobados" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => {
        setStatusPage("En revisión")
        setShowSupplier(false)
      }
      }>
        <ListItemText primary="En revisión" sx={{ borderBottom: statusPage === "En revisión" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => {
        setStatusPage("Denegados")
        setShowSupplier(false)
      }
      }>
        <ListItemText primary="Denegados" sx={{ borderBottom: statusPage === "Denegados" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
    </List>
  )
}

export default StatusBar