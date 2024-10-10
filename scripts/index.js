function scrollToTop(slowdownFactor = 0.1) {
  const scrollDuration = 100; // Durée du défilement en millisecondes
  const start = window.pageYOffset; // Position de départ du défilement
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / scrollDuration, 1);

    // Calcule la position en fonction du progrès et du facteur de ralentissement
    window.scrollTo(0, start * (1 - Math.pow(progress, slowdownFactor)));

    // Continue l'animation si elle n'est pas encore terminée
    if (elapsedTime < scrollDuration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
