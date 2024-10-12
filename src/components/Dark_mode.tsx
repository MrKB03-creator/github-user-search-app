import React, { useState } from "react";
import {
  iconSearch,
  githubIconDarkmode,
} from "../assets/Images";

const Dark_mode = ({ toggleMode }: { toggleMode: () => void }) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userNotFound, setUserNotFound] = useState(false);

  interface UserData {
    avatar_url: string;
    bio: string | null;
    name: string;
    login: string;
    location: string | null;
    twitter_username: string | null;
    blog: string;
    company: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
  }

  // Function to fetch the user data
  const fetchUserData = () => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.status === 404) {
            setUserNotFound(true);
            setUserData(null);
            return null;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          if (data) {
            setUserData(data);
            setUserNotFound(false);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
          setUserNotFound(true);
        });
    }
  };

  // Function to handle the input
  const hanldleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // Function to handle the search button
  const handleSearch = () => {
    fetchUserData();
  };

  // Function to format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-Darkmode_backgroundMain">
      <div className="lg:w-[730px] md:w-[563px] max-sm:w-[327px] h-auto flex flex-col">
        {/* Header */}
        <header className="flex flex-row justify-between w-full mb-9">
          <h1 className="font-bold text-[26px] leading-[38px] text-Darkmode_Text">
            devfinder
          </h1>
          <button
            className="flex flex-row gap-4 cursor-pointer text-Darkmode_Text hover:text-[#90A4D4]"
            onClick={toggleMode}
          >
            <p className="text-[13px] font-bold leading-6 text-current">
              LIGHT
            </p>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor" fill-rule="nonzero">
                <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
              </g>
            </svg>
          </button>
        </header>

        <main>
          {/* Search Section */}
          <section className="w-full h-[69px] p-[10px] bg-Darkmode_backgroundContainer rounded-[15px] flex flex-row justify-between items-center shadow-lg shadow-Lightmode_Shadow mb-[24px]">
            <div className="flex fle-row ml-[22px] w-[60%] justify-around max-sm:ml-[10px]">
              <img
                src={iconSearch}
                alt="search icon"
                className="w-6 h-6 max-sm:w-5 max-sm:h-5"
              />
              <input
                type="text"
                value={username}
                onChange={hanldleInput}
                placeholder="Search GitHub username..."
                className="w-[85%] text-[18px] text-Darkmode_Text font-normal outline-none max-sm:text-[12px] bg-transparent"
              />
            </div>
            <p
              className={`w-[20%] text-[#F74646] text-[15px] font-bold max-sm:text-[12px] ${
                userNotFound ? "block" : "hidden"
              }`}
            >
              No results
            </p>
            <button
              onClick={handleSearch}
              className="h-[50px] w-[20%] bg-Blue rounded-[10px] text-white hover:bg-[#60ABFF] max-sm:text-[14px] max-sm:w-[25%]"
            >
              Search
            </button>
          </section>

          {/* User Profile */}

          <section className="w-full bg-Darkmode_backgroundContainer rounded-[15px] p-[32px] shadow-lg flex flex-col lg:relative lg:h-[444px]">
            <div className="flex md:flex-row">
              <img
                src={
                  userData?.avatar_url
                    ? userData?.avatar_url
                    : githubIconDarkmode
                }
                alt="User Profile"
                className="w-[117px] h-[117px] rounded-full mr-[37px] max-sm:w-[70px] max-sm:h-[70px] max-sm:mr-[19px] "
              />
              <div className="flex flex-col w-full ">
                <div className="flex justify-between mb-[2px] lg:flex-row md:flex-col max-sm:flex-col ">
                  <div className="flex-block">
                    <h1
                      className={`text-[26px] font-bold leading-[38px] ${
                        userData?.name ? "text-Darkmode_Text" : "text-[#A5B4CD]"
                      } max-sm:text-[16px] max-sm:leading-4`}
                    >
                      {userData?.name ? userData?.name : "Not Available"}
                    </h1>
                    <h3
                      className={`text-base ${
                        userData?.name ? "text-Blue" : "text-[#A5B4CD]"
                      } max-sm:text-[13px]`}
                    >
                      @{userData?.login ? userData.login : "Not Available"}
                    </h3>
                  </div>
                  <p
                    className={`text-[15px] ${
                      userData?.created_at
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } max-sm:text-[13px]`}
                  >
                    Joined{" "}
                    {userData?.created_at
                      ? formatDate(userData.created_at)
                      : "Not Available"}
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile Bio */}
            <div className="lg:absolute left-[25%] top-[22%]">
              <h2
                className={`text-[15px] ${
                  userData?.bio ? "text-Darkmode_Text" : "text-[#A5B4CD]"
                } my-5`}
              >
                {userData?.bio ? userData.bio : "Not Available"}
              </h2>

              {/* User Profile Stats */}
              <div className="bg-Darkmode_backgroundMain rounded-[10px] flex flex-row justify-start gap-24 items-center px-[32px] h-[85px] max-sm:gap-0 max-sm:text-center max-sm:justify-between">
                <div>
                  <h4 className="text-[13px] text-Darkmode_Text leading-6 max-sm:text-[11px]">
                    Repos
                  </h4>
                  <p
                    className={`${
                      userData?.public_repos
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } text-[22px] font-bold max-sm:text-[16px]`}
                  >
                    {userData?.public_repos ? userData.public_repos : "0"}
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] text-Darkmode_Text leading-6 max-sm:text-[11px]">
                    Followers
                  </h4>
                  <p
                    className={`${
                      userData?.followers
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } text-[22px] font-bold max-sm:text-[16px]`}
                  >
                    {userData?.followers ? userData.followers : "0"}
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] text-Darkmode_Text leading-6 max-sm:text-[11px]">
                    Following
                  </h4>
                  <p
                    className={`${
                      userData?.following
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } text-[22px] font-bold max-sm:text-[16px]`}
                  >
                    {userData?.following ? userData.following : "0"}
                  </p>
                </div>
              </div>

              {/* User Profile Info */}
              <div className="w-full mt-[37px]">
              <table className="flex flex-row justify-between max-sm:flex-col">
                  <tr>
                    <td
                      className={`flex flex-row items-center gap-5 mb-[15px] max-sm:mb-[17px] ${
                        userData?.location
                          ? "text-Darkmode_Text"
                          : "text-[#8E94A3]"
                      }`}
                    >
                      <svg
                        height="20"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                          fill="currentColor"
                        />
                      </svg>
                      <p>
                        {userData?.location
                          ? userData.location
                          : "Not Available"}
                      </p>
                    </td>
                    <td
                      className={`flex flex-row items-center gap-3.5 cursor-pointer max-sm:mb-[17px] ${
                        userData?.blog
                          ? "text-Darkmode_Text"
                          : "text-[#8E94A3]"
                      }`}
                    >
                      <svg
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="currentColor">
                          <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                          <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
                        </g>
                      </svg>
                      <p>
                        <a
                          href={userData?.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {userData?.blog ? userData.blog : "Not Available"}
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`flex flex-row items-center gap-5 mb-[15px]  max-sm:mb-[17px] ${
                        userData?.twitter_username
                          ? "text-Darkmode_Text"
                          : "text-[#8E94A3]"
                      }`}
                    >
                      <svg
                        height="18"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                          fill="currentColor"
                        />
                      </svg>
                      <p>
                        {userData?.twitter_username
                          ? userData.twitter_username
                          : "Not Available"}
                      </p>
                    </td>
                    <td
                      className={`flex flex-row items-center gap-5 max-sm:mb-[17px] ${
                        userData?.company
                          ? "text-Darkmode_Text"
                          : "text-[#8E94A3]"
                      }`}
                    >
                      <svg
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="currentColor">
                          <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
                        </g>
                      </svg>
                      <p>
                        {userData?.company ? userData.company : "Not Available"}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dark_mode;
