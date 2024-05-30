function countdown() {
    const eventDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
  
  
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "Event has started!";
    }
  }
  
  const timerInterval = setInterval(countdown, 1000);
  
  function toggleSchedule() {
    const schedule = document.getElementById("scheduleContent");
    if (schedule.style.display === "none" || schedule.style.display === "") {
        schedule.style.display = "block";
    } else {
        schedule.style.display = "none";
    }
  }
  
  function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("tablinks")[0].click();
    countdown();
  });
  