"use client";

export default function FooterAdressInfo() {
  return (
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-2xl font-semibold mb-4 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl text-blue-200">ADDRESS</h3>
        <ul className="space-y-2">
            <li className="text-red-400 bold bg-gradient-to-br to-gray-700 rounded-xl"><strong>📍 Projektgrändgatan 11</strong></li>
            <li className="text-red-400 bold bg-gradient-to-br to-gray-700 rounded-xl text-center"><strong> 543 21 Gasumawi </strong></li>
        </ul>
 </div>
  );
}
