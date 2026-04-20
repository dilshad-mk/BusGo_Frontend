import { useState, useEffect } from "react";
import DriverIcon from "../../assets/icons/driver.png";

type Bus = {
  name: string;
  locationFrom: string;
  locationTo: string;
};

const BusDetails: Bus[] = [
  {
    name: "#A-3241",
    locationFrom: "DownTown",
    locationTo: "Airport",
  },
  {
    name: "#B-4243",
    locationFrom: "Airport",
    locationTo: "DownTown",
  },
  {
    name: "#A-2231",
    locationFrom: "DownTown",
    locationTo: "Railway Station",
  },
];

type Seat = string;

const layout: (Seat | null)[][] = [
  ["1W", "2M", null, "3A", "4M", "5W"],
  [null, null, null, "6A", "7M", "8W"],
  ["9W", "10M", null, "11A", "12M", "13W"],
  ["14W", "15M", null, "16A", "17M", "18W"],
  ["19W", "20M", null, "21A", "22M", "23W"],
  ["24W", "25M", null, "26A", "27M", "28W"],
  ["29W", "30M", null, "31A", "32M", "33W"],
  ["34W", "35M", null, "36A", "37M", "38W"],
  ["39W", "40M", null, "41A", "42M", "43W"],
  [null, null, null, "44A", "45M", "46W"],
  ["47W", "48M", "49A", "50A", "51M", "52W"],
];

function SeatBooking() {
  const [currentBus, setCurrentBus] = useState();
  const [bookedSeats, setBookedSeats] = useState<string[]>([]);

  // Generate random booked seats
  const generateBookedSeats = () => {
    const allSeats = layout.flat().filter(Boolean) as string[];

    const randomBooked = allSeats.filter(() => Math.random() < 0.3);
    setBookedSeats(randomBooked);
  };

  const handleRefresh = () => {
    const randomIndex = Math.floor(Math.random() * BusDetails.length);
    setCurrentBus(BusDetails[randomIndex]);
    generateBookedSeats(); 
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div className="border py-10 px-3 rounded-md mt-0 tablet:mt-20 flex flex-col gap-3 items-center">

      {/* Bus Info */}
      {currentBus && (
        <div className="flex gap-2 text-[10px] self-start items-center ">
          <div className="bg-blue-500 flex justify-center items-center rounded-full w-7 h-7">
            <i className="fa-solid fa-bus-side text-white"></i>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <h3 className="font-bold">{currentBus.name}</h3>
              <i
                className="fa-solid fa-arrows-rotate cursor-pointer"
                onClick={handleRefresh}
              ></i>
              <span className="bg-green-400 text-[8px] text-green-800 p-1 rounded-lg">Available</span>
            </div>

            <p className="text-neutral-500">
              {currentBus.locationFrom} → {currentBus.locationTo}
            </p>
          </div>
        </div>
      )}

      {/* Driver Icon */}
      <img
        src={DriverIcon}
        alt="Driver"
        className="w-6 self-end mr-5"
      />

      {/* Seat Layout */}
      <div className="p-4 flex flex-col gap-3 border rounded-md">
        {layout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 justify-center">
            {row.map((seat, colIndex) =>
              seat ? (
                <div
                  key={seat}
                  className={`w-10 h-10 text-white flex items-center justify-center rounded text-[12px]
                    ${bookedSeats.includes(seat) ? "bg-red-400" : "bg-green-400"}
                  `}
                >
                  {seat}
                </div>
              ) : (
                <div key={colIndex} className="w-10 h-10"></div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatBooking;