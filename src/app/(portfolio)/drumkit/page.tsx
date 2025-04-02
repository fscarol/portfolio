'use client';

import '@/styles/drumkit.css';
import { useCallback, useEffect, useRef } from 'react';

export default function Drumkit() {
  const keyRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const playSound = (keyCode: number) => {
    const key = keyRefs.current[keyCode];
    const audio = audioRefs.current[keyCode];

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    if (key) key.classList.add('playing');

    const removeTransition = () => {
      key?.classList.remove('playing');
    };

    key?.addEventListener('transitionend', removeTransition, { once: true });
  };

  const handleClick = useCallback((keyCode: number) => {
    playSound(keyCode);
  }, []);

  const handleTouch = useCallback((e: TouchEvent, keyCode: number) => {
    e.preventDefault();
    playSound(keyCode);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    playSound(e.keyCode);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    const currentKeyRefs = keyRefs.current;

    Object.keys(currentKeyRefs).forEach((keyCodeStr) => {
      const keyCode = Number(keyCodeStr);
      const key = currentKeyRefs[keyCode];

      if (key) {
        key.addEventListener('touchstart', (e) => handleTouch(e, keyCode));
      }
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);

      Object.keys(currentKeyRefs).forEach((keyCodeStr) => {
        const keyCode = Number(keyCodeStr);
        const key = currentKeyRefs[keyCode];
        if (key) {
          key.removeEventListener('touchstart', (e) => handleTouch(e, keyCode));
        }
      });
    };
  }, [handleKeyDown, handleTouch]);

  return (
    <>
      <div className="flex flex-1 flex-wrap min-h-screen items-center justify-center bg-[url('/images/drumkit.jpeg')] bg-no-repeat bg-right-bottom bg-[length:auto_35vh]">
        <div className="block basis-full text-center">
          <h1 className="text-5xl">Drumkit</h1>
          <h2 className="text-1xl">
            Use the keyboard to start your jam and have fun!
          </h2>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[65] = el;
          }}
          onClick={() => handleClick(65)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">A</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            clap
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[65] = el;
            }}
            src="sounds/clap.wav"
          ></audio>
        </div>

        <div
          ref={(el) => {
            keyRefs.current[83] = el;
          }}
          onClick={() => handleClick(83)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">S</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            hihat
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[83] = el;
            }}
            src="sounds/hihat.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[68] = el;
          }}
          onClick={() => handleClick(68)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">D</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            kick
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[68] = el;
            }}
            src="sounds/kick.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[70] = el;
          }}
          onClick={() => handleClick(70)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">F</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            openhat
          </span>

          <audio
            ref={(el) => {
              audioRefs.current[70] = el;
            }}
            src="sounds/openhat.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[71] = el;
          }}
          onClick={() => handleClick(71)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">G</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            boom
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[71] = el;
            }}
            src="sounds/boom.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[72] = el;
          }}
          onClick={() => handleClick(72)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">H</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            ride
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[72] = el;
            }}
            src="sounds/ride.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[74] = el;
          }}
          onClick={() => handleClick(74)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">J</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            snare
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[74] = el;
            }}
            src="sounds/snare.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[75] = el;
          }}
          onClick={() => handleClick(75)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">K</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            tom
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[75] = el;
            }}
            src="sounds/tom.wav"
          ></audio>
        </div>
        <div
          ref={(el) => {
            keyRefs.current[76] = el;
          }}
          onClick={() => handleClick(76)}
          className="key cursor-pointer select-none"
        >
          <kbd className="block text-6xl">L</kbd>
          <span className="text-2xl uppercase tracking-tight text-yellow-400">
            tink
          </span>
          <audio
            ref={(el) => {
              audioRefs.current[76] = el;
            }}
            src="sounds/tink.wav"
          ></audio>
        </div>
      </div>

      <small className="block text-gray-800 text-center pb-2">
        Image designed by <a href="www.freepik.com">www.freepik.com</a>
      </small>
    </>
  );
}
