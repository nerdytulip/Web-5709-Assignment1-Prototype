import "./Bookmark.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Bookmark(props) {
  const [bookmarkState, setBookmarkState] = useState(props.bookmarkState);
  const [bookmarkImageSrc, setbookmarkImageSrc] = useState(
    props.bookmarkImageSrc
  );

  const onClickBookmarkHandler = () => {
    //negatation
    const mybool = !bookmarkState;
    console.log(mybool);
    setBookmarkState(mybool);
    if (mybool) {
      console.log("inside bookmark state true");
      setbookmarkImageSrc("selected.jpg");
      toast.success(
        "Recipe saved to profile , refer to saved section under profile !",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } else {
      console.log("inside bookmark state false");
      setbookmarkImageSrc("unselected.jpg");
      toast.info("Recipe removed from profile saved section !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={10} style={{ backgroundColor: "#dbf0f0", height: "70vh" }}>
            <Row>
              <Typography variant="h3" align="center">
                <b>Quickie Recipe</b>
              </Typography>
            </Row>
            <br></br>
            {/* <Row>
              <div>
                <img src="recipe.jpg" width="200" height="200" />
              </div>
            </Row> */}
            <br></br>
            <Row>
              <Col>
                <Box
                  component="img"
                  sx={{
                    height: 350,
                    width: 350,
                    maxHeight: { xs: 350, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    alignItems: "center",
                  }}
                  alt="Recipe"
                  src="recipe.jpg"
                  m="auto"
                />
              </Col>
              <Col>
                <Typography variant="h5" align="left">
                  Description:
                </Typography>
                <Typography variant="body1" align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col xs={2} style={{ backgroundColor: "#f0f0db", height: "70vh" }}>
            <br></br>
            <div>
              {/* <img src={bookmarkImageSrc}></img> <button onClick={onClickBookmarkHandler}>Click Me!</button> */}
              <img
                src={bookmarkImageSrc}
                width="40"
                height="40"
                alt="Bookmark"
                onClick={onClickBookmarkHandler}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default Bookmark;
