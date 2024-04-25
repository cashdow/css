const containers = document.getElementsByClassName('thumb');
    for (var i = 0; i < containers.length; i++) {
      const container = containers[i];
      container?.addEventListener('mousemove', (e) => {
        const overlay = container.querySelector('.overlay');
        var x = e.offsetX;
        var y = e.offsetY;
        if (x <= 0 || y <= 0) {
          container.style = `transform: perspective(0px) rotateX(0deg) rotateY(0deg)`;
          return;
        }
        var rotateX = (4 / 30) * y - 20;
        var rotateY = (1 / -5) * x + 20;
        container.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        overlay.style = `background-position: ${x / 5 + y / 5}%`;
        // console.log('overlay = ', overlay);
      });
    }
