import { Box, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";

export const Hero = () => {
  
  const tipografiaH2 = {
    color: "#FAFAFA",
    fontFamily: "Nunito",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
  };
  const tipografiaP = {
    width: "240px",
    fontSize: "28px",
    color: "#fff",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "30px",
  };
  return (
    <Box
      sx={{
        width: 360,
        height:488,
        backgroundImage: `linear-gradient(0deg, rgba(34, 34, 34, 0.70) 0%, rgba(34, 34, 34, 0.70) 100%), url('https://s3-alpha-sig.figma.com/img/f7ef/b335/ff1dc91efeb5cee066690ae0fd9f250d?Expires=1700438400&Signature=JMyHHmK3MjHQap-2WRAl8C2lun83QKpGauLzWIR-gZmSpM5UDu0dkJ-B3Y213L2I6XjNk2sOcWJ-s5k4ShFEKC1g7bPPOunkBRsdtlo76wupdnh6Ab0eWnDHgE7ljDSVZZcIiI~ldCvC5aQDHs3lUTA9rv7OCqQ97UDLYVGIvP~7B1~cD602N-gq137wuWXwM5Vj530~BWZZ~ub60jNWRqE6OwYirkDBpuXrATB6s1H7CKRetWRFsX2Jh-wagxZ9-2q3S5Wp007KCI6ckMBUV7r7IIRl1eBZC9gTtrc9-1OSLTN7fTBJNdv-x~p4sU9EUFdQE3gucoeTPYUvkfwmbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`,
        backgroundSize: "cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        color: "white", // Color del texto
        paddingTop:"10px",
        paddingLeft:"16px",
        flexShrink: 0
      }}
    >
      <SearchBar />
      <Typography sx={tipografiaH2}>RED DE IMPACTO</Typography>
      <Typography sx={tipografiaP}>
        Conectamos proveedores y personas comprometidas con el impacto y el
        consumo consciente
      </Typography>
    </Box>
  );
};
