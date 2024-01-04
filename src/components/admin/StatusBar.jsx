import { List, ListItemButton, ListItemText } from '@mui/material'
import { useStatusContext } from '../../context/StatusContext';


const listStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
  width: '100%',
  overflow: 'auto',
  paddingTop: "24px",
};

const itemStyle = {
  width: "128px",
  height: "48px",
  padding: "8px 10px 0px 10px",
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
  const { statusPage, setStatusPage } = useStatusContext()

  return (
    <List sx={listStyle} >
      <ListItemButton sx={itemStyle} onClick={() => setStatusPage("Nuevos Perfiles")}>
        <ListItemText primary="Nuevos Perfiles" sx={{ borderBottom: statusPage === "Nuevos Perfiles" ? "3px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => setStatusPage("Aprobados")}>
        <ListItemText primary="Aprobados" sx={{ borderBottom: statusPage === "Aprobados" ? "3px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => setStatusPage("En revisión")}>
        <ListItemText primary="En revisión" sx={{ borderBottom: statusPage === "En revisión" ? "3px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => setStatusPage("Denegados")}>
        <ListItemText primary="Denegados" sx={{ borderBottom: statusPage === "Denegados" ? "3px solid #4E169D" : "none" }} />
      </ListItemButton>
    </List>
  )
}

export default StatusBar