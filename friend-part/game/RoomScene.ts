import Phaser from 'phaser';

export class RoomScene extends Phaser.Scene {
  constructor(private readonly openComputer: () => void) {
    super('room');
  }

  create() {
    this.add.rectangle(400, 240, 800, 480, 0x172333);
    this.add.rectangle(400, 390, 800, 180, 0x273747);
    this.add.rectangle(400, 310, 340, 24, 0xa47954);
    this.add.rectangle(260, 370, 18, 100, 0x795439);
    this.add.rectangle(540, 370, 18, 100, 0x795439);
    this.add.rectangle(400, 240, 150, 110, 0xd0d1bc);
    const screen = this.add.rectangle(400, 232, 126, 78, 0x163e37).setInteractive({ useHandCursor: true });
    this.add.text(350, 220, 'HELLO, WEB', { fontFamily: 'monospace', fontSize: '16px', color: '#8af5bf' });
    this.add.rectangle(400, 294, 100, 12, 0xd0d1bc);
    this.add.text(28, 28, '1995 / YOUR FIRST COMPUTER', { fontFamily: 'monospace', fontSize: '22px', color: '#e8e8cf' });
    this.add.text(400, 438, 'Click the screen or press E', { fontFamily: 'monospace', fontSize: '18px', color: '#b3c3d5' }).setOrigin(0.5);
    screen.on('pointerdown', this.openComputer);
    this.input.keyboard?.on('keydown-E', this.openComputer);
  }
}
