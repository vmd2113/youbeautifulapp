import HeadingTitle from "components/heading_title/HeadingTitle";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import StoryItemInList from "modules/story/StoryItemInList";
import React from "react";
import { Link } from "react-router-dom";
import { list_story } from "utils/dataStory";
import { v4 } from "uuid";

const StoryPage = () => {
    console.log(list_story);
    return (
        <div>
            <>
                <Header />
                <HeadingTitle>Câu chuyện</HeadingTitle>
            </>

            <div>
                {/* Kiểm tra nếu list_story không tồn tại hoặc rỗng, trả về null để không render gì cả */}
                {list_story && list_story.length > 0 ? (
                    list_story.map((item, index) => (
                        <Link key={v4()} to={`/stories/${item.id}`}>
                            <StoryItemInList item={item} />
                        </Link>
                    ))
                ) : (
                    <p>Không có câu chuyện nào để hiển thị.</p>
                )}
            </div>

            <>
                <Footer />
            </>
        </div>
    );
};

export default StoryPage;
