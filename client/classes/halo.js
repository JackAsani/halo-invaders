function Halo() {
  this.x = WIDTH / 2;
  this.y = HEIGHT / 2;
  this.r = HEIGHT / 3;
  this.health = HALO_HEALTH;
  this.transparency = 1;
  this.redBuffer = 0;
  this.blueBuffer = 0;

  this.line_x = WIDTH / 2;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI / 2, (3 * Math.PI) / 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(52, 161, 235, " + this.transparency + ")";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(235, 52, 52, " + this.transparency + ")";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.line_x, HEIGHT);
    ctx.lineTo(this.line_x, 0);
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  };

  this.fade = function () {
    if (this.r > 50) {
      this.r -= 0.075;
      this.transparency -= 0.0025;
      textTransparency -= 0.005;
    }
  };

  this.hasHealth = function () {
    return this.health > 0;
  };

  this.takeDamage = function (damage, invader_x) {
    if (invader_x < this.line_x) {
      this.line_x -= 10;
    } else {
      this.line_x += 10;
    }

    this.health -= damage;
  };
}
