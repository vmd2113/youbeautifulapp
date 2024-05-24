import { Button } from "components/button";
import GridLayout from "components/common/GridLayout";
import HeadingTitle from "components/heading_title/HeadingTitle";
import StoryItem from "modules/story/StoryItem";
import React from "react";
import { v4 } from "uuid";
import { list_story } from "utils/dataStory";
const LayoutStory = () => {
    console.log("Item:", list_story);
    return (
        <div>
            <HeadingTitle>Câu chuyện</HeadingTitle>
            <GridLayout type="home_story">
                {list_story.length > 0 &&
                    list_story.map((item, index) => (
                        <StoryItem item={item} key={v4}></StoryItem>
                    ))}
            </GridLayout>
            <div className="flex items-end justify-end py-5">
                <Button
                    href="/stories"
                    kind="secondary"
                    className="rounded-none text-center p-1 bg-secondary text-pretty h-10 w-300 text-xl"
                >
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default LayoutStory;
