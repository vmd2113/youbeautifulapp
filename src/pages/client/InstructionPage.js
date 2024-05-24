import Banner from "components/banner/Banner";
import HeadingTitle from "components/heading_title/HeadingTitle";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import React from "react";

const InstructionPage = () => {
    const huong_dan_mua_hang = [
        `Bước 1. Tìm sản phẩm tại kính lúp hoặc trong mục sản phẩm sẽ có các danh mục để chọn ra sản phẩm bạn cần.`,
        `Bước 2. Đọc kỹ các quy định và chính sách được công bố tại website và tham khảo các thông tin sản phẩm và bấm thêm vào giỏ.`,
        `Bước 3. Sau khi đã chọn xong các sản phẩm cần mua, bấm vào giỏ hàng trên góc phải để đến bước thanh toán`,
        `Bước 4. Điền các thông tin của người nhận hàng.`,
        `Bước 5. Chọn phương thức thanh toán bạn muốn `,
        `Bước 6. Kiểm tra lại số lượng, mặt hàng, tổng tiền của đơn hàng và bấm vào nút đặt hàng
    `,
    ];

    const chinh_sach_gia_small_content = ` ZestAroma có dịch vụ giao hàng tận nơi trên toàn
    quốc, áp dụng cho khách mua hàng trên Website,
    Fanpage và gọi điện thoại vào Hotline của
    ZestAroma. Đơn hàng sẽ được chuyển phát đến địa
    chỉ khách hàng cung cấp thông qua đơn vị vận
    chuyển trung gian là GIAO HÀNG TIẾT KIỆM hoặc
    247EXPRESS. Đặc biệt, thông tin hóa đơn dán bên
    ngoài kiện hàng luôn luôn có logo cô gái của
    thương hiệu để nhận biết các sản phẩm là chính
    hãng.`;

    const chinh_sach_1 = `
        1. Chính sách giá
            a. Giá sản phẩm niêm yết tại Website là giá đã bao gồm thuế theo quy định pháp luật hiện hành, phí đóng gói và các chi phí khác liên quan đến việc mua hàng trừ các chi phí phát sinh khác được xác nhận qua Hotline hoặc Email của ZestAroma và được sự chấp thuận của khách hàng trong quá trình xác nhận đơn đặt hàng, giao nhận hàng hoá.
        2. Phí vận chuyển:
            a. Với hóa đơn từ 99.000 VNĐ: miễn phí vận chuyển toàn quốc.
            b. Với hóa đơn dưới 99.000 VNĐ: phí vận chuyển mặc định là 30.000 VNĐ áp dụng toàn quốc.
    `;
    const chinh_sach_2 = `
        
        2. Phí vận chuyển:
            a. Với hóa đơn từ 99.000 VNĐ: miễn phí vận chuyển toàn quốc.
            b. Với hóa đơn dưới 99.000 VNĐ: phí vận chuyển mặc định là 30.000 VNĐ áp dụng toàn quốc.
    `;
    const chinh_sach_3 = `
        
    3. Thời gian giao hàng:
    a. Đơn hàng nội thành TP.HCM, Hà Nội: Thời gian giao hàng là 3-4 ngày sau khi đặt hàng.
    
    b. Đơn hàng ở ngoại thành TP.HCM, Hà Nội và các tỉnh thành khác: Thời gian là 2-5 ngày đối với khu vực trung tâm tỉnh thành phố và 6-7 ngày đối với khu vực huyện, xã, thị trấn…
    c. Tuy nhiên, vẫn có những giới hạn và sự chậm trễ do nguyên nhân khách quan như lễ, tết, địa chỉ nhận hàng khó tìm, sự chậm trễ từ dịch vụ chuyển phát,…ZestAroma mong quý khách thông cảm vì những lý do ngoài sự chi phối của chúng tôi.
    d. Trường hợp có sự chậm trễ khi giao hàng xảy ra, ZestAroma sẽ thông báo ngay đến bạn đồng thời sẽ tiếp tục giao hàng hoặc hỗ trợ huỷ đơn hàng nếu bạn muốn. Chúng tôi sẽ không chịu trách nhiệm do việc giao hàng chậm trễ trừ trách nhiệm hoàn trả tiền nếu bạn đã thanh toán mà chưa nhận được sản phẩm.
`;

    // Đoạn văn bản về thời gian giao hàng

    // Đoạn văn bản về quy trình giao nhận, đổi trả, bảo hành sản phẩm
    const chinh_sach_4 = `
        4. Quy trình giao nhận, đổi trả, bảo hành sản phẩm:
            a. Trong quá trình giao nhận hàng, nếu quý khách không có mặt trong đợt nhận hàng thì đơn vị vận chuyển sẽ liên lạc lại với quý khách để hẹn thời gian giao lại hàng (đối đa 2 lần hẹn). Sau 2 lần hẹn giao lại nhưng vẫn không giao thành công thì đơn vị vận chuyển sẽ hoàn hàng về cho ZestAroma và chúng tôi sẽ hoàn trả các chi phí mà bạn đã thanh toán trong vòng 15 ngày làm việc.
            b. Trường hợp việc giao và nhận hàng không thành công do không thể liên lạc được với quý khách trong vòng 3 ngày, đơn vị vận chuyển sẽ hoàn hàng về lại cho ZestAroma và chúng tôi sẽ thông báo đến bạn qua thông tin liên lạc mà bạn đã cung cấp về việc hủy đơn hàng đồng thời hoàn trả các chi phí mà bạn đã thanh toán trong vòng 15 ngày làm việc.
            c. Khi nhận sản phẩm, quý khách vui lòng kiểm tra kỹ tính nguyên vẹn, số lượng sản phẩm theo đơn đặt hàng trước khi nhận. Việc bạn ký xác nhận hoặc ảnh chụp nhận hàng của bạn do đơn vị vận chuyển thu thập trong quá trình giao nhận là chứng từ xác minh chúng tôi đã hoàn thành nghĩa vụ giao hàng đúng với đơn đặt hàng sau khi được bạn kiểm tra ngoại quan.
            d. Đơn vị vận chuyển có trách nhiệm giao hàng và thu thập các chứng từ trong quá trình giao nhận như chữ ký xác nhận hoặc ảnh chụp nhận hàng của khách hàng và lưu trữ theo quy định của pháp luật. Chúng tôi cam kết dùng mọi biện pháp nhằm bảo mật những chứng từ, hình ảnh chúng tôi thu thập của khách hàng và chỉ sử dụng cho mục đích lưu trữ, giải quyết khiếu nại, hỗ trợ khách hàng hoặc các mục đích được cho là đúng pháp luật và cần thiết mà không sử dụng cho mục đích thương mại hay vụ lợi khác.
            e. Quý khách cần quay lại video mở hàng và kiểm tra chất lượng sản phẩm để làm bằng chứng trong trường hợp muốn liên hệ lại với ZestAroma nhằm đổi, trả, bảo hành sản phẩm hoặc khiếu nại các vấn đề liên quan đến sản phẩm mà bạn đã mua.
            f. ZestAroma chỉ nhận đổi trả, bảo hành sản phẩm khi lỗi đến từ nhà sản xuất hoặc do quá trình vận chuyển. Chúng tôi sẽ liên lạc với bạn để hướng dẫn qui cách đóng gói hàng hoàn trả đồng thời thông báo đơn vị thu hồi và gửi sản phẩm tương đương để bổ sung, thay thế theo chính sách giao hàng quy định như trên tính từ ngày nhận được yêu cầu đổi trả, bảo hành sản phẩm, đồng thời chúng tôi sẽ chi trả chi phí vận chuyển cho việc đổi trả, bảo hành này. Lưu ý, chúng tôi chỉ hỗ trợ đổi trả hàng với điều kiện yêu cầu đổi trả không quá 03 ngày kể từ ngày bạn nhận được hàng. Thời gian xử lý hoàn trả, bảo hành được thực hiện tối đa trong vòng 14 ngày tính từ ngày nhận được yêu cầu của bạn.
            g. Đơn hàng của bạn sẽ được đóng gói theo tiêu chuẩn của ZestAroma. Ngoài tiêu chuẩn gói hàng theo quy định, nếu bạn có nhu cầu đóng gói kiện hàng theo yêu cầu đặc biệt khác, vui lòng liên hệ với chúng tôi và chi trả thêm phí theo thoả thuận.
            h. Quý khách có thể thanh toán khi nhận hàng (COD) hoặc có thể chọn phương thức thanh toán trực tuyến.
            i. Mọi thông tin về việc thay đổi hay hủy bỏ đơn hàng, quý khách cần thông báo sớm để chúng tôi có thể hủy hoặc chỉnhh sửa đơn hàng cho bạn kịp thời.
            j. Để kiểm tra mọi thông tin liên quan đến đơn hàng hoặc tình trạng đơn hàng của quý khách, xin vui lòng nhắn tin vào Fanpage, gửi Email hoặc gọi số Hotline và cung cấp tên, số điện thoại hoặc mã đơn hàng để được chúng tôi kiểm tra và hỗ trợ sớm nhất.
    `;

    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <div className="py-10">
                <HeadingTitle className="text-2xl">
                    Hướng dẫn mua hàng
                </HeadingTitle>

                <div
                    className={`w-900 mx-auto  flex flex-col  text-left gap-3 p-10  bg-secondary rounded-lg`}
                >
                    {huong_dan_mua_hang.map((item) => (
                        <div className=" text-darkbg ">{item}</div>
                    ))}
                </div>

                <div>
                    <HeadingTitle className="text-2xl">
                        Chính sách bán hàng
                    </HeadingTitle>

                    <div>
                        <div
                            className={`w-900 mx-auto  flex flex-col  text-left gap-3 p-10  bg-secondary rounded-lg`}
                        >
                            <p className="leading-8">
                                {chinh_sach_gia_small_content}
                            </p>
                            <p className="leading-8">{chinh_sach_1}</p>

                            <p className="leading-8">{chinh_sach_2}</p>

                            <p className="leading-8">{chinh_sach_3}</p>

                            <p className="leading-8">{chinh_sach_4}</p>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default InstructionPage;
