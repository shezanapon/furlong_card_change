import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import pic1 from "../picture/pic1.png";
import pic2 from "../picture/pic2.png";
import pic3 from "../picture/pic3.png";
import Main from "./secondpage/Main";

const CardCom = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const changeState = () => {
    setShow(true);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  return (
    <Box p={4} sx={{ display: "flex" }}>
      {show3 && (
        <Box sx={{ marginRight: "15px" }}>
          <Card onClick={changeState} sx={{ maxWidth: 390 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={pic1}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="p"
                  sx={{ color: "blue" }}
                  component="div"
                >
                  Furlong Painting Sub Contractor/Worker Induction
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Tony Bruce
                </Typography>

                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  textAlign={"left"}
                >
                  Enrolled Learners: <span style={{ color: "blue" }}>24</span>
                </Typography>
                <Typography
                  sx={{ textAlign: "right" }}
                  variant="subtitle2"
                  color="text.secondary"
                >
                  2 years ago
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      )}

      {show1 && (
        <Box onClick={changeState} sx={{ marginRight: "15px" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={pic2}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="p"
                  sx={{ color: "blue" }}
                  component="div"
                >
                  Furlong Painting Contractor Induction Program
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Tony Bruce
                </Typography>

                <Typography gutterBottom variant="p" component="div">
                  Enrolled Learners: <span style={{ color: "blue" }}>9</span>
                </Typography>
                <Typography
                  sx={{ textAlign: "right" }}
                  variant="subtitle2"
                  color="text.secondary"
                >
                  2 years ago
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      )}
      {show2 && (
        <Box sx={{ marginRight: "15px" }}>
          <Card onClick={changeState} sx={{ maxWidth: 390 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={pic3}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="p"
                  sx={{ color: "blue" }}
                  component="div"
                >
                  Furlong Painting Sub Contractor/Worker Induction
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Tony Bruce
                </Typography>

                <Typography gutterBottom variant="p" component="div">
                  Enrolled Learners: <span style={{ color: "blue" }}>24</span>
                  <span>
                    <Typography
                      sx={{ textAlign: "right" }}
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      2 years ago
                    </Typography>
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      )}

      {show && <Main />}
    </Box>
  );
};

export default CardCom;
