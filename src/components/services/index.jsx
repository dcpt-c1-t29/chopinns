/**
 * Service Component
 */
import service_img_0 from "../../assets/img/service_0.png"
import service_img_0_m from "../../assets/img/service_0_m.png"

import s_events from "../../assets/img/s_events.png"
import s_groceries from "../../assets/img/s_groceries.png"
import s_order from "../../assets/img/s_order.png"
import s_recipe from "../../assets/img/s_recipe.png"
import s_reservation from "../../assets/img/s_reservation.png"

import credit_icon from "../../assets/img/credit_icon.png"
import events_icon from "../../assets/img/events_icon.png"
import groceries_icon from "../../assets/img/groceries_icon.png"
import order_icon from "../../assets/img/order_icon.png"
import recipe_icon from "../../assets/img/recipe_icon.png"
import reserved_icon from "../../assets/img/reserved_icon.png"

import burger_king from "../../assets/img/burger_king.png"
import domions from "../../assets/img/dominos.png"
import kfc from "../../assets/img/kfc.png"
import pizza_hut from "../../assets/img/pizza_hut.png"
import place from "../../assets/img/place.png"
import spur from "../../assets/img/spur.png"

export default function Service() {
    return (
        <section class="max-w-screen-xl justify-between mx-auto my-4 p-4">
            {/* <div class="hidden md:flex justify-center">
                        <img class="object-contain self-center" src={service_img_0} alt="chop inns image" />
                    </div> */}
            <div class="hidden md:block mt-4">
                <p class="mb-4 text-xl text-center"><span class="text-[#F54748]">Services</span> To <span class="text-[#FDC55E]">Satisfy</span> Your</p>
                <p class="mb-4 text-xl text-center"><span class="text-[#F54748]">Cravings</span></p>
            </div>
            <div class="flex flex-col pb-4 md:flex-row">
                <div class="basis-1/2">
                    <div class="flex justify-center">
                        {/* <img class="object-contain self-center"
                    srcset={ `${service_img_0_m} 760w, ${service_img_0} 800w`}
                    size="(max-width: 700px) 760px, 800px)"
                    src={service_img_0} 
                    alt="chop inns image" /> */}
                        <img class="hidden md:block object-contain self-center" src={service_img_0} alt="chop inns image" />
                        <img class="hidden max-md:block object-contain self-center" src={service_img_0_m} alt="chop inns image" />
                    </div>
                </div>
                <div class="basis-1/2 mt-4 self-center">
                    <div class="">
                        <p class="mb-4 text-xl">
                            We have <span class="text-[#F54748]">more</span> to
                            our <span class="text-[#FDC55E]">delivery</span> service
                        </p>
                        <p class="mb-4 text-l font-normal">
                            Take your feeding experience to the next level with us. Our services are specifically for you.
                        </p>
                    </div>
                    <div class="flex items-stretch max-md:flex-col ">
                        <ul>
                            <li class="">
                                <a href="#" class="flex flex-row pr-4 py-2">
                                    <img src={order_icon} alt="chopinns order online icon" />
                                    <label class="pl-2">Online Order</label>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex flex-row pr-4 py-2">
                                    <img src={reserved_icon} alt="chopinns restaurant reservation icon" />
                                    <label class="pl-2">Restaurant Reservation</label>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex flex-row pr-4 py-2">
                                    <img src={credit_icon} alt="chopinns credit purchase icon" />
                                    <label class="pl-2">Credit Purchase</label>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" class="flex flex-row pr-4 py-2 md:px-4">
                                    <img src={groceries_icon} alt="chopinns groceries icon" />
                                    <label class="pl-2">Groceries</label>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex flex-row pr-4 py-2 md:px-4">
                                    <img src={recipe_icon} alt="chopinns recipe generation icon" />
                                    <label class="pl-2">Recipe Generation</label>
                                </a>
                            </li>
                            <li><a href="#" class="flex flex-row pr-4 py-2 md:px-4">
                                <img src={events_icon} alt="chopinns Food competitions & events icon" />
                                <label class="pl-2">Food Competitions & Events</label>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="hidden md:block">
                <div class="flex justify-between py-4 text-[#FFF] text-lg font-normal">
                    <div class="relative my-4 flex justify-center">
                        <img class="" src={s_order} alt="Online Orders Chop Inns" />
                        <span class="absolute bottom-0 bg-[#F54748] rounded-[14px]">
                            <a href="#" class="mx-2">Order Online</a>
                        </span>
                    </div>
                    <div class="relative my-4  flex justify-center">
                        <img src={s_reservation} alt="Restaurant Reservation Chop Inns" />
                        <span class="absolute bottom-0 bg-[#F54748] rounded-[14px]">
                            <a href="#" class="mx-2">Restaurant Reservation</a>
                        </span>
                    </div><div class="relative  my-4  flex justify-center">
                        <img src={s_order} alt="Online Orders Chop Inns" />
                        <span class="absolute bottom-0 bg-[#F54748] rounded-[14px]">
                            <a href="#" class="mx-2">Order Online</a>
                        </span>
                    </div>
                </div>
                <div class="flex justify-between py-4 text-[#FFF] text-lg font-normal">
                    <div class="relative my-4 flex justify-center">
                        <img class="" src={s_groceries} alt="Groceries Chop Inns" />
                        <span class="absolute bottom-0 bg-[#F54748] rounded-[14px]">
                            <a href="#" class="mx-2">Groceries</a>
                        </span>
                    </div>
                    <div class="relative my-4  flex justify-center">
                        <img src={s_recipe} alt="Recipe Generation Chop Inns" />
                        <span class="absolute bottom-0 bg-[#F54748] rounded-[14px]">
                            <a href="#" class="mx-2">Recipe Generation</a></span>
                    </div><div class="relative  my-4  flex justify-center">
                        <img src={s_events} alt="competitions and events chop inns" />
                        <span class="absolute bottom-0 bg-[#F54748] rounded-[14px]">
                            <a href="#" class="mx-2">Competitions & Events</a>
                        </span>
                    </div>
                </div>
            </div>
            {/* mobile service block */}
            <div class="md:hidden">
                <div class="mt-4">
                    <p class="mb-4 text-xl text-center"><span class="text-[#F54748]">Services</span> To <span class="text-[#FDC55E]">Satisfy</span> Your</p>
                    <p class="mb-4 text-xl text-center"><span class="text-[#F54748]">Cravings</span></p>
                </div>
                <div class="flex flex-row mt-6 justify-evenly">
                    <a href="#"><img src={spur} alt="order from spur" /></a>
                    <a href="#"><img src={kfc} alt="order from kfc" /></a>
                </div>
                <div class="flex flex-row mt-6 justify-evenly">
                    <a href="#"><img src={burger_king} alt="order from spur" /></a>
                    <a href="#"><img src={place} alt="order from kfc" /></a>
                </div>
                <div class="flex flex-row mt-6 justify-evenly">
                    <a href="#"><img src={pizza_hut} alt="order from spur" /></a>
                    <a href="#"><img src={domions} alt="order from kfc" /></a>
                </div>
            </div>

        </section>
    )
}