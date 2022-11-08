import {useEffect, useRef, useState} from "react";

type AudioPlayerProps = {
  src: string,
  setIdPlaying: (id: number)=>void,
  idPlaying: number,
  id: number
}

function AudioPlayer({src, idPlaying, id, setIdPlaying}: AudioPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  let playerRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playerRef.current == null) return;

    playerRef.current.onloadeddata = ()=>setIsLoading(false)
    if (isPlaying && idPlaying === id) {
      playerRef.current.play();
      return    }

    playerRef.current.pause()
  }, [isPlaying, idPlaying])


  const onPlayBtnClick = (id: number) => {
    if (isPlaying) {
      setIsPlaying(idPlaying !== id)
    } else {
      setIsPlaying(true)
    }
    setIdPlaying(id)
  }

  return (
    <>
      <button onClick={() => onPlayBtnClick(id)} className={`track__button track__button--${isPlaying && idPlaying == id ? 'pause' : 'play'}`} type="button"></button>
      <div className="track__status">
        <audio src={src} ref={playerRef}></audio>
      </div>
    </>
  )
}

export default AudioPlayer
