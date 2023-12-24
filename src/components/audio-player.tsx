import { PauseIcon, PlayIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const activateAudio = useRef<HTMLDivElement | null>(null)

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const audioElement = audioRef.current

    const handleLoaded = () => {
      setIsLoaded(true)
    }

    audioElement?.addEventListener("loadeddata", handleLoaded)

    return () => {
      audioElement?.removeEventListener("loadeddata", handleLoaded)
    }
  }, [])

  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true)
    }

    window.addEventListener("mousedown", handleInteraction)

    return () => {
      window.removeEventListener("mousedown", handleInteraction)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      activateAudio.current?.click()
    }, 1000)
  }, [isLoaded])

  useEffect(() => {
    if (isLoaded && userInteracted) {
      setIsPlaying(true)
      audioRef.current?.play().catch((error) => {
        // Autoplay was prevented, handle it here
        console.error("Autoplay was prevented:", error)
      })
    }
  }, [isLoaded, userInteracted])

  return (
    <>
      <div onLoad={() => audioRef.current?.play()} className="w-1" />
      <audio ref={audioRef} src={src} autoPlay={true} />
      <div className="flex items-center justify-center p-3 mt-10 rounded-full w-fit ring-2 ring-ring">
        <button onClick={handleTogglePlay}>
          {isPlaying ? (
            <PauseIcon
              onClick={() => {
                audioRef.current?.pause()
              }}
            />
          ) : (
            <PlayIcon
              onClick={() => {
                audioRef.current?.play()
              }}
            />
          )}
        </button>
      </div>
    </>
  )
}

export default AudioPlayer
