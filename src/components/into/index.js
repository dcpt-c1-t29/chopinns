/**
 * Intro Nav Component
 */
import intro_img from "../../assets/img/intro_1.png"
export default function Intro() {
    return (
        <section class="max-w-screen-xl justify-between mx-auto my-4 p-4">
            <div class="flex flex-row">
                <div class="basis-1/2">
                    <p class="w-fit flex justify-start m-5 bg-[#FEEDED] rounded-[14px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" class="" viewBox="-4 -5 24 24">
                            <circle cx="8" cy="7.5" r="10.5" fill="#F54748" />
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" fill="#FDC55E"></path> </svg>
                        <span class="self-end text-lg mb-4">People Trust us</span>

                    </p>
                    <p class="mb-4 text-6xl">
                        We're <span class="text-[#F54748]">Serious</span> For <span class="text-[#F54748]">Food</span> & <span class="text-[#FDC55E]">Delivery</span>.
                    </p>
                    <p class="mb-4 text-xl font-normal">
                        Best restaurants, healthy dishes, and fast delivery service at your fingertips. Tasty food will reach you in 25 minutes.
                    </p>
                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative rounded-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Craving" required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    {/* <form>
                        <input/>
                    </form> */}

                </div>
                <div class="basis-1/2">
                    <div class="flex justify-center">
                        <img class="object-contain  h-61 w-96" src={intro_img} alt="chop inns image" />
                    </div>

                </div>
            </div>
        </section>
    )
}