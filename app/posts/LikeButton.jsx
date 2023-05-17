'use client';
import { useState } from 'react';

export function LikeButton({ id }) {
  const [liked, setLiked] = useState();
  return (
    <button
      className="bg-slate-600 rounded-lg p-1"
      onClick={() => setLiked(!liked)}
    >
      {liked ? '💖' : '🖤'}
    </button>
  );
}
