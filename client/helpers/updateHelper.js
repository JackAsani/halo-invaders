function updateHealthPacks() {
  for (var i = 0; i < healthPacks.length; i++) {
    var healthPack = healthPacks[i];
    healthPack.update();
    if (itemsLineup(player, healthPack)) {
      player.pickup(healthPack, i);
    }
  }
}

function updateAmmoPacks() {
  for (var i = 0; i < ammoPacks.length; i++) {
    var ammoPack = ammoPacks[i];
    ammoPack.update();
    if (itemsLineup(player, ammoPack)) {
      player.pickup(ammoPack, i);
    }
  }
}

function updateBullets() {
  for (var i = 0; i < bullets.length; i++) {
    bullet = bullets[i];
    if (bullet.hasReachedPortal()) {
      bullets.splice(i, 1);
    } else {
      bullet.update();
    }
  }
}

function updateInvaders() {
  for (var i = 0; i < invaders.length; i++) {
    invader = invaders[i];

    for (var j = 0; j < bullets.length; j++) {
      var bullet = bullets[j];
      if (bullet.hitTarget(invader)) {
        invaders.splice(i, 1);
        bullets.splice(j, 1);
        score++;
        return true;
      }
    }

    if (invader.hasReachedHalo() && halo.hasHealth()) {
      invaders.splice(i, 1);
      damage = invader.attackPower;
      halo.takeDamage(damage, invader.x);
    } else {
      invader.update();
    }
  }
}

function updatePlayer() {
  player.update();
}
