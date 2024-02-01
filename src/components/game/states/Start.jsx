import { useSocketContext } from "@/context/socket"
import { useState } from "react"

export default function Start({ data: { text, inviteCode } }) {
  const { socket } = useSocketContext()
  const [playerList, setPlayerList] = useState([])

  socket.on("manager:newPlayer", (player) => {
    setPlayerList([...playerList, player])
  })

  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-2">
      <div className="mb-10 rotate-3 rounded-md bg-white px-6 py-4 text-6xl font-extrabold">
        {inviteCode}
      </div>

      <h2 className="mb-4 text-4xl font-bold text-white drop-shadow-lg">
        {text}
      </h2>

      <div className="flex flex-wrap gap-3">
        {playerList.map((player) => (
          <div
            key={player.id}
            className="shadow-inset rounded-md bg-primary px-4 py-3 font-bold text-white"
            onClick={() => socket.emit("manager:kickPlayer", player.id)}
          >
            <span className="cursor-pointer text-xl drop-shadow-md hover:line-through">
              {player.username}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
