import React, { useContext } from 'react';
import LoadingBar from "react-top-loading-bar";
import FoodData from './context/FoodData';

function ProgressBar() {
    const {progress, setProgress} = useContext(FoodData);
  return (
    <>
        <LoadingBar
        color='red'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        />        
    </>
  )
}

export default ProgressBar;