import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { RoomScene } from '../game/RoomScene';

export function GameCanvas({ onOpen }: { onOpen: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: host.current,
      width: 800,
      height: 480,
      backgroundColor: '#172333',
      scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
      scene: new RoomScene(onOpen),
    });
    return () => game.destroy(true);
  }, [onOpen]);
  return <div className="game" ref={host} aria-label="Комната с компьютером. Открыть компьютер можно кнопкой ниже." />;
}
