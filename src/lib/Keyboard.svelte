<script>
  function on_key_down(event) {
    console.log("EVENT", event)
  }
</script>

<body class="mt-4 rounded-lg">
  <aside
    class="py-6 px-6 bg-cyan-600 rounded-lg grid grid-rows-[64px_repeat(5,_96px)] grid-cols-1"
  >
    <div class="bg-cyan-300 grid grid-rows-1 grid-flow-col gap-4 rounded-lg">
      <button class="bg-slate-400 text-slate-50 rounded-lg">esc</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F1</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F2</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F3</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F4</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F5</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F6</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F7</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F8</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F9</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F10</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F10</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F12</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F12</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg text-center">
        <svg
          class="mx-auto"
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.05464 5.47007C5.7235 4.86168 4.95637 4.63107 4.39199 5.03266C2.84874 6.1308 1.62604 7.63293 0.865216 9.3846C-0.0629112 11.5215 -0.250488 13.9071 0.332277 16.1628C0.915042 18.4184 2.23474 20.4147 4.08177 21.8346C5.92881 23.2545 8.19728 24.0165 10.5269 23.9997C12.8566 23.9829 15.1139 23.1883 16.9402 21.7419C18.7666 20.2956 20.0574 18.2805 20.6076 16.0167C21.1578 13.7529 20.9358 11.3701 19.977 9.24687C19.191 7.50634 17.9468 6.02199 16.3879 4.94621C15.8178 4.5528 15.0541 4.79444 14.7317 5.40754C14.4094 6.02064 14.6528 6.77161 15.2076 7.18635C16.2782 7.98669 17.1352 9.04872 17.6909 10.2792C18.4196 11.8929 18.5883 13.7038 18.1702 15.4243C17.752 17.1448 16.771 18.6763 15.383 19.7755C13.9949 20.8747 12.2794 21.4786 10.5089 21.4914C8.73833 21.5042 7.01428 20.925 5.61053 19.8459C4.20679 18.7668 3.20382 17.2496 2.76092 15.5353C2.31802 13.821 2.46058 12.0079 3.16595 10.3839C3.70384 9.14552 4.54548 8.07124 5.60441 7.25556C6.15316 6.83287 6.38578 6.07846 6.05464 5.47007Z"
            fill="#CBCBCB"
          />
          <rect
            x="9.29047"
            width="2.70968"
            height="14.7097"
            rx="1.35484"
            fill="#CBCBCB"
          />
        </svg>
      </button>
    </div>
    <div
      class="pt-4 bg-cyan-300 grid grid-row-1 grid-cols-[repeat(13,_1fr)_204px] gap-4"
    >
      <button class="bg-slate-400 text-slate-50 rounded-lg">`</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">1</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">2</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">3</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">4</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">5</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">6</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">7</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">8</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">9</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">0</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">-</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">=</button>
      <button class="w-[204px] bg-slate-400 text-slate-50 rounded-lg"
        >&#9003;</button
      >
    </div>
    <div
      class="pt-4 bg-cyan-300 grid grid-row-1 grid-cols-[204px_repeat(13,_1fr)] gap-4"
    >
      <button class="bg-slate-400 text-slate-50 rounded-lg">&#8677;</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">Q</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">W</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">E</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">R</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">T</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">Y</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">U</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">I</button>

      <button class="bg-slate-400 text-slate-50 rounded-lg">O</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">P</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">[</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">]</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">\</button>
    </div>
    <div
      class="pt-4 bg-cyan-300 grid grid-row-1 grid-cols-[198px_repeat(11,_1fr)_198px] gap-4"
    >
      <button class="bg-slate-400 text-slate-50 rounded-lg">caps lock</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">A</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">S</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">D</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">F</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">G</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">H</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">J</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">K</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">L</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">;</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">'</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">return</button>
    </div>
    <div
      class="pt-4 bg-cyan-300 grid grid-row-1 grid-cols-[246px_repeat(10,_1fr)_246px] gap-4"
    >
      <button class="bg-slate-400 text-slate-50 rounded-lg">shift</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">Z</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">X</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">C</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">V</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">B</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">N</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">M</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">,</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">.</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">/</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">shift</button>
    </div>
    <div
      class="pt-4 bg-cyan-300 grid-cols-[repeat(3,68px)_85px_1fr_85px_68px_272px] grid grid-row-1 grid-flow-col gap-4"
    >
      <button class="bg-slate-400 text-slate-50 rounded-lg">fn</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">control</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">option</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">command</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg"></button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">command</button>
      <button class="bg-slate-400 text-slate-50 rounded-lg">option</button>
      <div class="grid grid-row-2 grid-flow-col gap-4">
        <button class="row-start-2 bg-slate-400 text-slate-50 rounded-lg"
          >&larr;</button
        >
        <button class="row-start-1 bg-slate-400 text-slate-50 rounded-lg"
          >&uarr;</button
        >
        <button class="row-start-2 bg-slate-400 text-slate-50 rounded-lg"
          >&darr;</button
        >
        <button class="row-start-2 bg-slate-400 text-slate-50 rounded-lg"
          >&rarr;</button
        >
      </div>
    </div>
  </aside>
</body>

<svelte:window on:keydown={on_key_down} />
