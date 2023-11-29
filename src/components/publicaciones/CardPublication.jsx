import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import ReactImageGallery from "react-image-gallery";

const text = `El upcycling, también conocido como supra-reciclaje o reutilización creativa, es un enfoque innovador y sostenible para la gestión de residuos y la conservación de recursos. A diferencia del reciclaje convencional, que implica descomponer materiales para crear nuevos productos, el upcycling busca transformar objetos o materiales desechados en productos de mayor valor, sin degradar su calidad.

Este proceso implica la reimaginación y reinvención de elementos que normalmente se considerarían basura, dándoles una segunda vida y reduciendo la cantidad de desechos enviados a vertederos. El upcycling fomenta la creatividad y la innovación, ya que requiere repensar cómo se pueden utilizar los materiales existentes de nuevas formas.

El upcycling se ha convertido en una poderosa herramienta para abordar los desafíos medioambientales y sociales que enfrenta nuestro planeta. Algunos ejemplos de upcycling incluyen la creación de muebles a partir de palets de madera, la confección de ropa a partir de telas recicladas o la transformación de objetos cotidianos en piezas de arte. Esto no solo reduce la cantidad de residuos, sino que también fomenta la economía circular, donde los productos y materiales se reutilizan y reciclan continuamente en lugar de desecharse.

El upcycling no solo beneficia al medio ambiente al reducir la cantidad de residuos, sino que también puede generar oportunidades económicas y sociales. Muchos emprendedores y artistas han encontrado en el upcycling una forma de crear productos únicos y sostenibles que atraen a consumidores conscientes de su impacto en el medio ambiente.

En resumen, el upcycling es una práctica innovadora que transforma desechos en tesoros, promoviendo la sostenibilidad, la creatividad y la reducción de residuos. Al adoptar el upcycling en nuestras vidas y comunidades, podemos contribuir a un mundo más limpio y respetuoso con los recursos naturales. ¡Únete al movimiento del upcycling y ayúdanos a crear un futuro más sostenible!`;

const previewText = `${text.substring(0, 173)}...`;

const images = [
  {
    original:
      "https://s3-alpha-sig.figma.com/img/ed37/a382/c1498999f8addebf3e800720a2445865?Expires=1702252800&Signature=kCA33qmbnQlCHoS70ILY5Yip-a6CdsvlGP2RG-qU7--ysEoPtRHHrb2~NZ1i-Xwd8ExULJTrH-DafRS4xPd21l4GUoKhuv7kXe7ATTA-K0mDrVE6dKQwe8QpyOoKkBI-JZB3zEJvtiQMRJHU4Tx-SX1KmT3h~sNPfx6MezYIaTgwIhKO1IHSJ3h6-OcOfUaJRzT~dF8Kuf4dUlvvGU5jmvNnq0mfeORcYoRb5FBWlw98SEOGCCshSRBYZgr84RlQuUWkdrTiW4NP2NZA0vWaMWjcbbwzmZE4qOOSZaozYuYtGI7PPaiom39ph0o2yvlN4RuF1fh0QBaZbVLMbf9Kqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    original:
      "https://s3-alpha-sig.figma.com/img/f0ca/b93c/6351a3ad633667aef35d1b25df4026b4?Expires=1702252800&Signature=THv-etKvaF~ZApnNfv27mJIO1LehilbCj08cFW~6DUlWi1~he8ZNw-DO~vrnltPV7xl7eqTDqcFgKQkDMkEikA7Ai5StbGSPws0eYKWCp1xvR5B5FPSQSl9I9QNvWrqZfYKBKV~Jh01GHht9tHObe4hejKIbcMvTZIVAjE6qflPbbWtx6yBHDHA48kVDMYKd~TTFY9Y02d0M3js4RROnz6RUKJbNvmwus9CCYmbC1tj6ea1-4KmMccfNvewaXhowepUbwN0ROI4em1i8PqRzW75eSaDymREFY9RL9qP2fl88dghXuFL-qFbuAfdfhqTEoIy-OIfLC4-NrPWwn9ZP9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    original:
      "https://s3-alpha-sig.figma.com/img/bcf2/b414/ca3817b7e452c7de4602ccf498f7afd1?Expires=1702252800&Signature=R84WVijivadU9oCQUd2VYO5Y7A6Lpsm03XlYWYOdozsfy4Rlj-kg6ErzGpmEtcCMGyU9T6tb9Ivrz2vX6d7SOCAPmZvaGQ1es4U~hiCJIs5wZmXcjsIUXV6MEwU0KJSmvIFZGSAwwFn0q2rU6uprx9oXn0JQca~SXj-iZUk5dZoenpye8CiXP55je5bUnKnWP26XV4KL6ZqtxcveU09TN6cpiZ64SNK0ureBePwrRkEoNppAvlzNWQrPaleuqxTgkyTtvs1DPtIzjCcaJWqyY2~qxeHQGYdfHCA1DUmetfF7gt~9hyFRIAtNR0~H3ppxKX0mnLX-1klze4hg3MbeLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const CardPublication = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      sx={{
        width: "328px",
        minHeight: "400px",
        my: "40px",
        bgcolor: "#EAEAEA",
        borderRadius: "16px",
        padding: "16px 16px 8px 16px",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "var(--Negro, #222)",
            textAlign: "center",
            fontFamily: "Nunito",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "25px",
          }}
        >
          ¿Qué es el Upcycling?
        </Typography>
        <Box sx={{ borderRadius: "16px", marginTop: "16px" }}>
          <ReactImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={false}
            showBullets={true}
            // autoPlay={true}
            // slideInterval={5000}
          />
        </Box>
      </Box>
      <Box sx={{ minHeight: "124px", marginTop: "26px", width: "304px" }}>
        <Typography
          sx={{
            color: "var(--Negro, #222)",
            fontFamily: "Nunito",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
          }}
        >
          17/04/2023
        </Typography>
        <Typography
          sx={{
            color: "var(--Negro, #222)",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            marginTop: "4px",
          }}
        >
          {isExpanded ? text : previewText}
        </Typography>
      </Box>
      <Box onClick={() => setIsExpanded(!isExpanded)}>
        <Typography
          sx={{
            color: "var(--Violeta, #4E169D)",
            fontFamily: "Nunito",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "20px",
            textAlign: "center",
            paddingTop: "10px",
            marginTop: "8px",
          }}
        >
          {isExpanded ? "Ver Menos" : "Ver más"}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardPublication;
