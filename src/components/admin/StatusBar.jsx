import { List, ListItemButton, ListItemText } from '@mui/material'
import { useStatusContext } from '../../context/StatusContext';


const listStyle = {
  display: 'flex',
  width: { xs: '360px', md: '760px' },
  height: '60px',
};

const itemStyle = {
  width: { xs: "128px", md: "280px" },
  height: { xs: "48px", md: "60px" },
  alignItems: "center",
  fontFamily: "Nunito",
  fontSize: { xs: "16px", md: "22px" },
  fontStyle: "normal",
  fontWeight: { xs: 400, md: 600 },
  lineHeight: "20px",
  textAlign: "center",
  color: "#505050",

}

const StatusBar = () => {
  const { statusPage, setStatusPage, setShowSupplier } = useStatusContext()

  const setPage = (page) => {
    setStatusPage(page)
    setShowSupplier(false)
  }

  return (
    <List sx={listStyle} component="nav" >
      <ListItemButton sx={itemStyle} onClick={() => setPage("Nuevos Perfiles")
      }>
        <ListItemText primary="Nuevos Perfiles" sx={{ borderBottom: statusPage === "Nuevos Perfiles" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => setPage("Aprobados")
      }>
        <ListItemText primary="Aprobados" sx={{ borderBottom: statusPage === "Aprobados" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => setPage("En revisión")
      }>
        <ListItemText primary="En revisión" sx={{ borderBottom: statusPage === "En revisión" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
      <ListItemButton sx={itemStyle} onClick={() => setPage("Denegados")
      }>
        <ListItemText primary="Denegados" sx={{ borderBottom: statusPage === "Denegados" ? "4px solid #4E169D" : "none" }} />
      </ListItemButton>
    </List>
  )
}

export default StatusBar