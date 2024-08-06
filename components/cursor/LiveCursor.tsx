import { LiveCursorProps } from '@/types/type';
import React from 'react';
import Cursor from './Cursor';
import { COLORS } from '@/constants';

export default function LiveCursor({others}: LiveCursorProps) {
   return others.map(({connectionId, presence})=>{
            if(!presence?.cursor) return null;
            return(
                <Cursor
                    key={connectionId}
                    color={COLORS[Number(connectionId) % COLORS.length]}
                    message={presence.message}
                    x={presence.cursor.x}
                    y={presence.cursor.y}
                />
            )
        });
}
