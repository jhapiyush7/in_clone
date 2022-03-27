import { FiberManualRecord, Info } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Popper from "@mui/base/PopperUnstyled";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Widgets.css";
function Widgets() {
  const[data,setData]=useState(null);
  useEffect(()=>{
    async function fetchdata(){
      const res =await fetch(
        "https://newsapi.org/v2/top-headlines?category=technology&country=us&pageSize=5&apiKey=5bb5bc9eb06243c89563949ea700388c"
      );
      const fullData=await res.json();
      setData(fullData.articles);
    }
    fetchdata();
  },[]);
  
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
      </div>
      {data&&
        data.map((key)=>{
          return (
            <div>
              <Card style={{  borderRadius: "0", border: "0" }}>
                <CardContent style={{ padding: "10px" }}>
                  <Typography variant="h7" component="div">
                    {key.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{fontSize: "12px", color: "gray" }}
                  >
                    {key.description}
                  </Typography>
                  <Link
                    href={key.url}
                    underline="none"
                    target={"_blank"}
                  >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            </div>
          );
        })
      }
    </div>
  );
}

export default Widgets;
