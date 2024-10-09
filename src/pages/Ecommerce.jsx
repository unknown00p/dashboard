import React from "react";
// import resolveConfig from "tailwindcss/resolveConfig"
import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from "../components/index";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import HeroPattern from "@/assets/hero-pattern.png";

// import tailwindConfig from "@/../tailwind.config"
// const config = resolveConfig(tailwindConfig)

// const color = "red-600"
// const components = color.split("-")
// const hexCode = config.theme.textColor[components[0]][components[1]]
// console.log(hexCode)

function Ecommerce() {
  return (
    <>
      <section className="mt-24">
        <div className="mx-auto max-w-5xl overflow-hidden flex flex-wrap lg:flex-nowrap justify-center">
          {/* Hero Section */}
          <div
            className="mx-6 flex items-center dark:text-gray-200 rounded-lg dark:bg-secondary-dark-bg w-full bg-center bg-cover bg-no-repeat p-8 lg:w-2/5 lg:mx-0"
            style={{ backgroundImage: `url(${HeroPattern})` }}
          >
            <div className="flex flex-col justify-center items-start gap-3">
              <div>
                <p className="text-gray-300 text-lg tracking-wide lg:text-sm">
                  Earnings
                </p>
                <p className="text-white font-semibold text-3xl lg:text-[1.7rem] lg:font-semibold">
                  $76,874
                </p>
              </div>

              <Button
                color="blue"
                bgColor="white"
                size="lg"
                borderRadius="10px"
                text="Download"
              />
            </div>
          </div>

          {/* Revenue Cards - Hero Section */}
          <div className="w-full mt-4 px-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-3/5 lg:mt-0 lg:ml-4 lg:px-0">
            {earningData.map((item) => {
              let percentageColorClass = "";
              let percentageText = "";

              if (item.percentage > 0) {
                percentageColorClass = "text-green-600";
                percentageText = `+${item.percentage}%`;
              } else {
                percentageColorClass = "text-red-600";
                percentageText = `${item.percentage}%`;
              }

              return (
                <div
                  key={item?.id}
                  className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl dark:text-gray-200 dark:bg-secondary-dark-bg"
                >
                  <button
                    className="text-2xl p-4 rounded-full opacity-0.9 hover:drop-shadow-xl"
                    style={{
                      backgroundColor: item?.iconBg,
                      color: item?.iconColor,
                    }}
                  >
                    {item?.icon}
                  </button>

                  <div className=" mt-3 flex items-center gap-2">
                    <p className="text-lg font-semibold">
                      {item?.amount}
                    </p>
                    <p className={`text-sm ${percentageColorClass}`}>
                      {percentageText}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    {item?.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue Earning Section */}
        <div className="px-6 flex justify-center items-center mt-4 py-8 bg-red-500">
          <div className="max-w-5xl w-full bg-white rounded-xl flex justify-between">
            <p className="texdt-xl m-4 text-gray-600 font-semibold">
              Revenue Expense
            </p>

            <div>
              <p>Earnings</p>
              <p>Budget</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ecommerce;
