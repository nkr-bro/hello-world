import Phaser from 'phaser';

export class RoomScene extends Phaser.Scene {
    private player!: Phaser.GameObjects.Rectangle;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private keys?: Record<'W' | 'A' | 'S' | 'D', Phaser.Input.Keyboard.Key>;
    private readonly speed = 200;
    private readonly computerX = 400;
    private readonly computerY = 232;
    private readonly interactDistance = 140;
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

    this.player = this.add.rectangle(400, 420, 24, 36, 0x4aa3ff).setDepth(10);

    const kb = this.input.keyboard;
    if (kb) {
        this.cursors = kb.createCursorKeys();
        this.keys = kb.addKeys('W,A,S,D') as Record<'W' | 'A' | 'S' | 'D', Phaser.Input.Keyboard.Key>;
        kb.on('keydown-E', () => {
            if (this.isNearComputer()) this.openComputer();
        });
    }
  }
  update(_time: number, delta: number) {
    const left = this.cursors?.left.isDown || this.keys?.A.isDown;
    const right = this.cursors?.right.isDown  ||  this.keys?.D.isDown;
    const up = this.cursors?.up.isDown  ||  this.keys?.W.isDown;
    const down = this.cursors?.down.isDown  || this.keys?.S.isDown;

    let dx = (right ? 1 : 0) - (left ? 1 : 0);
    let dy = (down ? 1 : 0) - (up ? 1 : 0);
    if (dx !== 0 && dy !== 0) {
      dx *= Math.SQRT1_2;
      dy *= Math.SQRT1_2;
    }

    const step = (this.speed * delta) / 1000;
    this.player.x = Phaser.Math.Clamp(this.player.x + dx * step, 20, 780);
    this.player.y = Phaser.Math.Clamp(this.player.y + dy * step, 335, 462);
  }

  private isNearComputer(): boolean {
    return (
      Phaser.Math.Distance.Between(this.player.x, this.player.y, this.computerX, this.computerY) <=
      this.interactDistance
    );
  }
}
