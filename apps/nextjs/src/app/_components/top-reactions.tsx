import React, { useMemo } from "react";

import type { Reaction } from "@acme/db/interfaces";
import { cn } from "@acme/ui";

interface TopReactionsProps {
  reactions: Reaction | null;
}

const emojis = {
  confused: "😕",
  eyes: "👀",
  heart: "❤️",
  hooray: "🎉",
  laugh: "😆",
  minusOne: "👎",
  rocket: "🚀",
  plusOne: "👍",
} satisfies Record<keyof Omit<Reaction, "total_count" | "url" | "id">, string>;

const TopReactions = ({ reactions }: TopReactionsProps) => {
  const topReactions = useMemo(() => {
    if (!reactions) return [];

    const { total_count, url, id, ...rest } = reactions;

    return Object.entries(rest)
      .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
      .slice(0, 2)
      .filter(([_, count]) => count && count > 0);
  }, [reactions]);

  if (!reactions?.total_count)
    return (
      <div>
        <div className="flex items-center gap-1">uwu</div>
      </div>
    );
  return (
    <div className="relative flex w-fit items-center gap-1">
      {reactions?.total_count}
      <div className="mb-1 flex items-center">
        {topReactions.map(([reaction], index) => (
          <span key={reaction} className={cn(" z-10 h-4 w-4 rounded-full", index === 1 && " z-[2] opacity-25")}>
            {emojis[reaction as keyof typeof emojis]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopReactions;
