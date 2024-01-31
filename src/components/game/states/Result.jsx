import CricleCheck from "@/components/icons/CricleCheck"
import CricleXmark from "@/components/icons/CricleXmark"
import { usePlayerContext } from "@/context/player"
import { useEffect } from "react"

export default function Result({
  data: { correct, message, points, myPoints, totalPlayer, rank },
}) {
  const { dispatch } = usePlayerContext()

  useEffect(() => {
    dispatch({
      type: "UPDATE",
      payload: { points: myPoints },
    })
  }, [])

  return (
    <section className="max-w-7xl mx-auto w-full flex-1 relative items-center justify-center flex flex-col">
      {correct ? (
        <CricleCheck className="max-h-60 aspect-square w-full" />
      ) : (
        <CricleXmark className=" max-h-60 aspect-square w-full" />
      )}
      <h2 className="text-white font-bold text-4xl mt-1 drop-shadow-lg">
        {message}
      </h2>
      {correct && (
        <span className="py-2 px-4 text-white font-bold text-2xl drop-shadow-lg bg-black/40 rounded mt-2">
          +{points}
        </span>
      )}
    </section>
  )
}