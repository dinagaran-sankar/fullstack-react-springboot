import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg font-bold mt-5 text-blue-700">
        Tailwind Learninde Demo
      </p>
      <div className="bg-gray-300 p-4 m-4  border-1 rounded-md font-bold">
        BackGround Demo
      </div>
      <div className="bg-green-300 border-1 border-x-black-300 rounded-lg p-4 m-4 font-bold">
        Border Practice
      </div>
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="bg-blue-200 p-4 text-red-500">1</div>
        <div className="bg-blue-400 p-4 text-black">2</div>
        <div className="bg-blue-600 p-4 text-white">3</div>
      </div>
      <div className="flex justify-center items-center gap-4 h-20 bg-gray-300 m-4">
        <div className="text-3xl font-bold">text-1</div>
        <div className="text-3xl font-bold">text-2</div>
        <div className="text-3xl font-bold">text-4</div>
      </div>
      <table className="table-auto w-full m-4 border-gray-300 border-collapse shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 uppercase text-gray-700 text-sm leading-normal">
            <th className="border-gray-300 px-4 py-4 text-center">Song</th>
            <th className="border-gray-300 px-4 py-4 text-center">Artist</th>
            <th className="border-gray-300 px-4 py-4 text-center">Year</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-6 py-3 border border-gray-300">
              Malcolm Lockyer
            </td>
            <td className="px-6 py-3 border border-gray-300">1961</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">Witchy Woman</td>
            <td className="px-6 py-3 border border-gray-300">The Eagles</td>
            <td className="px-6 py-3 border border-gray-300">1972</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
            <td className="px-6 py-3 border border-gray-300">Shining Star</td>
            <td className="px-6 py-3 border border-gray-300">
              Earth, Wind, and Fire
            </td>
            <td className="px-6 py-3 border border-gray-300">1975</td>
          </tr>
        </tbody>
      </table>

      <button className="px-6 py-2 m-4 bg-blue-200 rounded-lg text-white  hover:bg-blue-800  transition duration-300">
        Click me
      </button>
      <button className="px-6 py-2 m-4 bg-green-200 rounded-lg text-white  hover:bg-green-800  transition duration-500 ease-in-out transform hover:scale-110">
        Answer me
      </button>
      <div className="bg-purple-200 p-4 m-4  max-w-sm rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold mb-4 ">Tailwind css Card</h1>
        <p className="text-gray-700">Card Sample Text</p>
        <button className="px-6 py-2 m-4 bg-blue-200 rounded-lg text-white  hover:bg-blue-800  transition duration-300">
          ReadMore..
        </button>
      </div>
      {/* customize styles */}
      <div className="bg-[#ff5733] h-[165px] w-[285px] border-red-600 px-6 py-3 m-4 rounded-lg text-lg flex justify-center items-center">
        border demo
      </div>

      <div className="bg-nelli-500 font-nelli h-40 max-w-sm flex justify-center items-center border-orange-300 px-6 py-4 m-4">
        Example Demo
      </div>
    </>
  );
}

export default App;
