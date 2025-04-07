"use client";

export default function FooterKontaktInfo() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-semibold mb-4 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl text-blue-200">CONTACT</h3>
      <ul className="space-y-2">
        <li className="hover:underline text-red-400 hover:text-1xl hover:text-red-500 bg-gradient-to-br to-gray-700 rounded-xl"><strong>📞 +46 761 981 11</strong></li>
        <li className="hover:underline text-gray-300 hover:text-1xl hover:text-white bg-gradient-to-br to-gray-700 rounded-xl"><strong>✉️ sm_pal_2025@info.se</strong></li>
     </ul>
    </div>
  );
}