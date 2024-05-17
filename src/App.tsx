import { ChangeEventHandler, useState } from 'react';

const randomColor = () => Math.floor(Math.random() * 256);

export default function App() {
  const [color, setColor] = useState({ r: randomColor(), g: randomColor(), b: randomColor() });

  const onSliderChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.currentTarget;
    setColor((prev) => ({ ...prev, [id]: value }));
  };

  const copyToClipboard = async () => {
    const rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;
    await navigator.clipboard.writeText(rgb);
    alert(`Copied to clipboard: ${rgb}`);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-black"
      style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
    >
      <div className="flex gap-6 flex-col max-w-sm w-full p-8 bg-white/50 backdrop-blur-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <input
          id="r"
          type="range"
          value={color.r}
          max={255}
          min={0}
          step={1}
          onChange={onSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-[red]"
        />
        <input
          id="g"
          type="range"
          max={255}
          min={0}
          step={1}
          value={color.g}
          onChange={onSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-[green]"
        />
        <input
          id="b"
          type="range"
          value={color.b}
          max={255}
          min={0}
          step={1}
          onChange={onSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-[blue]"
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center justify-center"
          onClick={copyToClipboard}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H12C10.8954 3 10 3.89543 10 5V6.5M5 10H12C13.1046 10 14 10.8954 14 12V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{`rgb(${color.r}, ${color.g}, ${color.b})`}</span>
        </button>
      </div>
    </div>
  );
}
