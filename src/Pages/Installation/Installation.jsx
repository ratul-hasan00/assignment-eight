import React, { useEffect, useState } from "react";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const appToRemove = installedApps.find((app) => app.id === id);
    const updatedApps = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success(`Successfully Uninstalled ${appToRemove.title}!!`);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sortedApps = [...installedApps];
    if (order === "High To Low") {
      sortedApps.sort((a, b) => b.size - a.size);
    } else if (order === "Low To High") {
      sortedApps.sort((a, b) => a.size - b.size);
    } else {
 
      sortedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    }
    setInstalledApps(sortedApps);
  };

  if (installedApps.length === 0) {
    return (
      <div className="bg-[#d9d9d980] min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[#001931] font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-center pt-10 sm:pt-12">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] opacity-70 text-center text-sm sm:text-base md:text-lg mb-10">
          No apps installed yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#d9d9d980] pb-10">
      <div>
        <h1 className="text-[#001931] font-bold text-3xl sm:text-4xl md:text-5xl mb-2 pt-10 text-center">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] opacity-70 text-sm sm:text-base md:text-lg lg:text-xl mb-10 text-center">
          Explore all trending apps on the Market developed by us
        </p>
      </div>


      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-10 px-4 sm:px-6">
        <div className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          ({installedApps.length}) App{installedApps.length !== 1 ? "s" : ""} Found
        </div>

        <div>
          <fieldset className="fieldset w-full sm:w-auto">
            <select
              onChange={handleSortChange}
              value={sortOrder}
              className="select border-none font-semibold w-full sm:w-auto"
            >
              <option value="default">Sort By Size</option>
              <option value="High To Low">High To Low</option>
              <option value="Low To High">Low To High</option>
            </select>
          </fieldset>
        </div>
      </div>


      <div className="flex flex-col gap-6 max-w-[1200px] mx-auto">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 sm:p-4 rounded-2xl shadow-xs"
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center">
              <img
                className="w-[70px] sm:w-[90px] rounded-3xl shadow-md"
                src={app.image}
                alt={app.title}
              />
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold mb-2">{app.title}</h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center sm:justify-start">
                  <p className="text-[#00d390] font-semibold flex gap-2 items-center text-sm sm:text-base">
                    <img className="h-[16px] sm:h-[20px]" src={download} alt="" />{" "}
                    {app.downloads}M
                  </p>
                  <p className="text-[#ff8811] font-semibold flex gap-2 items-center text-sm sm:text-base">
                    <img className="h-[16px] sm:h-[20px]" src={rating} alt="" />{" "}
                    {app.ratingAvg}
                  </p>
                  <p className="text-[#627382] font-semibold text-sm sm:text-base">
                    {app.size} MB
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="btn bg-[#ff4d4f] text-white border-none rounded-lg px-5 sm:px-7 py-2 sm:py-3 mt-4 sm:mt-0"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
