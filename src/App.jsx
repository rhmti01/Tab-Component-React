import { useState } from "react";
import "./App.css";
import { data } from "autoprefixer";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1)
  const [isShow, setIsShow] = useState(true)
  const [count , setCount] = useState(0)

  // const conditionStatus = isShow ? "hidden" : "block"
  const btnTitle = isShow ? "HIDE DATA" : "SHOW DATA"

  const handleActiveTab = (id) => {
    setActiveTab(id)
    setCount((prevState)=>prevState+1)
  }


  return (
    <>
      <button onClick={() => setIsShow((is)=>!is)} className=" my-10 p-2 bg-blue-700 font-medium rounded-md text-white ">{btnTitle}</button>
      {
        isShow ? (
            <div className="tab ">
              <div className="tab__header text-white font-semibold ">
                {tabData.map((tab) => (
                  <button onClick={() => handleActiveTab(tab.id)} key={tab.id} className={activeTab === tab.id ? "active" : " "}>
                    <span>{tab.title}</span>
                    <span className="tab-indicator"></span>
                  </button>
                ))}
              </div>
              <div className="tab__content text-white ">{tabData[activeTab - 1].content} - {count}</div>
            </div>
        ) : (
          <p className=" font-semibold text-red-600 text-xl " > closed!!! </p>
        )}
    </>
  )
}

export default App;
