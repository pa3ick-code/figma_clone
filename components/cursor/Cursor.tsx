import CursorSVG from "@/public/assets/CursorSVG";

type Props = {
    color: string,
    message: string,
    x: number,
    y: number,
}

export default function Cursor({color, message, x, y}: Props) {
  return (
    <div 
        className="pointer-events-none absolute top-0 left-0"
        style={{transform: `translateX(${x}px) translateY(${y}px)`}}
    >
        <CursorSVG color={color}/>
      {/* Message */}
    </div>
  );
}
