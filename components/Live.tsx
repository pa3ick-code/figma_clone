import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import LiveCursor from "./cursor/LiveCursor";
import { useCallback } from "react";

export default function Live() {
    const others = useOthers();
    const [{ cursor }, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((e: React.PointerEvent)=>{
        e.preventDefault();
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: { x, y }})
    },[]);
    
    const handlePointerLeave = useCallback((e: React.PointerEvent)=>{
        e.preventDefault();
        updateMyPresence({cursor: null, message: null})
    },[]);

    const handlePointerDoown = useCallback((e: React.PointerEvent)=>{
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;
        updateMyPresence({cursor: { x, y }})
    },[]);

  return (
    <div
        className="h-screen w-full flex justify-center items-center"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDoown}
    >
      <h1 className="text-2xl text-white">Figma Clone</h1>
      <LiveCursor others={others}/>
    </div>
  );
}
