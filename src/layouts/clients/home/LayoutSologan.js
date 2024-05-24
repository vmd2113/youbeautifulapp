import React from "react";
import { v4 } from "uuid";

const LayoutSologan = () => {
    const sologan_1 = `\n
\n
THÂN THIỆN VỚI MÔI TRƯỜNG\n`;
    console.log("sologan: ", sologan_1);

    const footnote =
        "Mỗi kilogram than ZestAroma đang được sử dụng là đang đóng góp vào việc giảm lỗ hổng tầng ozon và tiết kiệm 1 thân cây bị đốn hạ. Hãy chung tay cùng bảo vệ rừng và bảo vệ bầu khí quyển của trái đất!";

    return (
        <div className="bg-secondary py-5">
            <div class="md:flex flex-col md:justify-center md:items-center">
                <div class="md:w-1/2 bg-whiteSoft text-center py-8">
                    <span class="px-8 text-3xl font-secondary    font-bold">
                        THAN NƯỚNG SẠCH KHÔNG KHÓI <br></br>AN TOÀN CHO NGƯỜI SỬ
                        DỤNG<br></br>THÂN THIỆN VỚI MÔI TRƯỜNG
                    </span>
                </div>
                <div class="md:w-1/2 bg-whiteSoft text-center py-3 ">
                    <span class="inline-block px-20 text center  font-primary font-thin">
                        {footnote}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LayoutSologan;
