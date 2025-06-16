import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 p-6 font-sans">
      <h1  className="block text-lg font-bold text-white mb-2 items-center" >Real time Input Displayer</h1>
      <div className="max-w-xl mx-auto">
        <label htmlFor="input" className="block text-lg font-bold text-white mb-2">
          Type something:
        </label>
        <textarea
          id="input"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-slate-950  p-4 border border-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-base text-white"
          placeholder="Type here... (Enter for new line, Spacebar for multiple spaces)"
        ></textarea>

        <div className="mt-6">
          <p className="text-lg font-medium text-white mb-2">You typed:</p>
          <div className="whitespace-pre-wrap p-4 bg-slate-950 border border-white rounded-md text-white min-h-[6rem]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

