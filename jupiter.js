"use strict";
// Positions ball 🔵
let ball = {
  size: 10,
  position_x: 35,
  position_y: 270,
  end_angle: 0,
  velocity: 2,
  direction_y: 1,
  direction_x: 1,
};

// Postion bouncer 🟥
let bouncer = {
  position_x: 10,
  position_y: 560,
  width: 170,
  height: 25,
  direction_y: 1,
};

let lost_game = false;

let restart = false;
document.addEventListener("keydown", game_change);

let paused = false;

// Tableau de briques 🧱
let brick_table = [
  {
    position_x: 60,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 70,
    width: 70,
    height: 25,
  },
  // ------SECONDE LIGNE------------------
  {
    position_x: 60,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 110,
    width: 70,
    height: 25,
  },
  // ------TROISIEME LIGNE------------------
  {
    position_x: 60,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 150,
    width: 70,
    height: 25,
  },
  // ------TROISIEME LIGNE------------------
  {
    position_x: 60,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 190,
    width: 70,
    height: 25,
  },
  // ------QUATRIEME LIGNE------------------
  {
    position_x: 60,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 230,
    width: 70,
    height: 25,
  },
];
const back_up_brick_table = [
  {
    position_x: 60,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 70,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 70,
    width: 70,
    height: 25,
  },
  // ------SECONDE LIGNE------------------
  {
    position_x: 60,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 110,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 110,
    width: 70,
    height: 25,
  },
  // ------TROISIEME LIGNE------------------
  {
    position_x: 60,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 150,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 150,
    width: 70,
    height: 25,
  },
  // ------TROISIEME LIGNE------------------
  {
    position_x: 60,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 190,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 190,
    width: 70,
    height: 25,
  },
  // ------QUATRIEME LIGNE------------------
  {
    position_x: 60,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 140,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 220,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 300,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 380,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 460,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 540,
    position_y: 230,
    width: 70,
    height: 25,
  },
  {
    position_x: 620,
    position_y: 230,
    width: 70,
    height: 25,
  },
];

// Dessin du canvas ⏬
let canvasDom;
let ctx;
let animationId;

document.addEventListener("DOMContentLoaded", () => {
  /*CANVAS */
  canvasDom = document.getElementById("canvasId");
  ctx = canvasDom.getContext("2d");
  document.addEventListener("keydown", move_bouncer);
  playGame();
});

function playGame() {
  animationId = requestAnimationFrame(playGame);
  move_ball();
}

function move_ball() {
  gameOver();
  game_is_paused();
  reset();
  brick_wall();

  ball.position_y += ball.velocity * ball.direction_y;
  ball.position_x += ball.velocity * ball.direction_x;
  // Calcul vitesse de la ball.position_x: (40 + 3 * 1) 🔵📈 // INCREMENTATION

  if (ball.position_x <= 0 || ball.position_x >= 800) {
    ball.direction_x *= -1;
  }

  if (ball.position_y <= 0 || ball.position_y >= 600) {
    ball.direction_y *= -1;
    // Inversement de la direction de la balle si elle touche un bord ⏫🟦
  }

  if (
    ball.position_y + ball.size >= bouncer.position_y &&
    ball.position_x + ball.size >= bouncer.position_x &&
    ball.position_x + ball.size <= bouncer.position_x + bouncer.width
  ) {
    ball.direction_y *= -1;
    ball.velocity += 0.05;
    // 🚋🚋🚋🚋🚋🚋
  }
  draw_ball();
  style_bouncer();
  draw_brick_wall();
}

function brick_wall() {
  for (let index = 0; index < brick_table.length; index++) {
    if (
      ball.position_y + ball.size <=
        brick_table[index].position_y + brick_table[index].height &&
      ball.position_y + ball.size > brick_table[index].position_y &&
      ball.position_x + ball.size >= brick_table[index].position_x &&
      ball.position_x + ball.size <=
        brick_table[index].position_x + brick_table[index].width
    ) {
      ball.direction_y *= -1;
      ball.velocity += 0.05;
      // 🚋🚋🚋🚋🚋🚋

      brick_table.splice(index, 1);
      // ⬆️ tant qu'il y a des briques/objets dans le tableau => on vérifie s'il y a collision et on ajoute de la vitesse
      // Tout en détruisant les briques si elles sont touchées et on affiche un msg dans la console
    }
  }
}

// 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻

function reset() {
  if (restart == true) {
    bouncer.position_x = 10;
    bouncer.position_y = 560;
    ball.position_x = 35;
    ball.position_y = 270;
    ball.velocity = 2;

    if (ball.velocity !== 2) {
      ball.velocity = 2;
    }

    ball.direction_x = 1;
    ball.direction_y = 1;

    brick_table.length = 0;
    brick_table = [...back_up_brick_table];
    // Copie des éléments du tableau depuis back_up_brick_table
    restart = false;
  }
}
// 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺

function gameOver() {
  if (ball.position_y >= 600) {
    console.log("Game over");
    cancelAnimationFrame(animationId);
    lost_game = true;
    // 👎👎👎
  }
}

function game_is_paused() {
  if (brick_table.length <= 0) {
    console.log("You win");
    cancelAnimationFrame(animationId);
    // 👍👍👍
  }
  if (paused == true) {
    cancelAnimationFrame(animationId);
  }
}

function move_bouncer(e) {
  // on détecte la touche et la direction puis on change les coordonnées ⬅️➡️
  switch (e.key) {
    case "ArrowRight":
      if (bouncer.position_x < 610)
        bouncer.position_x = bouncer.position_x + 3 * 10;

      break;
    case "ArrowLeft":
      if (bouncer.position_x > 10)
        bouncer.position_x = bouncer.position_x - 3 * 10;
      break;
  }
}

function style_bouncer() {
  ctx.fillStyle = "red";
  ctx.fillRect(
    // ✍️🟥
    bouncer.position_x,
    bouncer.position_y,
    bouncer.width,
    bouncer.height
  );
}

// DESSIN DE LA BALLE ✍️
function draw_ball() {
  ctx.clearRect(0, 0, 800, 600);
  ctx.beginPath();
  ctx.arc(
    // ✍️🔵
    ball.position_x,
    ball.position_y,
    ball.size,
    ball.end_angle,
    2 * Math.PI
  );
  ctx.fillStyle = "blue";
  ctx.fill();
}

function draw_brick_wall() {
  ctx.fillStyle = "brown";
  for (let index = 0; index < brick_table.length; index++) {
    ctx.fillRect(
      brick_table[index].position_x,
      brick_table[index].position_y,
      brick_table[index].width,
      brick_table[index].height
    );
  }
}

// Barre espace pour recommencer le jeux ♻️

let gameRunning = false;

function game_change(a) {
  if (a.code == "Space") {
    location.reload();
  }
}
