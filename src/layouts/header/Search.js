import React from "react";
import { useState } from "react";

const DashboardSearch = () => {
    // const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="relative z-50">
            <div className="bg-white  rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-80 flex items-center ">
                <div className="flex-1  px-5">
                    <input
                        type="text"
                        placeholder="Nhập từ khóa"
                        className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
                    />
                </div>
                <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            {/* {showSearch && (
                <div className="search-results w-full lg:w-[843px] absolute top-full left-0 bg-white z-50 translate-y-5 pb-6 rounded-3xl">
                    <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
                        <h4 className="pl-4 text-sm font-medium underline">
                            See all 10,124 fundraisier
                        </h4>
                        <button className="flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pb-0">
                        <div className="flex flex-col mb-6 gap-y-5">
                            <SearchItem></SearchItem>
                            <SearchItem></SearchItem>
                            <SearchItem></SearchItem>
                            <SearchItem></SearchItem>
                        </div>
                        <h3 className="mb-4 text-sm font-semibold">
                            Related searchs
                        </h3>
                        <div className="flex flex-col text-sm gap-y-3 text-text2">
                            <p>
                                <strong>education</strong> fund
                            </p>
                            <p>schoralship fund</p>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

// function SearchItem() {
//     return (
//         <div className="flex items-center gap-x-5">
//             <img
//                 src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-profile-picture&psig=AOvVaw1hV8Pmq8Aey8L5kPFJv3aj&ust=1715583876320000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiA6c_Fh4YDFQAAAAAdAAAAABAE"
//                 className="w-[50px] h-[50px] rounded-lg object-cover"
//                 alt=""
//             />
//             <div className="flex-1 text-sm">
//                 <h3 className="mb-1">
//                     <strong>Education</strong> fund for Durgham Family
//                 </h3>
//                 <p className="text-text3">By Durgham Family</p>
//             </div>
//         </div>
//     );
// }

export default DashboardSearch;
