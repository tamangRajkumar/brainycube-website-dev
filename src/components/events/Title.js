import next from "next";
import React from "react";
import Link from 'next/link'

function Title({ title }) {
  return (
    <div style={{ background: "#009970", color: "white", display: "flex" ,justifyContent:"space-between",alignItems:"center"}}>
      <h2 className="text-2xl font-raleway font-bold text-center p-4" style={{marginLeft:"30px"}} >
        {title.title}
      </h2>
      <Link href="/">
      <h3 className="text-1xl font-raleway font-bold text-center p-4" style={{marginRight:"20px"}}>
        Home
      </h3>
      </Link>
    </div>
  );
}
export default Title;
