var config = {
  type: Phaser.AUTO,
  width: 1366,
  height: 768,
  parent: "gameDiv",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", "./assets/favicon.png");
  this.load.image("sky", "./assets/back.png");
  this.load.image("red", "./assets/favicon.png");
}

function create() {
  this.add.image(400, 300, "sky");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 150,
    scale: { start: 0.25, end: 0 },
    blendMode: "ADD",
  });

  var logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);
  logo.setScale(0.5);

  emitter.startFollow(logo);
}
