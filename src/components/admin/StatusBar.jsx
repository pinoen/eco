import { List, ListItemButton, ListItemText } from '@mui/material'


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
  return (
    <List sx={listStyle} >
      <ListItemButton sx={itemStyle}>
        <ListItemText primary="Nuevos Perfiles" />
      </ListItemButton>
      <ListItemButton sx={itemStyle}>
        <ListItemText primary="Aprobados" />
      </ListItemButton>
      <ListItemButton sx={itemStyle}>
        <ListItemText primary="En revisión" />
      </ListItemButton>
      <ListItemButton sx={itemStyle}>
        <ListItemText primary="Denegados" />
      </ListItemButton>
    </List>
  )
}

export default StatusBar