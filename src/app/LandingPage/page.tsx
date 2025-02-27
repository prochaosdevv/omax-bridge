"use client";
// import React, { useState } from "react";
import React from "react";
import Header from "@/components/Header";
import { Container } from "@mui/material";
import Bridge from "@/components/Bridge";
// import AgreePopup from "@/components/AgreePopup";



const page = () => {
  // const [isModalOpen,setIsModalOpen]=useState(true)
  return (
    <div>
      <Header />
      <Container>
        <Bridge />
      </Container>
      {/* {isModalOpen&& <AgreePopup isDialogOpen={isModalOpen} setIsDialogOpen={setIsModalOpen}/>} */}
    </div>
  );
};

export default page;
