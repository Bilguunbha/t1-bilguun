import Link from "next/link";
import DataJson from "../../utils/aimag.json";

export default function HomePage() {
  console.log(DataJson);

  return (
    <div className="grid grid-cols-5 gap-6 p-10 bg-black">
      {DataJson.map((item) => (
          <div key={item.id} className="border-[1px] rounded-xl h-[45px] bg-white hover:scale-105 hover:bg-gray-200 flex justify-center items-center">
            <p className="text-black">{item.country_side}</p>
          </div>
      ))}
    </div>
  );
}