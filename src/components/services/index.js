/**
 * Service Component
 */
import service_img_0 from "../../assets/img/service_0.png"
import s_events from "../../assets/img/s_events.png"
import s_groceries from "../../assets/img/s_groceries.png"
import s_order from "../../assets/img/s_order.png"
import s_recipe from "../../assets/img/s_recipe.png"
import s_reservation from "../../assets/img/s_reservation.png"
export default function Service() {
    return (
        <section class="max-w-screen-xl justify-between mx-auto my-4 p-4">
            <div class=" mt-4">
                <p class="mb-4 text-5xl text-center"><span class="text-[#F54748]">Services</span> To <span class="text-[#FDC55E]">Satisfy</span> Your</p>
                <p class="mb-4 text-5xl text-center"><span class="text-[#F54748]">Cravings</span></p>
            </div>
            <div class="flex flex-row">
                <div class="basis-1/2">
                    <div class="flex justify-center">
                        <img class="object-contain self-center" src={service_img_0} alt="chop inns image" />
                    </div>

                </div>
                <div class="basis-1/2 mt-4 self-center">
                    <div class="">
                        <p class="mb-4 text-5xl">
                            We have <span class="text-[#F54748]">more</span> to
                        </p>
                        <p class="mb-4 text-5xl">
                            our <span class="text-[#FDC55E]">delivery</span> service
                        </p>
                        <p class="mb-4 text-lg font-normal">
                            Take your feeding experience to the next level with us. Our services are specifically for you.
                        </p>
                    </div>
                    <div class="flex items-stretch">
                        <ul>
                            <li><a href="#" class="text-lg font-medium pr-4 py-4">Online Order</a></li>
                            <li><a href="#" class="text-lg font-medium pr-4 py-4">Restaurant Reservation</a></li>
                            <li><a href="#" class="text-lg font-medium pr-4 py-4">Credit Purchase</a></li>
                        </ul>
                        <ul>
                            <li><a href="#" class="text-lg font-medium px-4 py-4">Groceries</a></li>
                            <li><a href="#" class="text-lg font-medium px-4 py-4">Recipe Generation</a></li>
                            <li><a href="#" class="text-lg font-medium px-4 py-4">Food Competitions & Events</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="">
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
        </section>
    )
}