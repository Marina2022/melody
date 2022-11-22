import {useSelector} from "react-redux";
import {useAppSelector} from "../hooks";
import {nanoid} from "@reduxjs/toolkit";

function Mistakes(): JSX.Element {
  const mistakes = useAppSelector(state => state.mistakes)
  const mistakesArray = Array.from({length: mistakes}, () => '')
  return (
    <div className="game__mistakes">
      {
        mistakesArray.map(item => <div  key={nanoid()} className="wrong"></div>)
      }
    </div>
  )
}

export default Mistakes
