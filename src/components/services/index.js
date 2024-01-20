/**
 * Service Component
 */
import service_img_0 from "../../assets/img/service_0.png"
import service_img from "../../assets/img/service_1.png"
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
                <div class="basis-1/2 mt-4">
                    <p class="mb-4 text-5xl">
                        We have <span class="text-[#F54748]">more</span> to
                    </p>
                    <p class="mb-4 text-5xl">
                        our <span class="text-[#FDC55E]">delivery</span> service
                    </p>
                    <p class="mb-4 text-lg font-normal">
                        Take your feeding experience to the next level with us. Our services are specifically for you.
                    </p>
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
                
            <div class="flex justify-between py-4">
                        <div class="relative my-4 flex justify-center">
                            <img class="" src={service_img} alt=""/>
                            <span class="absolute bottom-0"><a>Order Now</a></span>
                        </div>
                        <div class="relative my-4">
                            <img src={service_img} alt=""/>
                            <span class="absolute bottom-0"><a>Order Now</a></span>
                        </div><div class="relative  my-4">
                            <img src={service_img} alt=""/>
                            <span class="absolute bottom-0"><a>Order Now</a></span>
                        </div>

                        {/* <div class="relative h-32 w-32 ...">
                            <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
                        </div> */}
                    </div>
            </div>
            <div class="flex justify-center">
                <div class="flex-col">
                </div>
            </div>
            <di></di>
        </section>
    )
}