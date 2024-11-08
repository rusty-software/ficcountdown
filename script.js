const countdown = () => {
  const electionCalledDate = new Date("November 6, 2024 00:00:00").getTime();
  const targetDate2025 = new Date("January 20, 2025 00:00:00").getTime();
  const targetDate2029 = new Date("January 19, 2029 00:00:00").getTime();

  let currentTargetDate = targetDate2025;

  const updateHeaderAndSubtitle = (targetDate) => {
    const targetDateString = targetDate === targetDate2025 ? "January 20, 2025" : "January 19, 2029";
    document.getElementById("header-title").innerText = `Countdown to ${targetDateString}`;
    document.title = `Countdown to ${targetDateString}`;

    const subtitle = targetDate === targetDate2025 ?
      "Tracking time until Fumbler-in-Chief takes office." :
      "Tracking time until Fumbler-in-Chief leaves office.";

    document.getElementById("subtitle").innerText = subtitle;
  };
  updateHeaderAndSubtitle(currentTargetDate);

  setInterval(() => {
    const now = new Date().getTime();

    if (now >= targetDate2025 && currentTargetDate === targetDate2025) {
      currentTargetDate = targetDate2029;
      updateHeaderAndSubtitle(currentTargetDate);
    }

    const remainingTime = currentTargetDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    let totalDuration;
    let elapsedTime;

    if (currentTargetDate === targetDate2025) {
      totalDuration = targetDate2025 - electionCalledDate;
      elapsedTime = now - electionCalledDate;
    } else {
      totalDuration = targetDate2029 - targetDate2025;
      elapsedTime = now - targetDate2025;
    }

    const progressPercentage = Math.min((elapsedTime / totalDuration) * 100, 100);

    document.getElementById("progress-bar").style.width = `${progressPercentage}%`;

  }, 1000);
};

countdown();