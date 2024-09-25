<script>
  import { onMount } from 'svelte';
  import Main from "./Main.svelte";
  import Data from "./Data.svelte";
  import Footer from "./Footer.svelte";

  let sunIcon;
  let moonIcon;

  onMount(() => {
    sunIcon = document.querySelector('.sunIcon');
    moonIcon = document.querySelector('.moonIcon');

    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const iconToggle = () => {
      if (document.documentElement.classList.contains('dark')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = "block";

      } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = "none";

      }
    }

    const themeCheck = () => {
      if (!userTheme || userTheme === 'dark') {
        document.documentElement.classList.add('dark');
        moonIcon.style.display = 'none';
      } else {
        moonIcon.style.display = 'none';
      }
      iconToggle();
    }

    const themeSwitch = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      iconToggle();
    }

    sunIcon.addEventListener('click', themeSwitch);
    moonIcon.addEventListener('click', themeSwitch);

    themeCheck();
  });
</script>

<main class="max-w-5xl mx-auto">

  <div class="flex flex-wrap p-2 sm:p-10">
    <div class="absolute p-2 md:p-10 top-0 right-0  text-neutral-700 dark:text-my-light">
      <div>
        <button class="moonIcon bg-white text-neutral-700 dark:bg-my-dark dark:text-my-light">
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
        </button>
        <button class="sunIcon bg-white text-neutral-700 dark:bg-my-dark dark:text-my-light">
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
        </button>
      </div>
    </div>
    <div class="w-full sm:w-1/2">
      <Main />
    </div>
    <div class="w-full sm:w-1/2">
      <Data />
    </div>
    <div class="flex justify-between items-center w-full">
      <Footer />
    </div>
  </div>

</main>


<style>
</style>
