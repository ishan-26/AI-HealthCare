import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-black text-white min-h-screen">
    <div className="flex justify-center space-x-4 p-6">
      {/* First Profile Card */}
      <div className="w-96 px-6 py-6 text-center bg-gray-800 rounded-lg">
        <div className="space-y-4 xl:space-y-6">
          <img
            className="mx-auto rounded-full h-36 w-36"
            src="https://media.licdn.com/dms/image/v2/D5603AQFPuQ9Lm4X1sg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676211376067?e=1733961600&v=beta&t=I4MVlDC9dj_Itsi__8WOqhaPxStSDRhxdrwX-zWLh30"
            alt="author avatar"
          />
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-white">Ishan Dhotre</h3>
              <p className="text-indigo-300">Software Developer</p>
              <div className="flex justify-center mt-5 space-x-5">
                <a
                  href="https://www.linkedin.com/in/ishan-dhotre-62ab48242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-400 hover:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.555v-5.584c0-1.333-.025-3.048-1.85-3.048-1.849 0-2.131 1.446-2.131 2.93v5.702H10.527V10.999h3.415v1.543h.049c.476-.901 1.638-1.849 3.362-1.849 3.593 0 4.252 2.366 4.252 5.442v4.317zm-15.238 0H3.654V10.999h3.555zm-1.779-11.522c-1.141 0-2.059-.928-2.059-2.079 0-1.151.917-2.078 2.059-2.078 1.142 0 2.059.927 2.059 2.078 0 1.151-.917 2.079-2.059 2.079zm17.614 12.066c0 .85-.675 1.541-1.5 1.541-.823 0-1.5-.691-1.5-1.541 0-.853.677-1.542 1.5-1.542.825 0 1.5.688 1.5 1.542z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/ishan-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="w-6 h-6 text-gray-400 hover:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Profile Card */}
      <div className="w-96 px-6 py-6 text-center bg-gray-800 rounded-lg">
        <div className="space-y-4 xl:space-y-6">
          <img
            className="mx-auto rounded-full h-36 w-36"
            src="https://media.licdn.com/dms/image/v2/D5603AQEHSx7wZVjqpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1672769364120?e=1733961600&v=beta&t=zBcfwamTAg45X0DTtMZRQ9PjlztwJMcT9iySyLY5sx8"
            alt="author avatar"
          />
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-white">Abhilesh Bhosale</h3>
              <p className="text-indigo-300">Software Developer</p>
              <div className="flex justify-center mt-5 space-x-5">
                <a
                  href="https://www.linkedin.com/in/abhilesh-bhosale-0b9b33228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-400 hover:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.555v-5.584c0-1.333-.025-3.048-1.85-3.048-1.849 0-2.131 1.446-2.131 2.93v5.702H10.527V10.999h3.415v1.543h.049c.476-.901 1.638-1.849 3.362-1.849 3.593 0 4.252 2.366 4.252 5.442v4.317zm-15.238 0H3.654V10.999h3.555zm-1.779-11.522c-1.141 0-2.059-.928-2.059-2.079 0-1.151.917-2.078 2.059-2.078 1.142 0 2.059.927 2.059 2.078 0 1.151-.917 2.079-2.059 2.079zm17.614 12.066c0 .85-.675 1.541-1.5 1.541-.823 0-1.5-.691-1.5-1.541 0-.853.677-1.542 1.5-1.542.825 0 1.5.688 1.5 1.542z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/abhi6390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="w-6 h-6 text-gray-400 hover:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Profile Card */}
      <div className="w-96 px-6 py-6 text-center bg-gray-800 rounded-lg">
        <div className="space-y-4 xl:space-y-6">
          <img
            className="mx-auto rounded-full h-36 w-36"
            src="https://media.licdn.com/dms/image/v2/D5603AQFmddcLAzpRVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678962674815?e=1733961600&v=beta&t=ZitCDsFBbykeGzkrPIjc52I53ClQ2W_CHZlX7L4pa-E"
            alt="author avatar"
          />
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-white">H C Srihari</h3>
              <p className="text-indigo-300">Software Developer</p>
              <div className="flex justify-center mt-5 space-x-5">
                <a
                  href="https://www.linkedin.com/in/hc-srihari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-400 hover:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.555v-5.584c0-1.333-.025-3.048-1.85-3.048-1.849 0-2.131 1.446-2.131 2.93v5.702H10.527V10.999h3.415v1.543h.049c.476-.901 1.638-1.849 3.362-1.849 3.593 0 4.252 2.366 4.252 5.442v4.317zm-15.238 0H3.654V10.999h3.555zm-1.779-11.522c-1.141 0-2.059-.928-2.059-2.079 0-1.151.917-2.078 2.059-2.078 1.142 0 2.059.927 2.059 2.078 0 1.151-.917 2.079-2.059 2.079zm17.614 12.066c0 .85-.675 1.541-1.5 1.541-.823 0-1.5-.691-1.5-1.541 0-.853.677-1.542 1.5-1.542.825 0 1.5.688 1.5 1.542z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/HC-Srihari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="w-6 h-6 text-gray-400 hover:text-gray-100"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
