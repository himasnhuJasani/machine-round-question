"use client"
import React, { useState } from "react";
import './index.css'
import Link from "next/link";
function Cell({ filled, onClick, disable, label }:any) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disable}
      aria-label={label}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}
const Question1 = () => {
  const gridBox = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const [demoArra1, setDemoarray] = useState<any>([]);
  const [isDeactivating, setisDeactivating] = useState<any>(false);
  const handleClick = (index: any) => {
    const array1 = [...demoArra1, index];
    setDemoarray(array1);
    if (array1.length === gridBox.flat(1).filter(Boolean).length) {
      handlePop();
    }
  };
  const handlePop = () => {
    setisDeactivating(true);
    const timer = setInterval(() => {
      setDemoarray((demoArra1 :any) => {
        const array = demoArra1.slice();
        array.pop();
        if (demoArra1.length == 0) {
          clearInterval(timer);
          setisDeactivating(false);
        }
        return array;
      });
    }, 1000);
  };
  return (
    <>
      <Link href= '/'> Wapas ja.. </Link>
      <div className="wrapper">
        <div className="box">
          {gridBox.flat(1).map((row, index1) => {
            return row ? (  
              <Cell
                key={index1}
                label = {`Cell ${index1}`}
                disable={demoArra1.includes(index1) || isDeactivating}
                filled={demoArra1.includes(index1)}
                onClick={() => handleClick(index1)}
              />
            ) : (
              <span />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Question1;
